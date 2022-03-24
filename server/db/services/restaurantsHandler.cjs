const restaurant= require('../models/restaurant.js');

const getRestaurantsHandler = async () => {
  const result = await restaurant.find()
  return result
}

const getRestaurantByIdHandler = async (id) => {
  const result = await restaurant.findById(id)
  return result
}

const createRestaurantHandler = async (data) => {
  try {
  const newRestaurant = new restaurant({...data})
  await newRestaurant.save()
  return true
  }
  catch(err) {return false}
}

module.exports= {getRestaurantsHandler, getRestaurantByIdHandler, createRestaurantHandler}