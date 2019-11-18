//Imports
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//Config
app.use(express.static(__dirname + "/public/dist/public"));
app.use(bodyParser.json());

//Database
mongoose.connect("mongodb://localhost/product-manager");
require("./server/config/mongoose.js");

//Routes
require("./server/config/routes.js")(app);


//Port
app.listen(1337, function(){
    console.log("Listening on part: 1337");
});