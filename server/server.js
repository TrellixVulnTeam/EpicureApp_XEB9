import restaurants from "./api/RestaurantData.js";
import dishes from "./api/DishData.js";
import chefs from "./api/ChefData.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());

app.get("/restaurants", (req, res) => {
  res.json({ data: restaurants });
});

app.get("/dishes", (req, res) => {
  res.json({ data: dishes });
});

app.get("/chefs", (req, res) => {
  res.json({ data: chefs });
});

app.listen(port, () => console.log(`server is listening on: ${port}`));
