const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {type: String, required:[true, "Product title required"], minlength: [3, "Title should have at least 3 characters"]},
    price: {type: Number, required:[true, "Need to have a price"]},
    image: {type: String}
}, {timestamps: true});

mongoose.model("Product", ProductSchema);
