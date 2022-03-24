const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb+srv://yardents:245123yarden@yarden.hvyfy.mongodb.net/epicure?retryWrites=true&w=majority', () => {
    console.log("db connected successfuly.")
})

mongoose.chefs.insert(
    [
      { chefName: "11", chefDescription: "pencil", chefImage: "50"},
      { chefName: "pen", chefDescription: "20", chefImage:"20" },
      { chefName: "eraser", chefDescription: "25", chefImage: "20"}
    ]
 )


module.exports = connection