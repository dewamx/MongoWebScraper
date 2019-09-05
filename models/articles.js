var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: {
        type: String, 
        require: true
    },
    link: {
        type: String,
        require: true
    },
    summary: {
        type: String
    }
})

var article = mongoose.model("Article", ArticleSchema)

module.exports = article;
