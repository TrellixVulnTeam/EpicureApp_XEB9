import BeigeCard from "../../layout/card/BeigeCard";
import { useSelector } from "react-redux";
import "./AllRestaurants.scss";
import { Link } from "react-router-dom";
import { useAppDispatch} from "../../../store/store";
import { useEffect } from "react";
import {fetchRestaurants} from "../../../store/RestaurantDataSlice";


const RestaurantsGrid = () => { 
  const dispatch= useAppDispatch();
  const {restaurants}= useSelector((state:any)=> state.restaurants);

  useEffect(() => {
    dispatch(fetchRestaurants()) 
    }, []);

  return (
    <div className="restaurants-grid">
       {restaurants.map((item: any) => {
        return (
          <Link
            to={`/RestaurantPage/${item.name}`}
            className="to-restaurant-btn"
          >
            <BeigeCard
              key={item.name}
              title={item.name}
              detail={item.chef}
              img={item.mobileImage}
            ></BeigeCard> 
         </Link>
       );
      })} 
    </div>
  );
};
export default RestaurantsGrid