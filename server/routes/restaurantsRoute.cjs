const express = require('express');
const router = express.Router();
const getRestaurantsController = require('../controllers/restaurantsController.js')

router.get('/', getRestaurantsController.getRestaurants)

router.get('/:id', getRestaurantsController.getRestaurantById)

router.post('/', getRestaurantsController.createRestaurant)

// router.delete('/:id', restaurantsController.deleteRestaurant())

// router.patch('/', restaurantsController.updateRestaurant())

module.exports= router

