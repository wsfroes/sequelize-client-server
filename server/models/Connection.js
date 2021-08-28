const models = require("../config/db");

const schema = 'geomercado'
//create schema admin
models.sequelize.createSchema('admin').then(() => {});
models.sequelize.createSchema(schema).then(() => {});

//create ou init tables
models.companys = require("./Company")(models.sequelize, models.Sequelize);
models.projects = require("./Project")(models.sequelize, models.Sequelize);
models.users = require("./User")(models.sequelize, models.Sequelize);

// models.tutorials = require("./tutorial.model")(models.sequelize, models.Sequelize);
// models.comments = require("./comment.model")(models.sequelize, models.Sequelize);

//start associations
//associate 1-N
models.companys.hasMany(models.users, { as: "users" });
models.users.belongsTo(models.companys, {
  foreignKey: "companyId",
  as: "company_users",
});

models.companys.hasMany(models.projects, { as: "projects" });
models.projects.belongsTo(models.companys, {
  foreignKey: "companyId",
  as: "company_projects",
});

// models.tutorials.hasMany(models.comments, { as: "comments" });
// models.comments.belongsTo(models.tutorials, {
//   foreignKey: "tutorialId",
//   as: "tutorial",
// });

module.exports = models;