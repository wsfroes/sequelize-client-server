const express = require('express');
const cors = require("cors");
const routes = require('./routes');

// const connection = require('./models/Connection');
// //console.log('\x1b[40m\x1b[33m%s\x1b[0m', connection);
// const schema = "teste"
// connection(schema);

require('./config/db');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT || 5000, () => {
    console.log("server has start on port 5000");
});