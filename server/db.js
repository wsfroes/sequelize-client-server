const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "nCABE9rYUC68Ri77spdf",
    host: "sim-v4-dev.cqsdv4qss3dh.sa-east-1.rds.amazonaws.com",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;