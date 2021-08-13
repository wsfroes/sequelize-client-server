const sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Address = require('../models/Address');
const User = require('../models/User');


const connection = new sequelize(dbConfig);

User.init(connection);
Address.init(connection);

User.associate(connection.models);
Address.associate(connection.models);

module.exports = connection;