const schema = require("../controllers/CompanyController");

module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define("project", {
        nameProject: {
            type: DataTypes.STRING
        },
        companyId: {
            type: DataTypes.INTEGER,
            References: { model: 'companys', key: 'id' },
            onUpdate: 'CASCADE', // o que acontecer em uma tabela faz respingar na outra
            onDelete: 'CASCADE',
        }
    }, {
        schema: schema
    });

    return Project;
};

// class Project extends Model {
    //     static init(sequelize) {
    //         super.init({
    //             project: DataTypes.STRING,
    //         }, {
    //             sequelize
    //         })
    //     }
    // }