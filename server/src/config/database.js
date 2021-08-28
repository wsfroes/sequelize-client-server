module.exports = {
    dialect: "postgres", 
    host: "sim-v4-dev.cqsdv4qss3dh.sa-east-1.rds.amazonaws.com",
    username: "postgres",
    password: "nCABE9rYUC68Ri77spdf",
    database: "sqlnode",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },  
};