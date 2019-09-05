var router = require("express").Router();
var scrapeRoutes = require("./scrape");

router.use("/", scrapeRoutes);
 
module.exports = router;