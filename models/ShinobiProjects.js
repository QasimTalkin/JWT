const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');
const path = require('path');

const shinobiTableData ={
project_id: {  
  type: DataTypes.INTEGER,
  autoIncrement:true,
  allowNull:false,
  primaryKey:true
},
// Model attributes are defined here
project_name: {
  type: DataTypes.STRING,
  allowNull: false,
},
project_code: {
  type: DataTypes.STRING,
  allowNull: false,
  unique: true
},
project_description: {
  type: DataTypes.TEXT,
  defaultValue: 'TBD-This is a description of the project.',
}
}
const shinobiTableOptions = {
  modelName: 'shinobi_projects', // We need to choose the model name
  freezeTableName:true,
}


const ShinobiProjects = sequelize.define('shinobi_projects', shinobiTableData, shinobiTableOptions);
console.log('ShinobiProjects model created',  path.basename(__filename));
module.exports = ShinobiProjects;