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
### Note: [Naka Private yung Repo hindi pwede ishare 😂 Ask nyo na lang si Brian](https://www.youtube.com/watch?v=UCCyoocDxBA&list=RDUCCyoocDxBA&start_radio=1)

<!-- Genshin Impact -->
<div align="center">
<img src="https://media.giphy.com/media/jUckyQVjuHNx9vXUtv/giphy.gif?cid=ecf05e47s58r7w8mev9d2vugcw28eadlktivra6h0amea6z2&ep=v1_gifs_search&rid=giphy.gif&ct=g" width="250">
<img src="https://media.giphy.com/media/uFygSquQkzbJTn3eQe/giphy.gif?cid=ecf05e47lpnwmxubw6vck95ymg1j0anne5ofqr69t8v43vcf&ep=v1_gifs_search&rid=giphy.gif&ct=g" width="300">
<img src="https://media.giphy.com/media/Yg0eXe6DhK8pVlUtVJ/giphy.gif?cid=ecf05e47lpnwmxubw6vck95ymg1j0anne5ofqr69t8v43vcf&ep=v1_gifs_search&rid=giphy.gif&ct=g" width="250">
</div>

<!-- Introduction down below -->
# 🧠 [Introduction](#introduction)

### PharmaXLedger

PharmaXLedger is a comprehensive pharmaceutical supply chain management platform that leverages modern web technologies to provide secure, transparent tracking and management of pharmaceutical shipments with advanced inventory management capabilities.

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
- Poor inventory management leading to stockouts and expired medicines

**Objectives:**

**General Objective:**
To develop a centralized, real-time pharmaceutical supply chain management system for internal use across a network of related companies.

**Specific Objectives:**
- Implement end-to-end tracking of pharmaceutical products from manufacturer to end customer
- Create a comprehensive medicine inventory management system with stock tracking
- Enable real-time notifications and alerts for critical supply chain events
- Generate comprehensive analytics and reports for inventory, shipment, and compliance tracking
- Design a relational database that maintains relationships between entities while ensuring data integrity
- Facilitate seamless communication between different departments and subsidiary companies
- Ensure regulatory compliance through proper documentation and audit trails


