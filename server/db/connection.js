const mongoose = require('mongoose')
const chef = require('./models/chef')
const dish = require('./models/dish')
const restaurant = require('./models/restaurant')


const dbInit = async () => {
    const chefCount = await chef.countDocuments()
    const dishCount = await dish.countDocuments()
    const restaurantCount = await restaurant.countDocuments()

    if(chefCount === 0) {
        chef.insertMany([
            {
                
            }
        ], () => console.log("chefs initialized successfuly"))
    }
    if(dishCount === 0) {
        dish.insertMany([
            {
                
            }
        ], () => console.log("dishes initialized successfuly"))
    }
    if(restaurantCount === 0) {
        restaurant.insertMany([
            {
                
            }
        ], () => console.log("restaurants initialized successfuly"))
    }
 }

const connection = mongoose.connect(process.env.DB_HOST, () => {
    console.log("db connected successfuly.")
    dbInit()
})


module.exports = connection