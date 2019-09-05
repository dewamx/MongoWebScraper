var router = require("express").Router();
var axios = require("axios");
var cheerio = require("cheerio");

router.get("/scrape", function (req, res) {
    axios.get("https://www.nytimes.com").then(function (response) {
        var $ = cheerio.load(response.data);
        console.log(response.data);
        res.send("scrape completed");
    })
});


module.exports = router;