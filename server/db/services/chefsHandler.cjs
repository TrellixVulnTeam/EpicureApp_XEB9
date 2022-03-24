const chef= require('../models/chef.js');

const getChefsHandler = async () => {
  const result = await chef.find()
  return result
}

const getChefByIdHandler = async (id) => {
  const result = await chef.findById(id)
  return result
}

const createChefHandler = async (data) => {
  try {
  const newChef = new chef({...data})
  await newChef.save()
  return true
  }
  catch(err) {return false}
}

module.exports= {getChefsHandler, getChefByIdHandler, createChefHandler}