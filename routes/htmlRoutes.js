// path package allows us to construct paths to html files
const path = require("path");

// exports and accepts express app object and sets up routes
module.exports = function(app) {
	// when "Get Started" button is clicked, the response creates the path which takes the client to notes.html
	app.get("/notes", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/notes.html"));
	});

	// default get request route
	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/index.html'));
	 });
}