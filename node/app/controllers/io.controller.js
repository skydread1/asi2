'use strict';

const IOController ={
    listen = function(server) {
      server.listen(1330, function() {
      });
    },
  
    connection = function(server) {
      var io = require("socket.io")(server);
      
      //l'évènement "connection":
      io.on("connection", function(socket) {
       
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
          } else if (msg.CMD == "PAUSE") {
          } else if (msg.CMD == "END") {
          } else if (msg.CMD == "BEGIN") {
          } else if (msg.CMD == "PREV") {
          } else if (msg.CMD == "NEXT") {
  
          }
        });
      });
    }
  
  }
  module.exports = contentController;