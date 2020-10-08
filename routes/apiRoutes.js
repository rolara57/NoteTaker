//Linking routes 
const path = require("path");
const fs = require("fs");

const checkObject = require("../assets/js/object.js");
//const { join } = require("path");
const databaseDir = path.join(__dirname,"../", "db");


// Routing
module.exports = function(app) {
    app.get("/api/notes", (req, res) =>{
        let json;
        let data = fs.readFileSync(path.join(databaseDir,"db.json"), "utf8");
        if (data) {
            json = JSON.parse(data);
        }
        else{
            json = {msg: "No notes Found"};
        }
        res.json(json);
    });
    


//post note to api
app.post("/api/notes", (req, res) => {
    let data = req.body;
    let fileData = fs.readFileSync(path.join(databaseDir, "db.json"), "utf8");
    let dbData = JSON.parse.fileData;
    let id;
    if (dbData.lenght === 0) {
        id = 1;
    }
        else {
            id = parseInt(dbData[dbData.lenght - 1].id) + 1;
        }
        if(Array.isArray(data)) { 
            if (!data.every(checkObject)) {
                res.json( {error: "obj only contain text and title property"}) ;
                return;
            }
        data.forEach(elem => {
            elem.id = id;
            dbData.push(elem);
            id++
        });
        fs.writeFile(path.join(databaseDir, "db.json"),
        JSON.stringify(dbData), (err) => {
            if(err) console.log("Can't write to file")
        });
        res.json(data);
    }
    else {
        if(checkObject(data)) {
            data.id = id;
            dbData.push(data);
            fs.writeFile(path.join(databaseDir, "db.json"),
           JSON.stringify(dbData), (err) => {
               if(err) console.log("can't write to file")
           });
           res.json(data);
        }
        else {
            res.jason({error: "Can,t post to database"});
        }
    }
    return
});
app.delete("/api/notes/:id", (req, res) => {
    let id = req.params.id;
    let dbData = fs.readFileSync(path.json(databaseDir, "db.jason"), "utf8");
    dbData = JSON.push(dbData);
    const note = dbData.filter(note => note.id == parseInt(id))[0];
    const index = dbData.indexOf(note);
    if(index > -1) {
        dbData.splice(index, 1);
        fs.writeFileSync(path.json(databaseDir, "db.json"), JSON.stringify(dbData));
        res.json(note);
    }
    else {
        res.json({error: 'No note with id ${id} found' });
    }
    return
})
}