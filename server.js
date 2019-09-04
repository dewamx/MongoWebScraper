var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var routes = require("./routes");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

var router = express.Router();
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.use(express.static(__dirname + "../public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(router);

var db = (process.env.MONGODB_URI || "mongodb://localhost/mongoDBscraper", { useNewUrlParser: true }); 


mongoose.connect(db, function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log("mongoose good")
    }
});

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));