from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity
from pymongo import MongoClient
from werkzeug.security import generate_password_hash, check_password_hash
from bson.objectid import ObjectId
import os
import datetime

app = Flask(__name__)
CORS(app)

# Configuration
app.config['JWT_SECRET_KEY'] = os.environ.get('JWT_SECRET_KEY', 'dev-secret-key')
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = datetime.timedelta(hours=24)
app.config['MONGO_URI'] = os.environ.get('MONGO_URI', 'mongodb://localhost:27017/pharma_supply')

# Initialize JWT
jwt = JWTManager(app)

# Connect to MongoDB
client = MongoClient(app.config['MONGO_URI'])
db = client.pharma_supply

# Helper function to convert MongoDB objectID to string for JSON serialization
def serialize_doc(doc):
    if doc.get('_id'):
        doc['_id'] = str(doc['_id'])
    return doc

# Authentication routes
@app.route('/api/auth/register', methods=['POST'])
def register():
    data = request.get_json()
    
    if db.users.find_one({'email': data['email']}):
        return jsonify({'error': 'Email already registered'}), 400
    
    user = {
        'email': data['email'],
        'password': generate_password_hash(data['password']),
        'role': data.get('role', 'user'),
        'created_at': datetime.datetime.utcnow()
    }
    
    db.users.insert_one(user)
    
    access_token = create_access_token(identity=str(user['_id']))
    return jsonify({
        'token': access_token,
        'user': serialize_doc(user)
    }), 201

@app.route('/api/auth/login', methods=['POST'])
def login():
    data = request.get_json()
    user = db.users.find_one({'email': data['email']})
    
    if not user or not check_password_hash(user['password'], data['password']):
        return jsonify({'error': 'Invalid credentials'}), 401
    
    access_token = create_access_token(identity=str(user['_id']))
    return jsonify({
        'token': access_token,
        'user': serialize_doc(user)
    })

@app.route('/api/auth/user', methods=['GET'])
@jwt_required()
def get_user():
    current_user_id = get_jwt_identity()
    user = db.users.find_one({'_id': ObjectId(current_user_id)})
    
    if not user:
        return jsonify({'error': 'User not found'}), 404
    
    return jsonify({'user': serialize_doc(user)})

# Product routes
@app.route('/api/products', methods=['GET'])
def get_products():
    products = list(db.products.find())
    return jsonify({'products': [serialize_doc(p) for p in products]})

@app.route('/api/products/<id>', methods=['GET'])
def get_product(id):
    product = db.products.find_one({'_id': ObjectId(id)})
    if not product:
        return jsonify({'error': 'Product not found'}), 404
    return jsonify({'product': serialize_doc(product)})

@app.route('/api/products', methods=['POST'])
@jwt_required()
def create_product():
    current_user_id = get_jwt_identity()
    user = db.users.find_one({'_id': ObjectId(current_user_id)})
    
    if user['role'] != 'admin':
        return jsonify({'error': 'Unauthorized'}), 403
    
    data = request.get_json()
    product = {
        'name': data['name'],
        'description': data['description'],
        'price': data['price'],
        'category': data['category'],
        'stock': data['stock'],
        'created_at': datetime.datetime.utcnow()
    }
    
    result = db.products.insert_one(product)
    product['_id'] = str(result.inserted_id)
    
    return jsonify({'product': product}), 201

if __name__ == '__main__':
    app.run(debug=True, port=5000)