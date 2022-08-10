const Users = require('../models/Users');

// objectt array with 5 users
const usersData = [
  {
    username: 'admin',
    password: 'admin', 
    first_name: 'Admin',
    last_name: 'Admin',
    email: 'admin@shinobimedia.com'
  },
  {
    username: 'John69',
    first_name: 'John',
    last_name: 'Doe',
    email: 'johnDoe@shinobimedia.com',
    password: 'passwordJD'
  }, 
  {
    username: 'Jane69',
    first_name: 'Jane',
    last_name: 'Doe',
    email: 'janeDoe@shinobimedia.com',
    password: 'passwordJD'
  }, 
  {
    username: 'Kris69',
    first_name: 'Kris',
    last_name: 'Smith',
    password: 'passwordKS',
    email: 'KrisSmith@shinobimedia.com'
  }
];

const seedUsers = async () => {
  try {
    await Users.bulkCreate(usersData);
  } catch (error) {
    console.log(error);
  }
}

module.exports = seedUsers;