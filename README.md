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
### Project Link: [PharmaXLedger Project Link](https://github.com/flexycode/PharmaXLedger)

<!-- Genshin Impact -->
<div align="center">
<img src="https://media.giphy.com/media/jUckyQVjuHNx9vXUtv/giphy.gif?cid=ecf05e47s58r7w8mev9d2vugcw28eadlktivra6h0amea6z2&ep=v1_gifs_search&rid=giphy.gif&ct=g" width="250">
<img src="https://media.giphy.com/media/uFygSquQkzbJTn3eQe/giphy.gif?cid=ecf05e47lpnwmxubw6vck95ymg1j0anne5ofqr69t8v43vcf&ep=v1_gifs_search&rid=giphy.gif&ct=g" width="300">
<img src="https://media.giphy.com/media/Yg0eXe6DhK8pVlUtVJ/giphy.gif?cid=ecf05e47lpnwmxubw6vck95ymg1j0anne5ofqr69t8v43vcf&ep=v1_gifs_search&rid=giphy.gif&ct=g" width="250">
</div>

<!-- Introduction down below -->
# 🧠 [Introduction](#introduction)

### PharmaXLedger

PharmaXLedger is a comprehensive pharmaceutical supply chain management platform that leverages modern web technologies to provide secure, transparent tracking and management of pharmaceutical shipments.

<img src="https://github.com/flexycode/CTFDMBSL_FINAL_PROJECT/blob/main/assets/pharmaxledger/pharmaceutical.png" />

## 🏦 Case Study: Pharmaceutical Supply Chain Management

#### Overview
The Pharmaceutical Supply Chain Management application serves as a comprehensive solution for managing the distribution of generic medicines. It features a user-friendly interface that allows healthcare professionals to search for products, inquire about availability, and make purchases seamlessly. The application also includes robust classification systems for different types of medications, ensuring that users can easily find what they need. Our goal is to revolutionize the pharmaceutical supply chain by enhancing efficiency, security, and accessibility.

<!-- Key Features -->

## ✨ Introduction

**Project Overview:** PharmaXLedger is an internal web-based supply chain management system designed for a group of pharmaceutical companies, including a parent company and its subsidiaries. It facilitates real-time inventory tracking, supplier coordination, and seamless order processing within a secure, private environment.

**Problem Statement:** The pharmaceutical industry faces significant challenges in supply chain management, including:
- Lack of real-time visibility across the entire supply chain
- Data silos between different departments and subsidiary companies
- Inefficient manual tracking processes leading to errors and delays
- Compliance risks due to inadequate documentation and tracking
- Difficulty in quickly responding to supply chain disruptions

**Objectives:**

**General Objective:**
To develop a centralized, real-time pharmaceutical supply chain management system for internal use across a network of related companies.

**Specific Objectives:**
- Implement end-to-end tracking of pharmaceutical products from manufacturer to end customer
- Create a secure, role-based access control system for different stakeholders
- Enable real-time notifications and alerts for critical supply chain events
- Generate comprehensive analytics and reports for inventory, shipment, and compliance tracking
- Design a relational database that maintains relationships between entities while ensuring data integrity
- Facilitate seamless communication between different departments and subsidiary companies
- Ensure regulatory compliance through proper documentation and audit trails


