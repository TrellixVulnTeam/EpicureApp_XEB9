const {getChefsHandler,getChefByIdHandler, createChefHandler} = require('../db/services/chefsHandler.cjs')

const getChefs = async (req, res) => {
    const result = await getChefsHandler()
    if(result) return res.status(200).json({result})
    return res.status(500).send('Internal error.')
}

const getChefById = async (req, res) => {
    const {id} = req.params
    if(!id) return res.status(400).send('no id.')
    const result = await getChefByIdHandler(id)
    if(result) return res.status(200).json({result})
    return res.status(500).send('Internal error.')
}

const createChef = async (req, res) => {
const result = await createChefHandler(req.body)
if(result) return res.status(200).send("chef created successfuly")
return res.status(500).send('Internal error.')
}

module.exports= {getChefs, getChefById, createChef}