const express = require('express');
const router = express.Router();
const getChefsController = require('../controllers/chefsController.js')

router.get('/', getChefsController.getChefs)

router.get('/:id', getChefsController.getChefById)

router.post('/', getChefsController.createChef)

// router.delete('/:id', getChefsController.deleteRestaurant())

// router.patch('/', getChefsController.updateRestaurant())

module.exports= router