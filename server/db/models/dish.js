const mongoose = require('mongoose')

const dishSchema = mongoose.Schema({
    restaurant: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    mobileImage: {
        type: String,
        required: true
    },
    desktopImage: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    side: [{
        type: String,
        required: true
    }],
    changes: [{
        type: String,
        required: true
    }],
})

module.exports = mongoose.model("dish", dishSchema)