module.exports = {
  HOST: "sim-v4-dev.cqsdv4qss3dh.sa-east-1.rds.amazonaws.com",
  USER: "postgres",
  PASSWORD: "nCABE9rYUC68Ri77spdf",
  DB: "sqlnode",
  dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },  
};