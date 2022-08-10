const ShinobiProjects = require('./ShinobiProjects');
const Users = require('./Users');
const ServiceRequest = require('./ServiceRequest');

Users.hasMany(ServiceRequest, {
  foreignKey: 'user_id'
});

ServiceRequest.belongsTo(Users, {
  foreignKey: 'user_id'
});


module.exports = {
  ShinobiProjects,
  Users,
  ServiceRequest
};