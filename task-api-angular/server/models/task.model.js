const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema ({
    title: {
        type: String,
        minlength: 3,
        maxlength: 25,
    },
    description: {
        type: String,
        default: '',
        minlength: 2,
        maxlength: 500,

    },
    completed:{
        type: Boolean,
        required: true,
        default: false,

    },
}, {timestamps: true});

taskSchema.plugin(uniqueValidator, {message: '{PATH} must be unique.'});

module.exports = mongoose.model('Task', taskSchema);