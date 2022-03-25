const {getRestaurantsHandler,getRestaurantByIdHandler, createRestaurantHandler, deleteRestaurantHandler, updateRestaurantHandler} = require('../db/services/restaurantsHandler.cjs')

const getRestaurants = async (req, res) => {
    const result = await getRestaurantsHandler()
    if(result) return res.status(200).json({result})
    return res.status(500).send('Internal error.')
}

const getRestaurantById = async (req, res) => {
    const {id} = req.params
    if(!id) return res.status(400).send('no id.')
    const result = await getRestaurantByIdHandler(id)
    if(result) return res.status(200).json({result})
    return res.status(500).send('Internal error.')
}

const createRestaurant = async (req, res) => {
const result = await createRestaurantHandler(req.body)
if(result) return res.status(200).send("restaurant created successfuly")
return res.status(500).send('Internal error.')
}

const deleteRestaurant = async (req,res) => {
    const result = await deleteRestaurantHandler(req.params.id)
    if(result) return res.status(200).send("restaurant deleted successfuly")
    return res.status(500).send('Internal error.')
}

const updateRestaurant = async (req,res) => {
    const result = await updateRestaurantHandler(req.params.id, req.body.document)
    if(result) return res.status(200).send("restaurant updated successfuly")
    return res.status(500).send('Internal error.')
}

module.exports= {getRestaurants, getRestaurantById, createRestaurant, deleteRestaurant, updateRestaurant}
