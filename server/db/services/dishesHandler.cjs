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

const deleteDishHandler = async (id) => {
    try {
        await dish.findByIdAndDelete(id)
        return true
    }
    catch(err) {return false}
}

const updateDishHandler = async (id, document) => {
    try {
        await dish.findByIdAndUpdate(id, {...document})
        return true
    }
    catch(err) {return false}
}

module.exports= {getDishesHandler, getDishByIdHandler, createDishHandler, deleteDishHandler, updateDishHandler}