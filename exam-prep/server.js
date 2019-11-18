const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
var uniqueValidator = require('mongoose-unique-validator');

app.use(express.static(__dirname + '/public/dist/public'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/restaurantdb', { useNewUrlParser: true });

const ReviewSchema = new mongoose.Schema({
    reviewed_by: { type: String, minlength: [3, "Name must be at least 3 characters"] },
    rating: Number,
    review: { type: String, minlength: [3, "Your review must be at least 3 characters long"] }
}, { timestamps: true })

const RestaurantSchema = new mongoose.Schema({
    name: { type: String, unique:true,  minlength: [3, "Name must be at least 3 characters"] },
    cuisine: { type: String, default: '', minlength: [3, "Cuisine must be at least 3 characters"] },
    reviews: [ReviewSchema]
}, { timestamps: true })

RestaurantSchema.plugin(uniqueValidator, {message: "This restaurant has already been added"})
const Restaurant = mongoose.model("Restaurant", RestaurantSchema)
const Review = mongoose.model("Review", ReviewSchema)

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
var date = new Date();
console.log(date)
////////////////////// GET ALL RESTAURANTS ///////////////////////////
app.get('/restaurants', (req, res) => {
    Restaurant.find()
        .then(data => res.json({ "result": "Success", "data": data }))
        .catch(err => res.json({ "result": "Failed", "data": err }))
});

////////////////////// GET ONE RESTAURANT ///////////////////////////
app.get('/restaurants/:id', (req, res) => {
    Restaurant.findById(req.params.id)
        .then(data => res.json({ "result": "Success", "data": data }))
        .catch(err => res.json({ "result": "Failed", "data": err }))
})

////////////////////// CREATE A RESTAURANT ///////////////////////////
app.post('/restaurant', (req, res) => {
    console.log(req.body)
    Restaurant.create(req.body)
        .then(data => res.json({ "result": "Success", "data": data }))
        .catch(err => res.json({ "result": "Failed", "data": err }))
})

////////////////////// EDIT ONE RESTAURANT ///////////////////////////
app.put('/restaurants/:id', (req, res) => {
    Restaurant.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, context: 'query' })
        .then(data => res.json({ "result": "Success", "data": data }))
        .catch(err => res.json({ "result": "Failed", "data": err }))
})

////////////////////// DELETE ONE RESTAURANT ///////////////////////////
app.delete('/restaurants/:id', (req, res) => {
    Restaurant.findByIdAndDelete(req.params.id)
        .then(data => res.json({ "result": "Success", "data": data }))
        .catch(err => res.json({ "result": "Failed", "data": err }))
})


////////////////////// GET ALL REVIEWS ///////////////////////////
app.get('/reviews', (req, res) => {
    Review.find()
        .then(data => res.json({ "result": "Success", "data": data }))
        .catch(err => res.json({ "result": "Failed", "data": err }))
});

////////////////////// GET ONE REVIEW ///////////////////////////
app.get('/reviews/:id', (req, res) => {
    Review.findById(req.params.id)
        .then(data => res.json({ "result": "Success", "data": data }))
        .catch(err => res.json({ "result": "Failed", "data": err }))
})

////////////////////// CREATE A REVIEW ///////////////////////////
app.post('/review/:id', (req, res) => {
    console.log(req.body)
    Review.create(req.body)
        .then(newReview => {
            Restaurant.findByIdAndUpdate(req.params.id, { $push: { reviews: newReview } })
                .then(data => res.json({ "result": "Success", "data": data }))
                .catch(err => res.json({ "result": "Failed", "data": err }))
        })
        .catch(err => res.json({ "result": "Failed", "data": err }))
})

////////////////////// EDIT ONE REVIEW ///////////////////////////
app.put('/reviews/:id', (req, res) => {
    Review.findByIdAndUpdate(req.params.id, req.body, { runValidators: true })
        .then(data => res.json({ "result": "Success", "data": data }))
        .catch(err => res.json({ "result": "Failed", "data": err }))
})

////////////////////// DELETE ONE REVIEW ///////////////////////////
app.delete('/reviews/:id', (req, res) => {
    Review.findByIdAndDelete(req.params.id)
        .then(data => res.json({ "result": "Success", "data": data }))
        .catch(err => res.json({ "result": "Failed", "data": err }))
})

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, () => console.log("listening on port 8000"));