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

const deleteChefHandler = async (id) => {
    try {
        await chef.findByIdAndDelete(id)
        return true
    }
    catch(err) {return false}
}

const updateChefHandler = async (id, document) => {
    try {
        await chef.findByIdAndUpdate(id, {...document})
        return true
    }
    catch(err) {return false}
}

module.exports= {getChefsHandler, getChefByIdHandler, createChefHandler, deleteChefHandler, updateChefHandler}