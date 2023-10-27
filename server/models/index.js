
// importing the models and sequelize and also DB config
const Sequelize = require('sequelize');
const config = require('../config/config');
const UserModel = require('./User');
const RoleModel = require('./Role');


// creating the instance for the Sequelize class with DB config
const sequelize = new Sequelize(
  config.database.database,
  config.database.username,
  config.database.password,
  {
    host: config.database.host,
    dialect: config.database.dialect,
  }
);

// passing the object and Sequelize to the DB models
const User = UserModel(sequelize, Sequelize);
const Role = RoleModel(sequelize, Sequelize);

// Declaring the Associations 
User.belongsTo(Role, { foreignKey: 'roleId' });
Role.hasMany(User, { foreignKey: 'roleId' });


sequelize.sync({ force: false }).then(async () => {
  console.log('Models are Working....!');
}).catch(error => console.log(error));



module.exports = {
  User,
  Role,
};
