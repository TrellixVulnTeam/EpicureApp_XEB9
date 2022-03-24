const mongoose = require('mongoose')

const chefSchema = mongoose.Schema({
    chefName: {
        type: String,
        required: true
    },
    chefDescription: {
        type: String,
        required: true
    },
    chefImage: {
        type: String,
        required: true,
        default: "https://i.ibb.co/KXj8k3Z/rectangle.png"
    }
})

module.exports = mongoose.model("chef", chefSchema)