console.log(6 * 7);
//Linking routes 
const path = require("path");
const fs = require("fs");

var noteData;



// Routing
module.exports = function(app) {
 fs.readFile("db.json", "utf8", function (err, data) {
    if (err) throw err;
       noteData = JSON.parse(data);
   });


//post note to api
app.get("/api/notes", function (req, res) {
    res.json(noteData)
});
app.post("/api/notes", function (req, res) {
console.log("test");
var newNote = req.body;
noteData.push(newNote);
let parsedata = JSON.stringify(noData);
fs.writeFile(path.join('db.json'), parsedata, (err) => {
    if (err) throw err;
});
res.json(noteData);
});
app.delete("/api/notes/:id", function (req, res){
    console.log("erase");
   var deleteData = req.params.id;
    console.log(deleteData);
    for (i = 0; i < noteData.length; i++) {
        if (deleteData === noteData[i].title) {
            noteData.splice(i, 1);
        };
    };
    let parsedata = JSON.stringify(noteData);
    fs.writeFile(path.join('db.json'), parsedata, (err) => {
        if (err) throw err;
    })
    console.log(noteData)
    res.json(noteData);
});
};
       