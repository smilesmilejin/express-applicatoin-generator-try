const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
// const sequelize = new Sequelize('postgresql+psycopg2://postgres:postgres@localhost:5432/express_application') // Example for postgres
// Note:: need to use postgresql instead!
// const sequelize = new Sequelize('postgresql://postgres:postgres@localhost:5432/express_application') // Example for postgres

// To see what Sequelize is doing under the hood, enable logging by modifying the db.js connection as shown earlier:
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/express_application', {
  logging: console.log, // This will log all the SQL queries Sequelize is running
});


// // Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// });


// // Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
// });


// Testing the connection
// You can use the .authenticate() function to test if the connection is OK:
// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }

// Need to put this in aync function
// Function to test the database connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Test the connection
testConnection();

module.exports = sequelize;