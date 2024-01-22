const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require('body-parser');
require("dotenv").config();
app.use(
  cors({
    origin: "*",
    // origin:"http://www.localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

module.exports = app;