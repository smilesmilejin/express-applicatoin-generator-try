# Express Application Generator

This guide walks you through creating an Express app using the official Express application generator.

For more information, visit the official Express Generator documentation:  
[Express Application Generator Documentation](https://expressjs.com/en/starter/generator.html)

## Steps to Set Up the Express App

1. **Create the App Folder**
   Run the following command to create a new Express app inside the `myapp` folder:

   ```bash
   $ npx express-generator myapp
   ```
2. **Navigate to the App Folder**

   Change to the newly created app directory:
   ```bash
   $ cd myapp
   ```
3. **Install Dependencies**

   ```bash
   $ npm install
   ```

4. **On MacOS or Linux, run the app with this command:**
   ```bash
   $ DEBUG=myapp:* npm start
   ```

5. **It runs in the following:**
   ```bash
   http://localhost:3000/
   ```

# Create PostgresSQL database locally
```bash
$ psql -U postgres
$ CREATE DATABASE express_application;
```


# Using Sequelize for Database Migrations

Sequelize is an ORM for Node.js that helps you interact with relational databases like PostgreSQL, MySQL, and SQLite. It allows you to handle database migrations and models, similar to **Flask Migrate** in Python.

For more information on how to get started with Sequelize, visit the official documentation:  
[Sequelize Documentation](https://sequelize.org/docs/v6/getting-started/)

## Installing Sequelize

To install Sequelize in your project, run the following command:

```bash
$ npm install --save sequelize
```

Install Postgres:
```bash
$ npm install --save pg pg-hstore
```

# Setting Up Database Configuration

To configure your database connection, create a `config` folder and add a `db.js` file. This will contain the necessary settings to connect to your database (e.g., PostgreSQL).

## Steps:

1. **Create the `config` Folder and db.js file**

   In your project’s root directory, create a folder called `config`.

   ```bash
   $ mkdir config
   $ touch config/db.js
   ```
2. **Edit the db.js File**

   ```js
   const { Sequelize } = require('sequelize');

   // Example for PostgreSQL connection
   const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/express_application');

   // Test the connection
   async function testConnection() {
   try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
   } catch (error) {
      console.error('Unable to connect to the database:', error);
   }
   }

   testConnection();
   ```
2. **Test the Database Connection**
   To ensure the database is connected properly, run the db.js script:
   ```bash
   $ node config/db.js
   ```

   If everything is set up correctly, you should see:
   ``` bash
   Connection has been established successfully.
   ```

# Create Models Folder and Define `user.js` Model

After setting up the database connection, the next step is to define the models, starting with a `User` model.

## Steps:

### 1. **Create the `models` Folder and user.js file**

   In the root of your project, create a folder called `models` to store your model files.

   ```bash
   $ mkdir models
   $ touch models/user.js
   ```

### 2. **Define the User Model(user.js)**
   ```js
   const { Sequelize, DataTypes } = require('sequelize');
   const sequelize = require('../config/db'); // Import Sequelize instance

   // Define User model
   const User = sequelize.define('User', {
   name: {
      type: DataTypes.STRING,
      allowNull: false,  // Name is required
   },
   email: {
      type: DataTypes.STRING,
      allowNull: false,  // Email is required
      unique: true,      // Ensure emails are unique
   },
   createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,  // Automatically set the current timestamp
   },
   });

   module.exports = User;
   ```
### 3. **Sync Models with the Database**

   After defining your models, you need to sync them with the database. This ensures that Sequelize creates the corresponding tables if they don't already exist.

   To sync the models, create a sync.js file in the root directory:
   ```bash
   $ touch sync.js
   ```

   In sync.js, add the following code to sync the models:
   ```js
   const sequelize = require('./config/db');
   const User = require('./models/user'); // Import the User model

   // Sync models with the database
   async function syncDatabase() {
   try {
      await sequelize.sync({ force: false }); // Set force to true to drop tables before recreating
      console.log('Database synced successfully!');
   } catch (error) {
      console.error('Error syncing database:', error);
   }
   }

   syncDatabase();
   ```
### 4. **Run the sync.js Script**
   To sync your models with the database, run the following command in the terminal:
   ```bash
   $ node sync.js
   ```
   If the sync is successful, you should see:
   ```
   Database synced successfully!
   ```
### 5. **Check local database**
```bash
$ psql -U postgres -d express_application
\dt
\d "Users"
SELECT * FROM "Users";
```
Note: PostgreSQL treats unquoted identifiers (such as table names) as case-insensitive and automatically converts them to lowercase. Since our table name is User, we need to use quotation marks to preserve the case and reference it correctly as "Users".

### 5. **Run testDatabase.js to test insert to database**
```bash
$ node testDatabase.js
```

