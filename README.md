# 💫 Pharmaceutical Supplychain Management

<!-- Background github cover with short introduction down below 
<img src="https://github.com/flexycode/CTINFMGL/blob/main/asset/Information-Management.png" />
-->

### Team Name: [Artificial Ledger Technology](https://github.com/flexycode)  
### Subject & Section: [CTFDMBSL - COM231](https://www.youtube.com/watch?v=bFr6it_iYdU)
### Schedule: [WED 01:00PM - 05:00 PM 408 MB - SAT 01:00PM - 03:40 PM 501 MB](https://www.youtube.com/watch?v=bFr6it_iYdU)
### Professor: [Mrs. Jensen A. Santillan](https://www.youtube.com/watch?v=_kUFws-dHEI)     
### No. of Units: [3 Units](https://www.youtube.com/watch?v=HNefNLOHVYk)
### Prerequisite: [CTINFMGL - INFORMATION MANAGEMENT](https://github.com/flexycode/CTINFMGL)

<!-- Genshin Impact -->
<div align="center">
<img src="https://media.giphy.com/media/jUckyQVjuHNx9vXUtv/giphy.gif?cid=ecf05e47s58r7w8mev9d2vugcw28eadlktivra6h0amea6z2&ep=v1_gifs_search&rid=giphy.gif&ct=g" width="250">
<img src="https://media.giphy.com/media/uFygSquQkzbJTn3eQe/giphy.gif?cid=ecf05e47lpnwmxubw6vck95ymg1j0anne5ofqr69t8v43vcf&ep=v1_gifs_search&rid=giphy.gif&ct=g" width="300">
<img src="https://media.giphy.com/media/Yg0eXe6DhK8pVlUtVJ/giphy.gif?cid=ecf05e47lpnwmxubw6vck95ymg1j0anne5ofqr69t8v43vcf&ep=v1_gifs_search&rid=giphy.gif&ct=g" width="250">
</div>

<!-- Introduction down below -->
# 🧠 [Introduction](#introduction)

The Pharmaceutical Supply Chain Management web application is designed to streamline the internal distribution of generic medicines within healthcare facilities. By leveraging cutting-edge technologies such as Artificial Intelligence and Blockchain, our platform ensures secure, efficient, and transparent management of pharmaceutical products.

## 🏦 Case Study: Pharmaceutical Supply Chain Management

#### Overview
The Pharmaceutical Supply Chain Management application serves as a comprehensive solution for managing the distribution of generic medicines. It features a user-friendly interface that allows healthcare professionals to search for products, inquire about availability, and make purchases seamlessly. The application also includes robust classification systems for different types of medications, ensuring that users can easily find what they need. Our goal is to revolutionize the pharmaceutical supply chain by enhancing efficiency, security, and accessibility.

<!-- Key Features -->
## ✨ Key Features

🚀 1. **Search Bar:** A powerful search functionality that allows users to quickly find products based on name, type, or classification.

🚀 2. **Product Inquiry:** Users can inquire about product availability, pricing, and other details for both over-the-counter and prescription medications.

🚀 3. **Product Sales:** A dedicated section for purchasing products, ensuring a smooth transaction process.

🚀 4. **Classification System:** Products are categorized into Over the Counter and Prescription Products for easy navigation.

🚀 5. **Diverse Product Types:** Comprehensive listings of various medication types, including:
* Analgesics
* Anti-anemic Preparations
* Antibiotics
* Antidiabetics
* Cardiovascular Medication
* Cough and Colds Medications
* Gastrointestinal Medications
* Medical Devices and Supplies
* Nose and Throat Preparations
* OB Preparations
* Pediatric Preparations
* Steroids
* Vitamins, Minerals, and Dietary Supplements

🚀 6. **AI-Powered Recommendations:** Utilizing AI algorithms to suggest products based on user preferences and past inquiries, enhancing the user experience.

🚀 7. **Blockchain Technology:** Ensuring secure transactions and traceability of products throughout the supply chain, providing transparency and trust.

🚀 8. **Admin Dashboard:** A robust admin panel for managing product listings, user accounts, and transaction records.

