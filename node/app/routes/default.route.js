// default.route.js
var express = require("express");
var router = express.Router();
module.exports = router;
// TODO : Routing using
router.route("/")
.get(function(request, response){response.send("hello")})
.post(function(request, response){})
.put(function(request, response){})
.delete(function(request, response){})
.all(function(request, response){})