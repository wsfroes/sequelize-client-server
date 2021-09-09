module.exports = (schema) => {

    const models = require("../config/db");
  
    //create schema admin
    models.connection.createSchema(schema).then(() => { });
  
    //console.log('\x1b[40m\x1b[33m%s\x1b[0m', require("./Company"));
  
    //create ou init tables
    models.companys = require("./Company")(models.connection, models.Sequelize);
    models.projects = require("./Project")(models.connection, models.Sequelize);
    models.users = require("./User")(models.connection, models.Sequelize);
  
    //start associations
    //associate 1-N
    models.companys.hasMany(models.users, { as: "users" });
    models.users.belongsTo(models.companys, {
      foreignKey: "companyId",
      as: "users",
    });
    models.companys.hasMany(models.projects, { as: "projects" });
    models.projects.belongsTo(models.companys, {
      foreignKey: "companyId",
      as: "projects",
    });
  
    // create ou init tables
    models.connection.sync().then(() => {
      console.log("Drop and re-sync db.");
      //  populate();
    });
    module.exports = models;
  }
  
  //export default Connection;