const express = require('express');
const cors = require("cors");
const routes = require('./routes');

require('./database');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT || 5000, () => {
    console.log("server has start on port 5000");
});