import { useEffect, useState } from "react";
import axios from "axios";

const RestaurantsData = () => {
  const [dataResRestaurants, setDataResRestaurants] = useState([]);

  const fetchRestaurantsData = async () => {
    try {
      const responseRestaurant = await axios.get(
        "http://localhost:8080/restaurants"
      );
      setDataResRestaurants(responseRestaurant.data.result);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchRestaurantsData();
  }, []);

  console.log(dataResRestaurants);

  return { dataResRestaurants };
};

export default RestaurantsData;
