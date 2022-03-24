const express = require('express');
const router = express.Router();
const getDishesController = require('../controllers/dishesController.js')

router.get('/', getDishesController.getDishes)

router.get('/:id', getDishesController.getDishById)

router.post('/', getDishesController.createDish)

// router.delete('/:id', restaurantsController.deleteRestaurant())

// router.patch('/', restaurantsController.updateRestaurant())

module.exports= router