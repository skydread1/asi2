console.log('It Works !')

var CONFIG = require("./config.json");
//pour que la config soit accessible par tous les modules
process.env.CONFIG = JSON.stringify(CONFIG);

var path = require("path");
var http = require("http");
var express = require("express");
var defaultRoute = require("./app/routes/default.route.js");
var contentRoute = require("./app/routes/content.route.js");
var presentationRoute = require("./app/routes/presentation.route.js");

// init server
var app = express();
var server = http.createServer(app);

//router path
app.use(defaultRoute);
app.use(contentRoute);
app.use(presentationRoute);

//routes statiques pour admin et watch
app.use("/admin", express.static(path.join(__dirname, "public/admin")));
app.use("/watch", express.static(path.join(__dirname, "public/watch")));

server.listen(CONFIG.port);
