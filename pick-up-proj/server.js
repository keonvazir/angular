const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
// const io = require('socket.io');
var uniqueValidator = require('mongoose-unique-validator');

app.use(express.static(__dirname + "/public/dist/public/"));

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());
// const rooms = {};

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/pickupdb', { useNewUrlParser: true });

// Models //

const UserSchema = new mongoose.Schema({
    fullname: {type: String, unique: true, minlength: [3, "Name must have more than 3 characters. Please try again!"]},
    level: {type: String, required: [true, "Need to include a level."]}
}, {timestamps: true})

const SportSchema = new mongoose.Schema({
    name: {type: String, unique: true, minlength: [3, "Sport name must be at least 3 characters. Please try again!"]},
    location: {type: String},
    date: {type: Date},
    capacity: {type: Number, min:[2, "capacity of Sport must include more than 1 person!"]},
    description: {type: String},
    category:{type: String, required: true},
    image: {type: String},
    users: [UserSchema]
}, {timestamps: true})



SportSchema.plugin(uniqueValidator, {message: "This Sport has already been added"})
UserSchema.plugin(uniqueValidator, {message: "This user has already been added"})
const Sport = mongoose.model("Sport", SportSchema)
const User = mongoose.model("User", UserSchema)

var date = new Date();
console.log(date)

///// End of Models //////

///// GET ALL SportS /////
app.get('/sports_json', (req, res)=>{
    Sport.find()
    .then(data => res.json({"result": "Success", "data": data}))
    .catch(err => res.json({"result": "Failed", "data": err}))
})

///// GET ONE Sport /////
app.get('/sports_json/:id', (req, res)=>{
    Sport.findById(req.params.id)
    .then(data => res.json({"result": "Success", "data": data}))
    .catch(err => res.json({"result": "Failed", "data": err}))

})
//// GET ALL USERS ////
app.get('/users_json', (req, res)=>{
    User.find()
    .then(data => res.json({"result": "Success", "data": data}))
    .catch(err => res.json({"result": "Failed", "data": err}))
})
//// CREATE A USER /////
app.post('/user_json', (req, res)=>{
    User.create(req.body)
    .then(data => res.json({"result": "Success", "data": data}))
    .catch(err => res.json({"result": "Failed", "data": err}))
})

///// CREATE AN Sport /////
app.post('/sport_json', (req, res)=>{
    console.log(req.body)
    Sport.create(req.body)
    .then(data => res.json({"result": "Success", "data": data}))
    .catch(err => res.json({"result": "Failed", "data": err}))
})

///// EDIT AN Sport //////
app.put('/sports_json/edit/:id', (req, res)=>{
    Sport.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, context: 'query'})
    .then(data => res.json({"result": "Success", "data": data}))
    .catch(err => res.json({"result": "Failed", "data": err}))
})

///// DELETE AN Sport /////
app.delete('/sports_json/:id', (req, res)=>{
    Sport.findByIdAndDelete(req.params.id)
    .then(data => res.json({"result": "Success", "data": data}))
    .catch(err => res.json({"result": "Failed", "data": err}))

})

///// GET ALL BASKETBALL ////
app.get('/sports_json/basketball', (req, res)=>{
    Sport.findOne(req.params.category)
    .then(data => res.json({"result": "Success", "data": data}))
    .catch(err => res.json({"result": "Failed", "data": err}))
})

///// GET ALL FOOTBALL ////
app.get('/sports_json/football', (req, res)=>{
    Sport.findOne(req.params.category)
    .then(data => res.json({"result": "Success", "data": data}))
    .catch(err => res.json({"result": "Failed", "data": err}))
})

///// GET ALL SOCCER ////
app.get('/sports_json/soccer', (req, res)=>{
    Sport.findOne(req.params.category)
    .then(data => res.json({"result": "Success", "data": data}))
    .catch(err => res.json({"result": "Failed", "data": err}))
})

///// GET ALL VOLLEYBALL ////
app.get('/sports_json/volleyball', (req, res)=>{
    Sport.findOne(req.params.category)
    .then(data => res.json({"result": "Success", "data": data}))
    .catch(err => res.json({"result": "Failed", "data": err}))
})

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(7000, '0.0.0.0', () => console.log("listening on port 7000"));