const express = require("express");
const router = express.Router();
const getDishesController = require("../controllers/dishesController.js");

router.get("/", getDishesController.getDishes);

router.get("/:id", getDishesController.getDishById);

router.post("/", getDishesController.createDish);

router.delete("/:id", getDishesController.deleteDish);

router.patch("/", getDishesController.updateDish);

module.exports = router;
