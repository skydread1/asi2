"use strict";

var express = require("express");
var router = express.Router();
var fs = require('fs');
var path = require('path');
var CONFIG = require("../../config.json");
var utils=require("../utils/utils.js");
var multer = require("multer");
var userController = require('../controllers/content.controller');
var multerMiddleware = multer({ "dest": "/tmp/" });
var contentModel=require('../models/content.model');

module.exports = router;

// TODO : Routing using
router.route('/contents')
    .get(userController.list)
    .post(userController.create)

router.route('/contents/:contentId')
    .get(userController.read)

router.param('contentId',function(req,res,next,id){
    req.contentId=id;
    next();
});

//router.post("/contents", multerMiddleware.single("file"), contentController.create);
/**
 * Multer ajoute à l'objet `request` la propriété `file` qui contient plusieurs informations comme:
 *  - request.file.path : le chemin d'acces du fichier sur le serveur
 *  - request.file.originalname : le nom original du fichier
 *  - request.file.mimetype : le type mime
 *  - ...
 */