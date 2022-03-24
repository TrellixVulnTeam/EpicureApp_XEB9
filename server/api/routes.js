import chefs from "./ChefData";
import restaurants from "./RestaurantData";
import dishes from "./DishData";


//controller=> services
/* 
import express from "express";
import v1Router from "./v1/index.js";
const router = express.Router();

router.use("/v1", v1Router);

export default router; 

-------

\const router = express.Router();

import {
  createRestaurant,
  getAllRestaurants,
  getSingleRestaurant,
  updateRestaurant,
  deleteRestaurant,
} from "../../../controllers/restaurantsController.js";

router.route("/").post(createRestaurant).get(getAllRestaurants);
router
  .route("/:id")
  .get(getSingleRestaurant)
  .patch(updateRestaurant)
  .delete(deleteRestaurant);

export default router;
*/
