import { useEffect, useState } from "react";
import axios from "axios";

const DishesData = () => {
  const [dataResDishes, setDataResDishes] = useState([]);

  const fetchDishesData = async () => {

    try {
      const responseDishes = await axios.get("http://localhost:8080/dishes");
      setDataResDishes(responseDishes.data.result);
      console.log(dataResDishes)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchDishesData();
  }, []);
  return dataResDishes;
};

export default DishesData;
