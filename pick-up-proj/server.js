const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
var uniqueValidator = require('mongoose-unique-validator');

app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({
    extended: true
}));
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/pickupdb', { useNewUrlParser: true });

// Models //

const EventSchema = new mongoose.Schema({
    name: {type: String, unique: true, minlength: [3, "Event name must be at least 3 characters. Please try again!"]},
    location: {type: String, default: '', required: [true, "Must include a location for your event!"]},
    time: {type: Number, min: [0, "must be a valid time!"]},
    capacity: {type: Number, min:[2, "capacity of event must include more than 1 person!"]},
    users: [UserSchema]
}, {timestamps: true})

const UserSchema = new mongoose.Schema({
    fullname: {type: String, unique: true, minlength: [3, "Name must have more than 3 characters. Please try again!"]},
}, {timestamps: true})

EventSchema.plugin(uniqueValidator, {message: "This event has already been added"})
UserSchema.plugin(uniqueValidator, {message: "This user has already been added"})
const Event = mongoose.model("Event", EventSchema)
const User = mongoose.model("User", UserSchema)

var date = new Date();
console.log(date)

///// End of Models //////




app.listen(7000, '0.0.0.0', () => console.log("listening on port 7000"));