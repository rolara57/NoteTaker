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
//Router 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
//Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

