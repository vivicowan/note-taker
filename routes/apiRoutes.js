const fs = require("fs");
const path = require("path");

const notesMade = renderNotes();

function renderNotes() {
	let data = fs.readFileSync("./db/db.json", "UTF-8");
	let notes = JSON.parse(data);

	for (let i = 0; i < notes.length; i++) {
		notes[i].id = "" + i;
		console.log(notes);
	}
	return notes;
}