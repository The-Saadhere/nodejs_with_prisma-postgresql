# Prisma + Node.js + PostgreSQL Demo

A simple demo project that demonstrates how to connect **Node.js**, **PostgreSQL**, and **Prisma ORM**. This project is intended for learning the basics of database integration, schema creation, migrations, and querying data using Prisma.

## Tech Stack

* Node.js
* PostgreSQL
* Prisma ORM 7.8.0

## Features

* PostgreSQL database connection
* Prisma Client setup
* Database schema definition
* Prisma migrations
* Basic CRUD operations
* Clean project structure for learning purposes

## Prerequisites

Before running the project, make sure you have installed:

* Node.js
* PostgreSQL
* npm

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/repository-name.git
```

Navigate to the project directory:

```bash
cd repository-name
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory and add:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
```

Replace the values with your PostgreSQL credentials.

## Prisma Setup

Generate Prisma Client:

```bash
npx prisma generate
```

Run database migrations:

```bash
npx prisma migrate dev
```

## Running the Project

Start the application:

```bash
npm start
```

or

```bash
node index.js
```

## Prisma Commands

Generate Prisma Client:

```bash
npx prisma generate
```

Create a migration:

```bash
npx prisma migrate dev --name init
```

Open Prisma Studio:

```bash
npx prisma studio
```

Reset database:

```bash
npx prisma migrate reset
```

## Project Structure

```text
├── prisma
│   ├── schema.prisma
│
├── node_modules
├── .env
├── index.js
├── package.json
└── README.md
```

## Learning Objectives

This project helps you understand:

* Connecting PostgreSQL with Node.js
* Configuring Prisma ORM
* Managing database schemas
* Running migrations
* Using Prisma Client to interact with the database
* Building a foundation for larger backend applications

## License

This project is created for educational and learning purposes.
