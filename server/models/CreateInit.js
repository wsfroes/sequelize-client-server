const models = require("../config/db");
console.log('\x1b[40m\x1b[31m%s\x1b[0m', models);
//create schema admin
models.connection.createSchema('admin').then(() => {});
//models.sequelize.createSchema(schema).then(() => {});

//console.log('\x1b[40m\x1b[33m%s\x1b[0m', require("./Company"));

//create ou init tables
 models.companys = require("./Company")(models.connection, models.Sequelize);
 models.projects = require("./Project")(models.connection, models.Sequelize);
 models.users = require("./User")(models.connection, models.Sequelize);

 console.log('\x1b[40m\x1b[31m%s\x1b[0m',models.companys);
// models.tutorials = require("./tutorial.model")(models.sequelize, models.Sequelize);
// models.comments = require("./comment.model")(models.sequelize, models.Sequelize);

//start associations
//associate 1-N
// models.companys.hasMany(models.users, { as: "users" });
// models.users.belongsTo(models.companys, {
//    foreignKey: "companyId",
//    as: "users",
//  });
//  models.companys.hasMany(models.projects, { as: "projects" });
//  models.projects.belongsTo(models.companys, {
//    foreignKey: "companyId",
//    as: "projects",
//  });

 // create ou init tables
models.connection.sync().then(() => {
  console.log("Drop and re-sync db.");
//  populate();
});
//console.log('\x1b[40m\x1b[31m%s\x1b[0m', models);
module.exports = models;