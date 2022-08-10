const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our ServiceRequest model
class ServiceRequest extends Model {
}

// create fields/columns for ServiceRequest model
ServiceRequest.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'shinobi_users',
        key: 'user_id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'service_request'
  }
);

module.exports = ServiceRequest;
