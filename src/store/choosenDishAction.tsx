import RestaurantsData from "../components/RestaurantsData";
import DishesData from "../components/DishesData";
import ChefsData from "../components/ChefsData";

export const passData = {
      type: "PASS_DATA",
      payload:  [RestaurantsData, ChefsData, DishesData]
};


export default passData;