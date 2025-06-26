// sync.js
const sequelize = require('./config/db'); // Import the Sequelize instance from db.js
const User = require('./models/user');  // Import your User model

async function syncDatabase() {
  try {
    await sequelize.authenticate(); // Ensure the connection works
    console.log('Connection established successfully.');

    // Sync all models (creates tables if they don’t exist)
    await sequelize.sync({ force: false }); // Set 'force: true' to drop tables first (use with caution)
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error syncing the database:', error);
  }
}

// Run the sync operation
syncDatabase();