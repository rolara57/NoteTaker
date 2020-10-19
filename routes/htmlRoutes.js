
console.log(6 * 7)
//dependencies 
const path = require("path");
//const publicDir = path.join(__dirname, "../", "public")
//Routing
module.exports = function(app) {
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
      });
    
      
    
      // If no matching route is found default to home
      app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });
    };
