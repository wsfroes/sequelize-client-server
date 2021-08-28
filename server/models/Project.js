const schema = "geomercado"

module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define("project", {
        nameProject: {
            type: DataTypes.STRING
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