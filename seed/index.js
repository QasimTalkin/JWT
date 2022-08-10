
const serviceRequestSeed = require('./serviceRequestSeed');
const userSeed = require('./userSeed');
const shinobiProjectsSeed = require('./shinobiProjectsSeed');
const sequelize = require('../config/connection');


const seedAll = () => {
  sequelize.sync({ force: true })
    .then(() => {
      return Promise.all([
        userSeed(),
        shinobiProjectsSeed(),
        serviceRequestSeed()
      ]);
    })
    .then(() => {
      console.log('Seeding complete!');
      process.exit();
    })
    .catch(err => {
      console.log('Error seeding:', err);
      process.exit();
    })
}

seedAll();