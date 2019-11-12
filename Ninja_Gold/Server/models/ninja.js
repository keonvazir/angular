const mongoose = require("mongoose");

const NinjaSchema = new mongoose.Schema({
    name : {type: String, default: ""},
}, {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}});



mongoose.model("Ninja", NinjaSchema);