// default.route.js
var express = require("express");
var router = express.Router();
var fs = require('fs');
var path = require('path');
var CONFIG = require("../../config.json");


module.exports = router;
// TODO : Routing using
router.route('/loadPres')
    .get(function (request, response) {
        fs.readdir(CONFIG.presentationDirectory, function (err, data) {
            if (err) {
                response.end(err);
            }

            var toRead = []; //json file names
            var cptFile = 0;

            //Store json file names in array and count them
            data.forEach(function (fileName) {
                //store all json in an array and count them
                if (path.extname(fileName) === ".json") {
                    toRead.push(fileName);
                }
            });

            var read = [] //just to check the length to synchronize the asynch requests
            var result = {} //json content
            toRead.forEach(function (element) {
                var url = CONFIG.presentationDirectory + element;
                fs.readFile(url, 'utf8', function (err, data) {
                    data = JSON.parse(data)
                    if (err) {
                        response.end(err.message);
                        return
                    }
                    read.push(url);
                    result[data.id] = data;
                    if (read.length == toRead.length) {
                        response.json(result);
                        response.end()
                    }
                });
            });
        });
    })

    .post(function (request, response) { })
    .put(function (request, response) { })
    .delete(function (request, response) { })
    .all(function (request, response) { })

router.route("/savePres")
    .get(function (request, response) { })
    .post(function (request, response) {     
        response.send(JSON.parse(request.body)); 
    })
    .put(function (request, response) { })
    .delete(function (request, response) { })
    .all(function (request, response) { })