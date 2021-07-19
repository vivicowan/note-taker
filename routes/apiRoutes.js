const fs = require("fs");
const path = require("path");

let notesMade = getNotes();

function getNotes() {
	let data = fs.readFileSync("./db/db.json", "UTF-8");
	let notes = JSON.parse(data);

	for (let i = 0; i < notes.length; i++) {
		notes[i].id = "" + i;
		console.log(notes);
	}
	return notes;
}

module.exports = function (app) {
	app.get("/api/notes", (req,res) =>{
      notesMade = getNotes();
      //sends JSON response by converting noteData to JSON string using JSON stringfy() method
      res.json(notesMade);
  });

  app.get("api/notes", (req,res)=>{
    // console.log(req.body);
    notesMade.push(req.body);
    res.json(true);
    
  });

  app.post("/api/notes", (req,res) =>{
    notesMade.push(req.body);
    fs.writeFileSync("./db/db.json", JSON.stringify(notesMade), "UTF-8");
    res.json(true);
  });

  app.delete("/api/notes/:id", function(req, res) {
    const newID = req.params.id;

    let note = notesMade.filter(note => {
      return note.id === newID;
    })[0];

    const idIndex = notesMade.indexOf(note);

    notesMade.splice(idIndex, 1);

    fs.writeFileSync("./db/db.json", JSON.stringify(notesMade), "utf8");
    res.json("Note deleted");
  });
 };
 