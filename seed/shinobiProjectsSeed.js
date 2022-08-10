const ShinobiProjects = require('../models/ShinobiProjects');

const shinobiProjectsSeedData = [
  {
    project_name: 'Web Development',
    project_code: `SHIN-WEB-DEV`,
    project_description: `We will build web applications using the latest technologies. Making sure your pages are fast, responsive, and secure.`,
  }, 
  {
    project_name: 'Mobile Development',
    project_code: `SHIN-MOBILE-DEV`,
    project_description: `We will build mobile applications using the latest technologies. Making sure your pages are fast, responsive, and secure.`,
  }, 
  {
    project_name: 'Data Science',
    project_code: `SHIN-DATA-SCIENCE`,
    project_description: `We will build data science applications using the latest technologies. Making sure your pages are fast, responsive, and secure.`,
  }, 
  {
    project_name: 'Online Marketing',
    project_code: `SHIN-ONLINE-MARKETING`,
    project_description: `We will be doing online marketing using the latest technologies. Making sure you get the best results.`,
  }
]

const seedShinobiProjects = async () => {
  try {
    await ShinobiProjects.bulkCreate(shinobiProjectsSeedData);
  }
  catch (e) {
    throw e.message
  }
}

module.exports = seedShinobiProjects;