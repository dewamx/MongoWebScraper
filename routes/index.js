var router = require("express").Router();
// var apiRoutes = require("./api");
var htmlRoutes = require("./html");
var apiRoutes = require("./api");

// router.use("/api", apiRoutes);
router.use("/", htmlRoutes);
router.use("/api", apiRoutes);
 
module.exports = router;