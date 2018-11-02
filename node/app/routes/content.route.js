// default.route.js
var express = require("express");
var router = express.Router();
var fs = require('fs');
var path = require('path');
var CONFIG = require("../../config.json");
var utils=require("../utils/utils.js");


module.exports = router;
// TODO : Routing using
router.route('/contents')
    .get(function (request, response) {
        fs.readdir(CONFIG.contentDirectory, function (err, data) {
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
                var url = CONFIG.contentDirectory + element;
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
    .post(function (request, response) { 
        let body = "";
        let chaine;
        request.on("data", (chunk) => {
            body += chunk;
        });

        request.on("end", () => {
            
            let json=JSON.parse(body);
            let id=json["id"];
            let urlJson=CONFIG.contentDirectory+'/'+id+'.meta.json';
            console.log(urlJson);
            fs.writeFile(urlJson,body,'utf8',(err)=>{
                if (err) {
                    console.error(err);
                    return;
                };
                console.log('fichier enregistré');
                response.send(json);
            })  
        })   
        
    })

router.route('/contents/:contentId')
    .get(function (request, response) {
        var id=request.params.contentId;
        let url=CONFIG.contentDirectory+id+'.meta.json';
        utils.readFileIfExists(url, function (err, data) {
            data = JSON.parse(data)
            if (err) {
                response.end(err.message);
                return
            }
            response.json(data);
            response.end()
        });
    })

router.param('contentId',function(req,res,next,id){
    req.contentId=id;
    next();
});