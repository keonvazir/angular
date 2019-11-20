const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
var uniqueValidator = require('mongoose-unique-validator');

app.use(express.static(__dirname + "/public/dist/public/"));
// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({
    extended: true
}));
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/pickupdb', { useNewUrlParser: true });

// Models //

const UserSchema = new mongoose.Schema({
    fullname: {type: String, unique: true, minlength: [3, "Name must have more than 3 characters. Please try again!"]},
    level: {type: String, required: [true, "Need to include a level."]}
}, {timestamps: true})

const EventSchema = new mongoose.Schema({
    name: {type: String, unique: true, minlength: [3, "Event name must be at least 3 characters. Please try again!"]},
    location: {type: String, default: '', required: [true, "Must include a location for your event!"]},
    date: {type: Date, required: [true, "must be a valid time!"]},
    capacity: {type: Number, min:[2, "capacity of event must include more than 1 person!"]},
    image: {type: String},
    users: [UserSchema]
}, {timestamps: true})



EventSchema.plugin(uniqueValidator, {message: "This event has already been added"})
UserSchema.plugin(uniqueValidator, {message: "This user has already been added"})
const Event = mongoose.model("Event", EventSchema)
const User = mongoose.model("User", UserSchema)

var date = new Date();
console.log(date)

///// End of Models //////

///// GET ALL EVENTS /////
app.get('/events', (req, res)=>{
    Event.find()
    .then(data => res.json({"result": "Success", "data": data}))
    .catch(data => res.json({"result": "Failed", "data": err}))
})

///// GET ONE EVENT /////
app.get('/events/:id', (req, res)=>{
    Event.findById(req.params.id)
    .then(data => res.json({"result": "Success", "data": data}))
    .catch(data => res.json({"result": "Failed", "data": err}))

})
///// CREATE AN EVENT /////
app.post('/event', (req, res)=>{
    console.log(req.body)
    Event.create(req.body)
    .then(data => res.json({"result": "Success", "data": data}))
    .catch(data => res.json({"result": "Failed", "data": err}))
})

///// EDIT AN EVENT //////
app.put('/events/:id', (req, res)=>{
    Event.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, context: 'query'})
    .then(data => res.json({"result": "Success", "data": data}))
    .catch(data => res.json({"result": "Failed", "data": err}))
})

///// DELETE AN EVENT /////
app.delete('/events/:id', (req, res)=>{
    Event.findByIdAndDelete(req.params.id)
    .then(data => res.json({"result": "Success", "data": data}))
    .catch(data => res.json({"result": "Failed", "data": err}))

})



app.listen(7000, '0.0.0.0', () => console.log("listening on port 7000"));