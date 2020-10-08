
// Require/import the HTTP module
const express = require("express");
const path = require("path");

// Define a port to listen for incoming requests
var app = express();
const PORT = 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

require("./routes/apiRoutes") (app);
require("./routes/htmlRoutes") (app);


app.listen(PORT, () => {
  console.log(" app listening on Port" + PORT);
});


