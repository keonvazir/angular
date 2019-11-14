const express = require("express");
const app = express();
// const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const path = require('path')

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static( __dirname + '/public/dist/public'));
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });

// mongoose.connect("mongodb://localhost/weather_API")
// require("./server/config/mongoose.js");

// require('./server/config/routes.js')(app)

app.listen(4200, () => console.log("listening on port 4200"));