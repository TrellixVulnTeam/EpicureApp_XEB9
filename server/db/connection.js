const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb+srv://yardents:245123yarden@yarden.hvyfy.mongodb.net/epicure?retryWrites=true&w=majority', () => {
    console.log("db connected successfuly.")
})

module.exports = connection