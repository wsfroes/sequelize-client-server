const express = require('express');
const cors = require("cors");
const routes = require('./routes');
const db = require("./models/Connection");

//const populate = require("./populate");
// create ou init tables
db.sequelize.sync().then(() => {
  console.log("Drop and re-sync db.");
//  populate();
});

require('./config/db');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT || 5000, () => {
    console.log("server has start on port 5000");
});