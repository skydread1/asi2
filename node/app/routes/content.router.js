// default.route.js
var express = require("express");
var router = express.Router();
var fs = require('fs');
var path = require('path');
var CONFIG = require("../../config.json");

module.exports = router;

// TODO : Routing using
router.route('/contents')
    .get(function(request, response){
        response.send("hello cissou");
})
.post(function(request, response){})
