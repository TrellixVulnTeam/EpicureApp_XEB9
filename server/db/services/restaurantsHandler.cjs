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

const deleteRestaurantHandler = async (id) => {
  try {
      await restaurant.findByIdAndDelete(id)
      return true
  }
  catch(err) {return false}
}

const updateRestaurantHandler = async (id, document) => {
  try {
      await restaurant.findByIdAndUpdate(id, {...document})
      return true
  }
  catch(err) {return false}
}

module.exports= {getRestaurantsHandler, getRestaurantByIdHandler, createRestaurantHandler, deleteRestaurantHandler, updateRestaurantHandler}