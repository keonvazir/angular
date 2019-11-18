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
mongoose.connect('mongodb://localhost/commercedb', { useNewUrlParser: true });

const ProductSchema = new mongoose.Schema({
    name: { type: String, minlength: [3, "Name must be at least 3 characters"] },
    quantity: Number,
    price: Number,
}, { timestamps: true })


ProductSchema.plugin(uniqueValidator, {message: "This product has already been added"})
const Product = mongoose.model("Product", ProductSchema)


// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
var date = new Date();
console.log(date)
////////////////////// GET ALL ProductS ///////////////////////////
app.get('/products', (req, res) => {
    Product.find()
        .then(data => res.json({ "result": "Success", "data": data }))
        .catch(err => res.json({ "result": "Failed", "data": err }))
});

////////////////////// GET ONE Product ///////////////////////////
app.get('/products/:id', (req, res) => {
    Product.findById(req.params.id)
        .then(data => res.json({ "result": "Success", "data": data }))
        .catch(err => res.json({ "result": "Failed", "data": err }))
})

////////////////////// CREATE A Product ///////////////////////////
app.post('/product', (req, res) => {
    console.log(req.body)
    Product.create(req.body)
        .then(data => res.json({ "result": "Success", "data": data }))
        .catch(err => res.json({ "result": "Failed", "data": err }))
})

////////////////////// EDIT ONE Product ///////////////////////////
app.put('/products/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, context: 'query' })
        .then(data => res.json({ "result": "Success", "data": data }))
        .catch(err => res.json({ "result": "Failed", "data": err }))
})

////////////////////// DELETE ONE Product ///////////////////////////
app.delete('/products/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(data => res.json({ "result": "Success", "data": data }))
        .catch(err => res.json({ "result": "Failed", "data": err }))
})

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(8000, () => console.log("listening on port 8000"));