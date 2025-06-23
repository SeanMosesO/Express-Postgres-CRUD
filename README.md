# Express-Postgres-CRUD
Mini Project Assessment: Store and retrieve data in PostgreSQL
Create a simple Express.js API that connects to a PostgreSQL database and performs basic database operations (CRUD - Create, Read, Update, Delete).

Project Overview
Create a new user

Read all users or one user by ID

Update a user's information

Delete a user

Setup
Install Dependencies
VSCode Terminal
cd express-postgres-crud
npm init -y
npm install express pg dotenv

express – Node.js web framework

pg – PostgreSQL client for Node.js

dotenv – Load environment variables from a .env file

PostgreSQL Table Setup
Run this SQL in psql or your DB GUI:

sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL
);

Test with cURL or Postman
Create User

bash

curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name":"Alice","email":"alice@example.com"}'
Read All Users

bash

curl http://localhost:3000/users
Read User by ID

bash

curl http://localhost:3000/users/1
Update User

bash

curl -X PUT http://localhost:3000/users/1 -H "Content-Type: application/json" -d '{"name":"Alice Updated","email":"newalice@example.com"}'
Delete User

bash

curl -X DELETE http://localhost:3000/users/1

1. Setup

- Create a new Express.js project
- Install required dependencies (pg, express)
- Set up a PostgreSQL database with a single table: users

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  age INTEGER
);

2. Implement API Endpoints Create the following Express routes:

- GET /users - Get all users
- GET /users/:id - Get a specific user
- POST /users - Create a new user
- PUT /users/:id - Update a user
- DELETE /users/:id - Delete a user

  Working Express.js server/PostgreSQL database connection/Implementation of all CRUD operations/Basic error handling/Test your API using Postman or similar tool
  
1. Express.js application code
2. Database connection configuration
3. API endpoints implementation
4. Brief documentation of how to run your project

How to Run the Project
Step 1: PostgreSQL Setup
Run the following in psql:

sql
CREATE DATABASE express_api;

\c express_api

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  age INTEGER
);
 Step 2: Start the API Server
In the project folder:

bash
# Install dependencies
npm install

# Run the server
node server.js
The server will start at http://localhost:3000

 Step 3: Test the API with Postman or curl
Create a User
POST http://localhost:3000/users
Body:

json
{
  "name": "Alice",
  "email": "alice@example.com",
  "age": 25
}
Get All Users
GET http://localhost:3000/users

Get a User by ID
GET http://localhost:3000/users/1

Update a User
PUT http://localhost:3000/users/1
Body:

json
{
  "name": "Alice Updated",
  "email": "alice@newmail.com",
  "age": 26
}
 Delete a User
DELETE http://localhost:3000/users/1


Setup Instructions

1. Install PostgreSQL and Node.js
2. Create a new database
3. Run the table creation SQL
4. Install project dependencies

npm init -y
npm install express pg


