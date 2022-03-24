const dish= require('../models/dish.js');

const getDishesHandler = async () => {
  const result = await dish.find()
  return result
}

const getDishByIdHandler = async (id) => {
  const result = await dish.findById(id)
  return result
}

const createDishHandler = async (data) => {
  try {
  const newDish = new dish({...data})
  await newDish.save()
  return true
  }
  catch(err) {return false}
}

module.exports= {getDishesHandler, getDishByIdHandler, createDishHandler}