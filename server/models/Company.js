const schema = "admin"

module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define("company", {
        nameCompany: {
            type: DataTypes.STRING
        },
        urlHelp: {
            type: DataTypes.STRING
        },
        schema: {
            type: DataTypes.STRING
        }
    }, {
        tableName: "companys",
        schema: schema
    });

    return Company;
};

//class Help extends Model {
    //     static init(sequelize) {
    //         super.init({
    //             url: DataTypes.STRING,
    //         }, {
    //             sequelize,
    //             tableName: "helps",
    //         })
    //     }
    //      static associate(models) {
    //          this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'});
    //      }
    // }