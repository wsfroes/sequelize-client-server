module.exports = {
    dialect: "postgres", 
    host: "sim-v4-dev.cqsdv4qss3dh.sa-east-1.rds.amazonaws.com",
    username: "postgres",
    password: "nCABE9rYUC68Ri77spdf",
    database: "sqlnode",
    define: {
        // automatically use the fields created_at and updated_at (just form)
        timestamp: true, 
        underscored: true,
    },  
};