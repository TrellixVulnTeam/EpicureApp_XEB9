const express = require('express');
const router = express.Router();
const getRestaurantsController = require('../controllers/restaurantsController.js')

router.get('/', getRestaurantsController.getRestaurants)

router.get('/:id', getRestaurantsController.getRestaurantById)

router.post('/', getRestaurantsController.createRestaurant)

router.delete('/:id', getRestaurantsController.deleteRestaurant)

router.patch('/', getRestaurantsController.updateRestaurant)

module.exports= router

