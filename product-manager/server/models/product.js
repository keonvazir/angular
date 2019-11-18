const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    title: {type: String, required:[true, "Product title required"], minlength: [3, "Title should have at least 3 characters"]},
    price: {type: Number, required:[true, "Need to have a price"]},
    image: {type: String}
}, {timestamps: true});

ProductSchema.plugin(uniqueValidator, {message: '{PATH} must be unique.'});

module.exports = mongoose.model("Product", ProductSchema);
