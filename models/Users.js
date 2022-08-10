const sequelize = require('../config/connection');
const { DataTypes, Model } = require('sequelize');
const bcrypt = require('bcrypt');
const path = require('path');
const userTableData = {
  user_id: { 
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  first_name: {
    type: DataTypes.STRING,
    defaultValue: 'SHIN-FN',
    validate: {
      len: [1, 30]
    },
  }, 
  last_name: {
    type: DataTypes.STRING,
    defaultValue: 'SHIN-LN',
    validate: {
      len: [1, 30]
    }, 
  }, 
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate:{
      len: [1, 30],
      is: /^[a-zA-Z0-9]+$/
    }
  }, 
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      is: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      len: [1, 255]
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}

const userTableOptions = {
  hooks: {
    async beforeCreate(userData) {
      userData.password = await hashPassword(userData.password);
      return userData
  },
  async beforeUpdate(userData) {
    user.password = await hashPassword(userData.Password);
    return userData
  }
},
  sequelize,
  modelName: 'shinobi_users',
  freezeTableName: true,
  scopes: {
    withoutPassword: {
      attributes: { exclude: ['password'] },
    }
  }
}

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(password, salt);
}

const Users = sequelize.define('shinobi_users', userTableData, userTableOptions);
console.log('USER model created',  path.basename(__filename));
module.exports = Users;