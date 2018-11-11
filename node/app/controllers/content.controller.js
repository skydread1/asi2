var express = require("express");
var router = express.Router();
var fs = require('fs');
var path = require('path');
var CONFIG = require("../../config.json");
var utils=require("../utils/utils.js");
var ContentModel=require("../models/content.model");

const contentController={
    list(request,response){    
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
        })
    },
    create(request,response){
        let body = "";
        let chaine;
        request.on("data", (chunk) => {
            body += chunk;
        });
        request.on("end", () => {
            
            let json=JSON.parse(body);
            //Attend une getData() non null en cas de 'img' ! Manquant!
            const ctModel=new ContentModel(json);
            ContentModel.create(ctModel,function(err){
                if(err) response.send(err);
            });
        })   
    },
    read(request,response){
        console.log(request.contentId);
        ContentModel.read(request.contentId, function(err,ctModel){
            if(err)
            {
                response.send("Erreur ID");
                return
            } 
            if(request.query.json==='true'){
                var url = CONFIG.contentDirectory +ctModel.id+'.meta.json';
                fs.readFile(url, 'utf8', function (err, data) {
                data = JSON.parse(data)
                if (err) {
                    response.end("Erreur lecture fichier PresentationDirectory");
                    return
                }
                response.json(data);
                response.end()
                });
            }
            else if(ctModel.type==='img'){
                let urlimg=CONFIG.contentDirectory+ctModel.fileName;
                console.log(urlimg);
                response.sendFile(path.resolve(path.resolve(__dirname,'../../'+urlimg)));
            }
            else{
                response.redirect(ctModel.src);
            }
        });  
    }

}

module.exports = contentController;
