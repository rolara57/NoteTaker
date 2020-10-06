//Dependencies
const express = require("express");
const fs = require("path");
//set up Express app
const app = express();
const Port = 3000;
//sets up the Express app to handle data parsing
app.use(express.urlencoded({ extend: true}));
app.use(express.json());
app.use(express.static("Develop/public"));
//Router 
require("./Develop/routes/apiRoutes")(app);
require("./Develop/routes/htmlRoutes")(app);
//Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

