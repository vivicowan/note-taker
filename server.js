const express = require("express");

// creating an express server
const app = express();

// setting a port for server
const PORT = process.env.PORT || 8080;

// built in middleware that sets up express app to handle data parsing and route
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// middleware that sets up static file 
app.use(express.static("public"));

// pointing the server to our route files 
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// starts our server by listening to PORT
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`);
});
      