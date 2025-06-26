// testInsert.js
const sequelize = require('./config/db'); // Import the Sequelize instance
const User = require('./models/user'); // Import your User model

async function createUser() {
  try {
    // Create a new user in the Users table
    const user = await User.create({
      name: 'John Doe',
      email: 'john.doe@example.com',
    });
    console.log('User created:', user);
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

// Run the createUser function
createUser();

async function getUsers() {
  try {
    const users = await User.findAll();
    console.log('Users:', users);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

getUsers();