<!-- Techstacks down below (temporary need some proper decision for the group team in order to inlign for the project -->
## 💻 Techstacks # 1

* **Programming Language:** [TypeScript](https://www.typescriptlang.org/) 
* **Frontend:** [React.js](https://react.dev/), HTML5, CSS3 +
* **Build tool and Development server:** [Vite](https://vite.dev/)
* **Backend:** [[Supabase](https://supabase.com/)
* **Database:** SQL / Posgresql integrated in Supabase

## 🚀 Future Features
* **AI Integration:** TensorFlow, Scikit-learn
* **Blockchain:** Ethereum, Smart Contracts
* **Payment Gateway:** Stripe, Paypal


## 🕵️ PharmaXLedger Several key Features:

**1. Supply Chain Management:**
* Tracks medicines from suppliers through warehouses to end customers
* Manages inventory across multiple warehouses
* Handles both parent companies and subsidiaries
* Processes batch orders and customer orders

**2. Medicine Management:**
* Comprehensive medicine catalog with detailed information
* Tracks dosage, form, origin, and manufacturer
* Real-time inventory tracking
* Price and stock management

**3. User Interface:**
* Modern, responsive design using Radix UI components
* Role-based access with admin and user views
* Shopping cart functionality for orders
* Detailed admin dashboard for supply chain oversight

**4. Security and Data Management:**
* Authentication system for users
* Row-level security in the database
* Real-time updates for inventory changes
* Comprehensive audit trails with timestamps

**5. Technical Implementation:**
* React with TypeScript for type safety
* Supabase for backend services
* TailwindCSS for styling
* Modern component architecture
* Environment-based configuration


# 💻 How to Run this Application


### 1️⃣👷 First, let's check the package.json scripts we saw earlier and then set up the necessary environment variables.

From the package.json, we know this is a Vite application with the following scripts:
```
dev: For development
build: For production build
preview: For previewing the build
```
Before running the app, we need to ensure we have:

1. Node modules installed
2. Environment variables set up (particularly for Supabase)

Let me help you set these up:

### 2️⃣🚀 Second, let's install the dependencies:

```
npm install
```

### 3️⃣🚍 After installing dependencies, we need to set up the environment variables (.env) for Supabase

```
ls -la | grep .env
```

#### A. Create a `.env` file in the root directory:
You'll need to replace these values with your actual Supabase credentials. To get these credentials:
1. Go to [supabase](https://supabase.com)
2. Sign up/Login to your account
3. Create a new project or use an existing one
4. Once in your project:
   * The `VITE_SUPABASE_URL` can be found in Project Settings > API > Project URL
   * The `VITE_SUPABASE_ANON_KEY` can be found in Project Settings > API > anon/public

#### B. After setting up your Supabase project, you'll need to:
1. Run the database migrations that are in the `/supabase/migrations` folder in your Supabase project

2. Replace the placeholder values in the `.env` file with your actual Supabase credentials

#### C. Here's what each environment variable is for:

* **VITE_SUPABASE_URL:** Your Supabase project URL
* **VITE_SUPABASE_ANON_KEY:** Your Supabase project's anonymous key (public key)
* **VITE_TEMPO:** A flag for development tools (set to false by default)

### 4️⃣ Run the application

Once you have:
1. Installed the dependencies (`npm install`)
2. Set up your Supabase project
3. Added your Supabase credentials to the `.env` file

You can then run the application in development mode with:
```
npm run dev
```

<!-- Techstacks down below (temporary need some proper decision for the group team in order to inlign for the project

## 1️⃣👷 Install Dependencies
Run npm install to to install node modules 
Also you direct already to frontend folder and run npm start
```
npm install
```

## 2️⃣🚀 Run React-app
Direct to frontend folder after you install the node modules
```
cd frontend
npm start
```

## 3️⃣🚍 Run Node.js 
Open another terminal in the current codebase to run nodejs for VS Code or other IDE base on what you are using such as Webstorm
```
cd backend 
node index.js
```

## 4️⃣ Connect Database 
```
Connect MySQL dbs through Database repository folder
```

-->

<!-- Front-End Overview -->
# 🚀 Screenshot of Project Overview

```
🚀 Coming Soon!!!
```

### 🌟 Design Overview

<!-- Front Page 
<img src="https://github.com/flexycode/CTINFMGL_FINAL_PROJECT/blob/main/assets/Front%20Page.png" />
-->

### 🌟 Medicine Catalog

<!-- Search Flight 
<img src="https://github.com/flexycode/CTINFMGL_FINAL_PROJECT/blob/main/assets/Search%20Flight.png" />
-->

### 🌟 PharmaXLedger Dashboard

<!-- Background Video 
<img src="https://github.com/flexycode/CTINFMGL_FINAL_PROJECT/blob/main/assets/Video%20Page.png" />
-->

<!-- Database Schema Revision, Also image for Data Model and Entity Relationship Diagram ERD. Link should be point out through assets folder for editing README.md -->
## 🧊 Database Schema

#### SQL
```
Cumming Soon
```

## 🧊 Data Integration in Supabase

#### PosgresSQL
```
Cumming Soon
```

<!-- Data Model Image link down below -->
# 🧊 Data Model
```
Description 🚀 Coming Soon!!!
```

## 🧊 Flow Chart

<img src="https://github.com/flexycode/CTFDMBSL_FINAL_PROJECT/blob/main/assets/Flow%20Chart.png" />


<!-- Entity Attribute Value Model Image link down below -->
## 🧊 Entity Attribute Value Model
```
🚀 Coming Soon!!!
```

<!-- Normalization link down below -->
## 🧊 Normalization

```
🚀 Coming Soon!!!
```

<!-- Normalization Images 
<img src="https://github.com/flexycode/CTINFMGL_FINAL_PROJECT/blob/main/documentation/images/Normalization%20SS-1.png" />

<img src="https://github.com/flexycode/CTINFMGL_FINAL_PROJECT/blob/main/documentation/images/Normalization%20SS-2.png" />

<img src="https://github.com/flexycode/CTINFMGL_FINAL_PROJECT/blob/main/documentation/images/Normalization%20SS-3.png" />
-->

```
Full Overview of Normalization is in the Folder of documentation
```

<!-- Entity Relationship Diagram Image link down below -->
## 🧊 Entity Relationship Diagram
#### Proposal Version 
<img src="https://github.com/flexycode/CTFDMBSL_FINAL_PROJECT/blob/main/assets/Pharmaceutical%20Supply%20Chain.png" />

#### Final Version 
<img src="https://github.com/flexycode/CTFDMBSL_FINAL_PROJECT/blob/main/assets/PSCM%20-%20ERD.png" />

<!-- Sequence Diagram Image link down below -->
## 🧊 Sequence Diagram

<img src="https://github.com/flexycode/CTFDMBSL_FINAL_PROJECT/blob/main/assets/Sequence%20Diagram.png" />

<!-- Cloud Architecture Image link down below -->
## 🧊 Cloud Architecture

```
🚀 Coming Soon!!!
```

<!-- Cloud Architecture Image 
<img src="https://github.com/flexycode/CTINFMGL_FINAL_PROJECT/blob/main/assets/Cloud%20Architecture.png" />
-->

<!-- 📜 Folder Structure down below -->
# 📁 Repository Structure
```
CTFDMBSL_FINAL_PROJECT/
│
├── LICENSE
├── README.md
```

<!-- 🏆 Contributers down below -->
# 🏆 Contributing     

### Contributing     
If you would like to contribute to the Flight Booking App, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

### 🧠 Submitting Changes

🧠 Contributions are welcome! If you have ideas for improvements or want to add more exercises, follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push to your fork and submit a pull request. 💕💕💕💕

<!-- Contributors down below, kindly paste your github URL thanks and also you can revise your suited job title position -->
### 👋 Contributors
### Special thanks to all my groupmates: 
 * ####  😎 [Jay Arre Talosig](https://github.com/flexycode) - Machine Learning Engineer | Blockchain Developer | Bioinformatics Scientist | Blackhat
 * ####  🎲 [Brian De Vera](https://github.com/scarfer14) - Network Security Engineer | Cyber Security Engineer | Robotics Engineer | Whitehat
 * ####  🛸 [Anthonee Buno](https://github.com/leirk04) - Software Engineer | Fullstack Developer  
 * ####  🤖 [Chloe from Cyberlife](https://calixtojj.github.io/detroit/char/chloe.html) - Necromancer | A Machine | Deviant


# 🛸 FAQ
<!--  Reporting issues -->
### 🛸 Reporting Issues

```bash
Some changes need to be address
- Fix Bug in the Frontend
- Fix Bug in the Backend
- CRUD operation management in SQL Workbench
```

###### 🤖 If you encounter any issues or have suggestions, please open an issue to let us know.

<!--  License will provide soon -->
# 🔑 License     

```
Coming Soon In the License tab 
```
## National University of Manila License   

The National University of Manila License grants permission to students of the National University of Manila to use, modify, and distribute this project for educational purposes within the scope of their coursework and assignments.

### Usage 

- You may use this project as a reference or learning material for your studies at the National University of Manila.
- You may modify the project to suit your educational needs and requirements.
- You may share the project with your fellow students or instructors for educational purposes.

### Restrictions

- You may not use this project for commercial purposes.
- You may not redistribute or publish this project outside the National University of Manila without explicit permission.

## Disclaimer

This project is provided "as is" without warranty of any kind, express or implied. The National University of Manila and the project contributors disclaim any liability or responsibility for any direct, indirect, incidental, special, exemplary, or consequential damages arising out of the use or misuse of this project.


# 🔭 Acknowledgements     

<!--  Need to revise this background info of Professor Jensen A. Santillan  -->
### ✨ Professor
Professor Mrs. Jensen Santillan is a highly respected academic and industry practitioner. Her expertise spans a wide range of areas, including Data Analytics, Data Science, Data Analysis, Data Structures, and Information Management. As a distinguished faculty member at the College of Computing and Information Technology at National University, she shares her knowledge and skills with students.


<!-- Always document your changes, pull-request, bugfix, updates, patch notes for this final project. Always use this "🧊 Flight Booking" for commiting message for "pushing code" or "Pull-request"   -->
# 📫 Changelogs 
Chronological list of updates, bug fixes, new features, and other modifications for our Pharmaceutical Supply Chain Management.

## 💻 [1.0.0] - 2025-03-22      
### Role & Project Management

### Added  
- ✨ Create Repository

### Changed
- ✨ Folder set rename

### Fixed 
- ✨ Fix changelogs

## [1.0.1] - 2025-03-26   
### Added  
- ✨ Create an design concept for Pharmaceutical Supply Chain Management
- ✨ Create Entity Relationship Diagram
- ✨ Add Entity Relationship Diagram (ERD) files
- ✨ Add Database Schema for SQL
- ✨ Add Database Schema for MongoDB

## [1.0.1] - 2025-04-07   
### Added  
- ✨ Create Frontend

## [2.0.1] - 2025-04-17   
### Added  
- ✨ Develop Homepage of PharmaXLedger
- ✨ Design a Wireframe for MedicineCatalog and ShoppingCart
- ✨ Develop AdminDashboard and LandingPage
- ✨ Added a setup and integration for Supabase
- ✨ Added Sign Up Form
- ✨ Added a MedicineForm
### Added 
- ✨ Fixed bug on ShoppingCart
- ✨ Fix bug regarding on SignIn and SignOut

## [2.0.1] - 2025-04-19   
### Added  
- ✨ Develop Private Repo for PharmaXLedger (will transfer here once finish)
- ✨ Add procedure on how to run the application

🧊 CTFDMBSL

<!-- Introduction Pannel button link, it will redirect to the top -->

#### [Back to Table of Content](#-introduction)

<!-- End point line insert Thanks for visiting enjoy your day, feel free to modify this  -->
---

<p align="center">
<img src="https://readme-typing-svg.demolab.com/?lines=Thanks+For+Visiting+Enjoy+Your+Day+~!;" alt="mystreak"/>
</p>

<!-- Genshin Impact -->
<div align="center">
<img src="https://media.giphy.com/media/BqjYZq0yMVRYvyCfgL/giphy.gif?cid=ecf05e476fpqi63k6pmpvgbhklal1pw4ewurwhz1gezg1ag0&ep=v1_stickers_search&rid=giphy.gif&ct=s" width="300">
</div>

<!-- End point line insert Comeback again next time, feel free to modify this  -->
<p align="center">
<img src="https://readme-typing-svg.demolab.com/?lines=💎💎Come+Back+Again+next+time💎💎" alt="mystreak"/>
</p>

</p>
    
<br>
<!-- End point insert background effect line of sight color red -->
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="1000">
