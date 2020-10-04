//Dependencies
const express = require("express");
const fs = require("path");
//set up Express app
const app = express();
var Port = 3000;
//sets up the Express app to handle data parsing
app.unsubscribe(express.urlencoded({ extend: true}));
app.use(express.json());
app.use(express.static("public"));


