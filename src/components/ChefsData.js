import { useEffect, useState } from "react";
import axios from "axios";

const ChefsData = () => {
  const [dataResChefs, setDataResChefs] = useState([]);

  const fetchChefsData = async () => {
    try {
      const responseChefs = await axios.get("http://localhost:8080/chefs");
      setDataResChefs(responseChefs.data.result);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchChefsData();
  }, []);
  return { dataResChefs };
};

export default ChefsData;
