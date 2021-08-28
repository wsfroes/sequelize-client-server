const schema = "geomercado"

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