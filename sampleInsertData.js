const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./config/db');  // Import Sequelize instance
const User = require('./models/user');    // Import User model

// Sample data to insert
const users = [
  { name: 'Jane Smith', email: 'jane.smith@example.com' },
  { name: 'Robert Brown', email: 'robert.brown@example.com' },
  { name: 'Emily White', email: 'emily.white@example.com' },
  { name: 'Michael Johnson', email: 'michael.johnson@example.com' }
];

// Insert sample data into the Users table
async function insertUsers() {
  try {
    // Loop through the list of users and create them in the database
    for (let userData of users) {
      const newUser = await User.create(userData);
      console.log('User created:', newUser.toJSON());  // Print the created user to the console
    }
  } catch (error) {
    console.error('Error inserting data:', error);
  }
}

insertUsers();