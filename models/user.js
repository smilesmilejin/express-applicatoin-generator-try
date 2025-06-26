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