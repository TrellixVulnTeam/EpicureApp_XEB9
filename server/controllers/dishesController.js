const {getDishesHandler,getDishByIdHandler, createDishHandler, deleteDishHandler, updateDishHandler} = require('../db/services/dishesHandler.cjs')

const getDishes = async (req, res) => {
    const result = await getDishesHandler()
    if(result) return res.status(200).json({result})
    return res.status(500).send('Internal error.')
}

const getDishById = async (req, res) => {
    const {id} = req.params
    if(!id) return res.status(400).send('no id.')
    const result = await getDishByIdHandler(id)
    if(result) return res.status(200).json({result})
    return res.status(500).send('Internal error.')
}

const createDish = async (req, res) => {
const result = await createDishHandler(req.body)
if(result) return res.status(200).send("dish created successfuly")
return res.status(500).send('Internal error.')
}

const deleteDish = async (req,res) => {
    const result = await deleteDishHandler(req.params.id)
    if(result) return res.status(200).send("dish deleted successfuly")
    return res.status(500).send('Internal error.')
}

const updateDish = async (req,res) => {
    const result = await updateDishHandler(req.params.id, req.body.document)
    if(result) return res.status(200).send("dish updated successfuly")
    return res.status(500).send('Internal error.')
}

module.exports= {getDishes, getDishById, createDish, deleteDish, updateDish}