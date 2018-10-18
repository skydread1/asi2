console.log('It Works !')

var express = require("express");
var app = express();

var http = require("http");
var CONFIG = require("./config.json");

// init server
var server = http.createServer(app);
server.listen(CONFIG.port);

//pour que la config soit accessible par tous les modules
var CONFIG = require("./config.json");
process.env.CONFIG = JSON.stringify(CONFIG);

//router path
var defaultRoute = require("./app/routes/default.route.js");
var presentationRoute = require("./app/routes/presentation.route.js");
app.use(defaultRoute);
app.use(presentationRoute);

//routes statiques pour admin et watch
var path = require("path");
app.use("/admin", express.static(path.join(__dirname, "public/admin")));
app.use("/watch", express.static(path.join(__dirname, "public/watch")));