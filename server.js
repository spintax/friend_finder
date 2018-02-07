// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Star Wars Characters (DATA)
// =============================================================
var characters = [
    {
        "name":"Richard",
        "photo":"https://vignette.wikia.nocookie.net/rickandmorty/images/8/8f/Rickk22.png/revision/latest?cb=20170911060616",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      },
      {
        "name":"Trudy Beekman",
        "photo":"https://pbs.twimg.com/media/DSNwi-rVoAAyZSl.jpg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      },
      {
        "name":"Ghus the herder",
        "photo":"https://pm1.narvii.com/5738/95c90dcd9dc6253063ec093294da19a9c912033f_hq.jpg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      }
];

  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });