'use strict';

var CONFIG = require("../../config.json");

var IOController = function(name) {

  var socketMap = new Map();

  console.log('IOCONTROLLER');

  this.listen = function(server) {
    server.listen(CONFIG.port, function() {
        console.log('IOCONTROLLER: listen ')
    });
  }

  this.connection = function(server) {
      const io = require("socket.io")(server);
      console.log('IOCONTROLLER: connection');

      //l'évènement "connection":
      io.on("connection", function(socket) {
        console.log('io.on("connection)');

      //l'évènement "data_comm":
        io.emit("data_comm", { for: "everyone" });
        socket.on("data_comm", function() {
          //clé: l'id du client
          socketMap.set(socket.id, socket);
        });
  
        //l'évenement "slidEvent":
        socket.on("slidEvent", function(msg) {
          //io.emit("currentSlidEvent", null);
          //Json looks like:  "CMD": [START | PAUSE | END | BEGIN | PREV | NEXT ]
          if (msg.CMD == "START") {
          //passer par ContentModel pour lire les métadonnées
  
          } else if (msg.CMD == "PAUSE") {
  
          } else if (msg.CMD == "END") {
  
          } else if (msg.CMD == "BEGIN") {
  
          } else if (msg.CMD == "PREV") {
  
          } else if (msg.CMD == "NEXT") {
  
          }
        });
      });
    }

   /* server.listen(1330, function (err) {
        if (err) throw err
        console.log('error: listening on port 1330')
      })*/
  }

exports.IOController = IOController;