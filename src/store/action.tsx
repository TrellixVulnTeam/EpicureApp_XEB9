import ChefsData from "../components/ChefsData";
import RestaurantsData from "../components/RestaurantsData";
import DishesData from "../components/DishesData";

export const addData = {
      type: "ADD_DATA",
      payload: [RestaurantsData, ChefsData, DishesData]
};


export default addData;