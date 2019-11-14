const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

//Config
app.use(express.static(__dirname + "/public/dist/public"));
app.use(bodyParser.json());
app.use(express.json());

//Database
mongoose.connect("mongodb://localhost/shinto_coins");
require("./server/config/mongoose.js");

//Routes
require("./server/config/routes.js")(app);

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

//Port
app.listen(1337, function(){
    console.log("Listening on part: 1337");
})