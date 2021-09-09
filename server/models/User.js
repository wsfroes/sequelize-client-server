const schema = require("../controllers/CompanyController");

module.exports = (sequelize, DataTypes) => {    
    const User = sequelize.define("user", {
        nameUser: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
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

    return User;
};


// class User extends Model {
//     static init(sequelize) {
//         super.init({
//             name: DataTypes.STRING,
//             email: DataTypes.STRING,
//         }, {
//             sequelize
//         })
//     }
//     static associate(models) {
//         this.hasMany(models.Help, { foreignKey: 'user_id', as: 'helps'});
//     }
// }