<!-- Techstacks down below (temporary need some proper decision for the group team in order to inlign for the project -->
## 💻 Techstacks # 1

**Frontend**:
* **Programming Language:** [TypeScript](https://www.typescriptlang.org/) 
* **Frontend:** [React.js 18](https://react.dev/), HTML5, CSS3 +
* **Build tool and Development server:** [Vite](https://vite.dev/)
* **Tailwind CSS for styling**
* **Shadcn UI component library**
* **React Router for navigation**
* **Tanstack React Query for data fetching**

**Backend**:  
* **Authentication:** [Supabase](https://supabase.com/)
* **Database:** Posgresql integrated in [Supabase](https://supabase.com/)
* **Supabase Edge Functions for serverless computing**

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

## System Design

### Enhanced System Architecture

PharmaXLedger implements a modern client-server architecture with comprehensive inventory management:

```
┌─────────────────┐     ┌─────────────────┐      ┌─────────────────┐
│                 │     │                 │      │                 │
│   React UI      │────▶│   Supabase API  │◀────▶│   PostgreSQL    │
│                 │     │                 │      │   Database      │
│ - Inventory Mgmt│     │ - Auth & RLS    │      │ - Inventory     │
│ - Shipments     │     │ - Real-time     │      │ - Shipments     │
│ - Dashboard     │     │ - Edge Functions│      │ - Stock Moves   │
└─────────────────┘     └─────────────────┘      └─────────────────┘
         │                        │                        │
         │                        ▼                        │
         │               ┌─────────────────┐               │
         │               │  Edge Functions │               │
         │               │ - Notifications │               │
         └──────────────▶│ - Stock Alerts  │◀──────────────┘
                         │ - Batch Jobs    │
                         └─────────────────┘
```

### Enhanced Entity Relationship Diagram (ERD)

```
┌─────────────┐       ┌─────────────┐       ┌─────────────┐
│  profiles   │       │ medicine_   │       │ stock_      │
│             │       │ inventory   │       │ movements   │
│ id (PK)     │◀──┐   │             │──┐    │             │
│ first_name  │   │   │ id (PK)     │  │    │ id (PK)     │
│ last_name   │   └───│ user_id(FK) │  └───▶│ medicine_id │
│ email       │       │ medicine_   │       │ movement_   │
│ role        │       │ name        │       │ type        │
│ company     │       │ stock_qty   │       │ quantity    │
│ status      │       │ reorder_lvl │       │ prev_stock  │
└─────────────┘       │ expiry_date │       │ new_stock   │
      │               │ batch_no    │       │ created_at  │
      │               │ category    │       └─────────────┘
      ▼               └─────────────┘
┌─────────────┐              │
│ shipments   │              │
│             │              │
│ id (PK)     │              │
│ user_id(FK) │              │
│ medicine_   │◀─────────────┘
│ name        │
│ tracking_no │       ┌─────────────┐       ┌─────────────┐
│ status      │       │ tracking_   │       │ support_    │
│ origin      │──────▶│ events      │       │ conversations│
│ destination │       │             │       │             │
│ quantity    │       │ id (PK)     │       │ id (PK)     │
│ batch_no    │       │ shipment_id │       │ user_id(FK) │
│ expiry_date │       │ event_type  │       │ title       │
└─────────────┘       │ location    │       │ status      │
      │               │ description │       └─────────────┘
      │               └─────────────┘              │
      ▼                                           │
┌─────────────┐       ┌─────────────┐              ▼
│ payments    │       │ notifications│       ┌─────────────┐
│             │       │             │       │ support_    │
│ id (PK)     │       │ id (PK)     │       │ messages    │
│ user_id(FK) │       │ user_id(FK) │       │             │
│ amount      │       │ title       │       │ id (PK)     │
│ status      │       │ content     │       │ convo_id(FK)│
│ currency    │       │ read        │       │ sender_id   │
└─────────────┘       └─────────────┘       │ content     │
                                           │ is_admin    │
                                           └─────────────┘
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

## Implementation

### Enhanced Technology Implementation

The implementation now includes comprehensive inventory management with the following key components:

**Phase 1: Foundation (March 2025)**
- Project initialization and repository setup
- Database schema design with ERD modeling
- Technology stack selection

**Phase 2: Core Development (April 2025)**
- Frontend development with React and TypeScript
- Supabase integration for backend services
- Authentication system implementation
- Basic shipment tracking functionality

**Phase 3: Advanced Features (May-June 2025)**
- Medicine inventory management system
- Stock movement tracking and alerts
- Enhanced user interface with dashboard improvements
- Real-time notifications and updates

**Key Implementation Features:**

1. **Inventory Management System**
   - Comprehensive medicine catalog with detailed information
   - Stock level monitoring with automatic reorder alerts
   - Expiry date tracking and notifications
   - Batch number management for traceability

2. **Enhanced Shipment Tracking**
   - Integration with inventory for automatic stock updates
   - Real-time tracking with detailed event logs
   - Medicine-specific shipping requirements

3. **Real-time Updates**
   - Live inventory updates across all connected clients
   - Instant notifications for low stock and expiring medicines
   - Real-time shipment status updates

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Supabase account (for backend services)

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/pharmaxledger.git
cd pharmaxledger
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server
```bash
npm run dev
```

## Application Flow

### Enhanced User Workflows

#### Inventory Management Flow
1. User adds medicines to inventory with detailed information
2. System tracks stock levels and monitors expiry dates
3. Automatic alerts for low stock and approaching expiry
4. Stock movements are logged for audit trails
5. Reports generated for inventory analysis

#### Shipment Creation Flow
1. User creates shipment from available inventory
2. System automatically updates stock levels
3. Tracking number generated with real-time updates
4. Medicine-specific shipping requirements applied
5. Delivery confirmation updates inventory status

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

## 🧊 Data Integration in Supabase / Database Schema

## Database Schema

The PharmaXLedger database consists of the following main tables designed to handle pharmaceutical supply chain operations with comprehensive inventory management:

### Core Tables

#### 1. Profiles Table
Stores user profile information and company details.

```sql
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY,
  email TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,
  role TEXT NOT NULL DEFAULT 'customer',
  status TEXT NOT NULL DEFAULT 'Active',
  phone TEXT,
  company_name TEXT,
  website TEXT,
  address TEXT,
  city TEXT,
  state TEXT,
  zip_code TEXT,
  country TEXT
);
```

#### 2. Medicine Inventory Table
Central table for managing pharmaceutical inventory with comprehensive medicine details.

```sql
CREATE TABLE public.medicine_inventory (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  medicine_name TEXT NOT NULL,
  generic_name TEXT,
  brand_name TEXT,
  category TEXT,
  description TEXT,
  dosage_form TEXT,
  strength TEXT,
  manufacturer TEXT,
  batch_number TEXT,
  stock_quantity INTEGER NOT NULL DEFAULT 0,
  reorder_level INTEGER DEFAULT 10,
  unit_price NUMERIC,
  currency TEXT DEFAULT 'PHP',
  expiry_date DATE,
  storage_conditions TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
```

#### 3. Stock Movements Table
Tracks all stock changes for audit and inventory management.

```sql
CREATE TABLE public.stock_movements (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  medicine_id UUID,
  movement_type TEXT NOT NULL,
  quantity_changed INTEGER NOT NULL,
  previous_stock INTEGER NOT NULL,
  new_stock INTEGER NOT NULL,
  reference_id UUID,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
```

#### 4. Shipments Table
Enhanced shipment management with detailed medicine information.

```sql
CREATE TABLE public.shipments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  origin TEXT NOT NULL,
  destination TEXT NOT NULL,
  weight NUMERIC,
  status TEXT NOT NULL DEFAULT 'pending',
  tracking_number TEXT NOT NULL,
  recipient_name TEXT,
  recipient_email TEXT,
  recipient_phone TEXT,
  payment_status TEXT DEFAULT 'unpaid',
  estimated_delivery TIMESTAMP WITH TIME ZONE,
  shipping_cost NUMERIC,
  currency TEXT DEFAULT 'PHP',
  service_type TEXT DEFAULT 'Standard Delivery',
  
  -- Medicine-specific fields
  medicine_name TEXT,
  medicine_category TEXT,
  dosage TEXT,
  quantity INTEGER,
  batch_number TEXT,
  expiry_date DATE,
  storage_requirements TEXT,
  special_instructions TEXT,
  
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
```

#### 5. Tracking Events Table
Stores detailed tracking events for each shipment.

```sql
CREATE TABLE public.tracking_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  shipment_id UUID NOT NULL,
  event_type TEXT NOT NULL,
  location TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
```

#### 6. Support System Tables
Enhanced support system for customer service.

```sql
-- Support Conversations
CREATE TABLE public.support_conversations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  title TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'open',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Support Messages
CREATE TABLE public.support_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  conversation_id UUID NOT NULL,
  sender_id UUID NOT NULL,
  content TEXT NOT NULL,
  is_admin BOOLEAN NOT NULL DEFAULT false,
  read BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
```

## SQL/PostgreSQL Implementation

#### Enhanced Database Functions

The system uses several PostgreSQL functions for automated user management and inventory tracking:

```sql
-- User Profile Creation Function
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $function$
BEGIN
  INSERT INTO public.profiles (id, email, first_name, last_name)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'first_name',
    NEW.raw_user_meta_data->>'last_name'
  );
  RETURN NEW;
END;
$function$

-- Admin User Check Function
CREATE OR REPLACE FUNCTION public.is_admin_user()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;
```

### Row Level Security (RLS) Policies

Comprehensive RLS policies ensure data privacy and access control:

```sql
-- Medicine Inventory RLS Policies
CREATE POLICY "Users can view own inventory" ON public.medicine_inventory
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can manage own inventory" ON public.medicine_inventory
  FOR ALL USING (auth.uid() = user_id);

-- Stock Movements RLS Policies  
CREATE POLICY "Users can view own stock movements" ON public.stock_movements
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create stock movements" ON public.stock_movements
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Admin policies for full access
CREATE POLICY "Admins can view all inventory" ON public.medicine_inventory
  FOR SELECT USING (public.is_admin_user());

CREATE POLICY "Admins can view all stock movements" ON public.stock_movements
  FOR SELECT USING (public.is_admin_user());
```

### Performance Indexes

Strategic indexing for optimal performance:

```sql
-- Inventory management indexes
CREATE INDEX idx_medicine_inventory_user_id ON public.medicine_inventory(user_id);
CREATE INDEX idx_medicine_inventory_category ON public.medicine_inventory(category);
CREATE INDEX idx_medicine_inventory_expiry ON public.medicine_inventory(expiry_date);
CREATE INDEX idx_medicine_inventory_stock ON public.medicine_inventory(stock_quantity);

-- Stock movement indexes
CREATE INDEX idx_stock_movements_user_id ON public.stock_movements(user_id);
CREATE INDEX idx_stock_movements_medicine_id ON public.stock_movements(medicine_id);
CREATE INDEX idx_stock_movements_created_at ON public.stock_movements(created_at);

-- Enhanced shipment indexes
CREATE INDEX idx_shipments_medicine_name ON public.shipments(medicine_name);
CREATE INDEX idx_shipments_expiry_date ON public.shipments(expiry_date);
```

### Real-time Subscriptions

Enhanced real-time functionality for inventory and shipment updates:

```sql
-- Enable real-time for inventory tables
ALTER TABLE public.medicine_inventory REPLICA IDENTITY FULL;
ALTER TABLE public.stock_movements REPLICA IDENTITY FULL;

-- Add tables to real-time publication
ALTER PUBLICATION supabase_realtime ADD TABLE public.medicine_inventory;
ALTER PUBLICATION supabase_realtime ADD TABLE public.stock_movements;
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
Chronological list of updates, bug fixes, new features, and other modifications for PharmaXLedger Pharmaceutical Supply Chain Management.

### 📦 Version 1.0.0 - March 22, 2025
**Project Initialization**
- ✨ Created initial repository structure
- ✨ Set up project folder organization
- ✨ Established development workflow
- 🔧 Initial project configuration and setup

### 📊 Version 1.0.1 - March 26, 2025
**Design & Architecture**
- ✨ Created comprehensive design concept for Pharmaceutical Supply Chain Management
- 📋 Developed Entity Relationship Diagram (ERD)
- 📁 Added ERD documentation files
- 🗄️ Designed database schema for SQL implementation
- 🍃 Created alternative MongoDB schema design
- 📖 Enhanced project documentation

### 🎨 Version 1.1.0 - April 7, 2025
**Frontend Development**
- ✨ Initialized React frontend with TypeScript
- 🎨 Set up Tailwind CSS for styling
- 🧩 Integrated Shadcn UI component library
- 📱 Created responsive design foundation
- 🔧 Configured build tools and development environment

### 🚀 Version 2.0.0 - April 17, 2025
**Core Application Development**
- ✨ Developed comprehensive homepage for PharmaXLedger
- 📐 Created wireframes for MedicineCatalog and ShoppingCart
- 👨‍💼 Built AdminDashboard and enhanced LandingPage
- 🔐 Integrated Supabase for backend services
- 📝 Implemented user registration (Sign Up) functionality
- 💊 Added medicine management forms
- 🛒 Fixed critical bugs in ShoppingCart component
- 🔑 Resolved authentication issues in SignIn/SignOut flow

### 🔒 Version 2.0.1 - April 19, 2025
**Security & Optimization**
- 🏢 Created private repository for enhanced security
- 📋 Added comprehensive application setup documentation
- 🐛 Fixed remaining ShoppingCart.tsx issues
- 🔄 Conducted full system revision and optimization
- 📖 Updated deployment and running instructions

### 🌟 Version 3.0.0 - May 27, 2025
**Third Phase Revision**
- 🔄 Major system overhaul with updated technology stack
- ⚡ Performance improvements and optimization
- 🛡️ Enhanced security measures
- 🎨 UI/UX improvements and modernization
- 📊 Improved data handling and state management

### 💊 Version 4.0.0 - June 1, 2025
**Medicine Inventory Management System**
- ✨ **NEW FEATURES**: Comprehensive medicine inventory management
  - 📦 Medicine stock tracking with real-time updates
  - 📊 Stock level monitoring and low stock alerts
  - 📅 Expiry date tracking and notifications
  - 🏷️ Batch number management for traceability
  - 💰 Unit pricing and cost management
  - 🏭 Manufacturer and supplier information
  - 📋 Medicine categorization and search functionality

- 🔄 **MAJOR CHANGES**: Renamed shipment management for clarity
  - 📦 Previous "Inventory" renamed to "Shipments"
  - 💊 New "Inventory" now refers to medicine stock management
  - 🚚 Enhanced shipment tracking with inventory integration

- 🗄️ **DATABASE ENHANCEMENTS**:
  - 🆕 Added `medicine_inventory` table for stock management
  - 📈 Added `stock_movements` table for audit trails
  - 🔄 Enhanced shipments table with medicine details
  - 🔐 Implemented Row Level Security (RLS) policies
  - ⚡ Added performance indexes for optimized queries

- 🎨 **UI/UX IMPROVEMENTS**:
  - 📊 New inventory dashboard with stock analytics
  - ➕ Medicine addition modal with comprehensive forms
  - 🔍 Advanced search and filtering capabilities
  - 📱 Responsive design for mobile inventory management
  - 🎨 Enhanced visual indicators for stock status

- 🔧 **TECHNICAL IMPROVEMENTS**:
  - ⚡ Real-time inventory updates across all clients
  - 🔔 Automated notifications for inventory events
  - 📊 Enhanced data validation and error handling
  - 🏗️ Improved component architecture and reusability

### 🔮 Future Roadmap
- 📈 Advanced analytics and reporting dashboard
- 🤖 AI-powered demand forecasting
- 📱 Mobile application development
- 🌐 API integrations with external suppliers
- 🔄 Automated reordering system
- 📋 Regulatory compliance tracking
- 🏥 Multi-location inventory management

---

**Legend:**
- ✨ New Feature
- 🔄 Changed/Updated
- 🐛 Bug Fix
- 🔧 Technical Improvement
- 📖 Documentation
- 🎨 UI/UX Enhancement
- 🔐 Security
- 📊 Data/Analytics
- 🚀 Performance

---


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
<img src="https://readme-typing-svg.demolab.com/?lines=Come+Back+Again+next+time" alt="mystreak"/>
</p>

</p>
    
<br>
<!-- End point insert background effect line of sight color red -->
<img src="https://user-images.githubusercontent.com/74038190/212284100-561aa473-3905-4a80-b561-0d28506553ee.gif" width="1000">
