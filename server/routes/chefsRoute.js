const express = require('express');
const router = express.Router();
const getChefsController = require('../controllers/chefsController.js')

router.get('/', getChefsController.getChefs)

router.get('/:id', getChefsController.getChefById)

router.post('/', getChefsController.createChef)

router.delete('/:id', getChefsController.deleteChef)

router.patch('/', getChefsController.updateChef)

module.exports= router