<!-- Techstacks down below (temporary need some proper decision for the group team in order to inlign for the project -->
## 💻 Techstacks # 1

* **Programming Language:** [TypeScript](https://www.typescriptlang.org/) 
* **Frontend:** [React.js](https://react.dev/), HTML5, CSS3 +
* **Build tool and Development server:** [Vite](https://vite.dev/)
* **Backend:** [[Supabase](https://supabase.com/)
* **Database:** SQL / Posgresql integrated in Supabase

## 🚀 Future Features Use case
* **AI Integration:** TensorFlow, Scikit-learn
* **Blockchain:** Ethereum, Smart Contracts, Solidity, DeFi
* **Payment Gateway:** Stripe, Paypal


## Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [System Design](#system-design)
- [Implementation](#implementation)
- [Evaluation](#evaluation)
- [System Architecture](#system-architecture)
- [Database Schema (ERD)](#database-schema)
- [Getting Started](#getting-started)
- [Authentication](#authentication)
- [User Roles](#user-roles)
- [Application Flow](#application-flow)
- [Contributing](#contributing)

## Features

- **Secure Authentication**: Email/password authentication with role-based access control
- **Shipment Tracking**: Real-time tracking of pharmaceutical shipments
- **Inventory Management**: Track and manage pharmaceutical inventory
- **Admin Dashboard**: Comprehensive admin panel for system management
- **User Management**: User registration and profile management
- **Support System**: In-app support chat for user assistance
- **Responsive Design**: Works seamlessly across desktop and mobile devices

## Technology Stack

- **Frontend**:
  - React 18 with TypeScript
  - Tailwind CSS for styling
  - Shadcn UI component library
  - React Router for navigation
  - Tanstack React Query for data fetching

- **Backend**:
  - Supabase for authentication, database, and storage
  - PostgreSQL database
  - Supabase Edge Functions for serverless computing

## System Design

### 3.1 System Architecture

PharmaXLedger implements a modern client-server architecture with a distributed database approach to handle pharmaceutical supply chain data. The system is designed with the following key architectural components:

**Frontend Layer:**
- React SPA with TypeScript providing a responsive user interface
- Component-based architecture for reusability and maintainability
- State management using React hooks and context API

**API Layer:**
- RESTful API services via Supabase
- Authentication and authorization middleware
- Data validation and transformation services

**Database Layer:**
- PostgreSQL relational database for structured data storage
- Hybrid data distribution strategy:
  - Vertical fragmentation for sensitive data (separating user profiles from transaction data)
  - Selective replication for high-availability of critical data
  - Query optimization through indexing and materialized views

**Function Layer:**
- Edge Functions for specialized business logic
- Event-driven architecture for real-time updates
- Background processing for report generation and analytics

**Integration Points:**
- External API connections for shipping carrier data
- Webhook support for third-party integrations

The system employs a hybrid data management approach:
- **Relational Database Core:** Primary data storage using PostgreSQL
- **Object-Relational Mapping:** TypeScript interfaces map database entities to application objects
- **XML Data Exchange:** For interoperability with legacy pharmaceutical systems
  - XML schemas defined for standardized data exchange
  - XPath/XQuery for processing incoming XML data

### 3.2 Design Diagrams

**System Architecture Diagram:**

```
┌─────────────┐     ┌─────────────┐      ┌─────────────┐
│             │     │             │      │             │
│  React UI   │────▶│  Supabase   │◀────▶│ PostgreSQL  │
│             │     │    API      │      │  Database   │
└─────────────┘     └─────────────┘      └─────────────┘
                           │
                           ▼
                    ┌─────────────┐
                    │   Edge      │
                    │  Functions  │
                    └─────────────┘
```

**Data Flow Diagram:**

```
┌───────────┐      ┌───────────┐      ┌───────────┐      ┌───────────┐
│           │      │           │      │           │      │           │
│  Create   │─────▶│  Process  │─────▶│  Track    │─────▶│  Deliver  │
│ Shipment  │      │   Order   │      │ Shipment  │      │ Products  │
│           │      │           │      │           │      │           │
└───────────┘      └───────────┘      └───────────┘      └───────────┘
       │                                    │                   │
       │                                    │                   │
       ▼                                    ▼                   ▼
┌───────────┐      ┌───────────┐      ┌───────────┐      ┌───────────┐
│           │      │           │      │           │      │           │
│ Inventory │      │ Payment   │      │ Tracking  │      │ Delivery  │
│ Updates   │      │ Processing│      │ Events    │      │ Validation │
│           │      │           │      │           │      │           │
└───────────┘      └───────────┘      └───────────┘      └───────────┘
```

## Implementation

### 4.1 Technology Stack

PharmaXLedger leverages a modern technology stack optimized for web-based pharmaceutical supply chain management:

**Frontend:**
- React 18 with TypeScript for type safety and improved developer experience
- Tailwind CSS for responsive, utility-first styling
- Shadcn UI component library for consistent design language
- React Router for client-side routing
- Tanstack React Query for data fetching and state management

**Backend:**
- Supabase for authentication, database operations, and storage
  - Row-Level Security (RLS) for granular data access control
  - PostgreSQL database with PostGIS extensions for location tracking
  - Real-time subscriptions for live updates
- Edge Functions for specialized business logic and third-party integrations

**DevOps:**
- Git for version control
- CI/CD pipeline for automated testing and deployment
- Containerized development environment

**Security:**
- JWT-based authentication
- Role-based access control
- Data encryption for sensitive information
- Audit logging for compliance tracking

### 4.2 Implementation Process

The implementation of PharmaXLedger followed an iterative development approach:

**Phase 1: Planning and Architecture Design**
- Requirements gathering from stakeholders
- Database schema design and normalization
- API endpoint definition
- Component hierarchy planning

**Phase 2: Core Implementation**
- Database setup with initial schema and RLS policies
- Authentication system implementation
- Basic UI framework and navigation
- Core data models and services

**Phase 3: Feature Development**
- Shipment tracking system with real-time updates
- Inventory management functionality
- Notification system for status changes
- Reporting and analytics dashboard

**Phase 4: Integration and Testing**
- Third-party API integrations for shipping carriers
- End-to-end testing of critical workflows
- Performance optimization
- Security auditing

**Key Implementation Challenges and Solutions:**

1. **Challenge:** Complex relational data model with multiple entities and relationships.
   **Solution:** Implemented a normalized database schema with foreign key constraints and indices for performance.

2. **Challenge:** Real-time tracking updates across multiple clients.
   **Solution:** Leveraged Supabase's real-time subscription capabilities using PostgreSQL's LISTEN/NOTIFY.

3. **Challenge:** Secure data access control based on user roles.
   **Solution:** Implemented row-level security policies at the database level with role-specific access rules.

4. **Challenge:** Performance issues with large shipment tracking logs.
   **Solution:** Added pagination, implemented query optimization, and created materialized views for frequent reports.

## Evaluation

### 5.1 Evaluation Criteria

PharmaXLedger was evaluated based on the following criteria:

**Functional Requirements:**
- Completeness of supply chain tracking features
- Accuracy of shipment status updates
- Reliability of notification system
- Comprehensiveness of reporting capabilities

**Non-functional Requirements:**
- Performance: Response time under load
- Scalability: Ability to handle growing data volume
- Usability: Ease of use for different user roles
- Security: Protection of sensitive data
- Reliability: System uptime and data integrity

**Integration Capability:**
- Interoperability with external systems
- API conformance to standards
- Data exchange format compatibility

### 5.2 Testing Methodology

The evaluation employed a multi-tiered testing approach:

**Unit Testing:**
- Individual component testing using React Testing Library
- API endpoint testing with automated test cases
- Database query performance testing

**Integration Testing:**
- End-to-end workflow testing
- API integration testing
- Database transaction integrity testing

**Performance Testing:**
- Load testing with simulated concurrent users
- Response time measurements under various loads
- Database query execution time analysis

**User Acceptance Testing:**
- Stakeholder review sessions
- Role-based testing scenarios
- Interface usability assessment

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
* **SUPABASE_PROJECT_ID:**

#### .env
```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_TEMPO=false
SUPABASE_PROJECT_ID=
```


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

<img src="https://github.com/flexycode/CTFDMBSL_FINAL_PROJECT/blob/main/assets/pharmaxledger/pharmaxledger.png" />

### 🌟 Design Overview

<img src="https://github.com/flexycode/CTFDMBSL_FINAL_PROJECT/blob/main/assets/pharmaxledger/pharmaxledger-0.png" />

<img src="https://github.com/flexycode/CTFDMBSL_FINAL_PROJECT/blob/main/assets/pharmaxledger/pharmaxledger-1.png" />

### 🌟 SignIn Page

<img src="https://github.com/flexycode/CTFDMBSL_FINAL_PROJECT/blob/main/assets/pharmaxledger/pharmaxledger-13.png" />

### 🌟 SignUp Page

<img src="https://github.com/flexycode/CTFDMBSL_FINAL_PROJECT/blob/main/assets/pharmaxledger/pharmaxledger-14.png" />

### 🌟 PharmaXLedger Dashboard

<img src="https://github.com/flexycode/CTFDMBSL_FINAL_PROJECT/blob/main/assets/pharmaxledger/pharmaxledger-2.png" />

### 🌟 Inventory

```
🚀 Coming Soon!!!
```

### 🌟 Account Settings

<img src="https://github.com/flexycode/CTFDMBSL_FINAL_PROJECT/blob/main/assets/pharmaxledger/pharmaxledger-3.png" />

<img src="https://github.com/flexycode/CTFDMBSL_FINAL_PROJECT/blob/main/assets/pharmaxledger/pharmaxledger-4.png" />

<img src="https://github.com/flexycode/CTFDMBSL_FINAL_PROJECT/blob/main/assets/pharmaxledger/pharmaxledger-5.png" />

<img src="https://github.com/flexycode/CTFDMBSL_FINAL_PROJECT/blob/main/assets/pharmaxledger/pharmaxledger-6.png" />

<img src="https://github.com/flexycode/CTFDMBSL_FINAL_PROJECT/blob/main/assets/pharmaxledger/pharmaxledger-7.png" />

<img src="https://github.com/flexycode/CTFDMBSL_FINAL_PROJECT/blob/main/assets/pharmaxledger/pharmaxledger-8.png" />

### 🌟 Creating a Pharmaceutical Shipment

<img src="https://github.com/flexycode/CTFDMBSL_FINAL_PROJECT/blob/main/assets/pharmaxledger/pharmaxledger-10.png" />

### 🌟 Payment Status

<img src="https://github.com/flexycode/CTFDMBSL_FINAL_PROJECT/blob/main/assets/pharmaxledger/pharmaxledger-11.png" />

<img src="https://github.com/flexycode/CTFDMBSL_FINAL_PROJECT/blob/main/assets/pharmaxledger/pharmaxledger-12.png" />

### 🌟 Customer Support
<img src="https://github.com/flexycode/CTFDMBSL_FINAL_PROJECT/blob/main/assets/pharmaxledger/pharmaxledger-9.png" />

<!-- Database Schema Revision, Also image for Data Model and Entity Relationship Diagram ERD. Link should be point out through assets folder for editing README.md -->
## 🧊 Database Schema

### Supabase Schema ( Not Final!!!)

<img src="https://github.com/flexycode/CTFDMBSL_FINAL_PROJECT/blob/main/assets/normalization/supabase-schema.svg" />

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

<!-- Normalization Images -->
<img src="https://github.com/flexycode/CTFDMBSL_FINAL_PROJECT/blob/main/assets/normalization/Database_tables.png" />

<img src="https://github.com/flexycode/CTFDMBSL_FINAL_PROJECT/blob/main/assets/normalization/profiles.png" />

<img src="https://github.com/flexycode/CTFDMBSL_FINAL_PROJECT/blob/main/assets/normalization/notifications.png" />

<img src="https://github.com/flexycode/CTFDMBSL_FINAL_PROJECT/blob/main/assets/normalization/payments.png" />

<img src="https://github.com/flexycode/CTFDMBSL_FINAL_PROJECT/blob/main/assets/normalization/shipments.png" />

<img src="https://github.com/flexycode/CTFDMBSL_FINAL_PROJECT/blob/main/assets/normalization/support_conversation.png" />

<img src="https://github.com/flexycode/CTFDMBSL_FINAL_PROJECT/blob/main/assets/normalization/tracking_events.png" />

```
Full Overview of Normalization is in the Folder of documentation
```

<!-- Entity Relationship Diagram Image link down below -->
## 🧊 Entity Relationship Diagram
#### Proposal Version ( v.1 )
<img src="https://github.com/flexycode/CTFDMBSL_FINAL_PROJECT/blob/main/assets/Pharmaceutical%20Supply%20Chain.png" />

#### Final Version ( v.2 Not Final!!)
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
coming soon
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
### Fixed 
- ✨ Fixed bug on ShoppingCart
- ✨ Fix bug regarding on SignIn and SignOut

## [2.0.1] - 2025-04-19   
### Added  
- ✨ Develop Private Repo for PharmaXLedger (will transfer here once finish)
- ✨ Add procedure on how to run the application
### Fixed 
- ✨ Fix issues in ShoppingCart.tsx
- ✨ Full revision
- ✨

## [3.0.2] - 2025-05-27 
- ✨ Third Phase of Revision using different tech stacks
     
🧊 CTFDMBSL FINAL PROJECT

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
