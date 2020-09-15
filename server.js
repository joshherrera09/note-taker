// Dependencies
var express = require("express");

var app = express();

// Set PORT or run on 8080
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));

// Requiring routes
require("./routes/apiRoutes")(app);

require("./rotues/htmlRoutes")(app);

// Listener
app.listen(PORT, function() {
    console.log("App is listening on PORT: " + PORT)
});