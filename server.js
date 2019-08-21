var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
// var routes = require("./routes");

var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.use(routes);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoDBscraper";
mongoose.connect(MONGODB_URI);

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));