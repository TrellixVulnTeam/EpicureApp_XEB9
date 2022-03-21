import chefs from "./ChefData";
import restaurants from "./RestaurantData";
import dishes from "./DishData";

const dishes = require(dishes);
const restaurants = require(restaurants);
const chefs = require(chefs);


app.get("/restaurants", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json({ data: restaurants });
});

app.get("/chefs", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json({ data: chefs });
});

app.get("/dishes", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json({ data: dishes });
});

