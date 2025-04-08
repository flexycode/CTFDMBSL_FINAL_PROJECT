import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, loading, error }) => {
  if (loading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="error">Error loading products: {error}</div>;
  
  if (products.length === 0) {
    return <div className="no-results">No products found. Try adjusting your search criteria.</div>;
  }
  
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;