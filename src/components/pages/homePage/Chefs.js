import { Fragment } from "react";
import ChefItem from './ChefItem';
import "./HomePage.scss";
import { Link } from "react-router-dom";


const Chefs = ({chefs})=> {
  const yossiRestaurants = chefs.filter(
    (chef) => chef.chefName === "Yossi Shitrit"
  );
  return (
    <Fragment>
      <div className="chef-container">
        <div className="chef-restaurants-container">
          {yossiRestaurants && yossiRestaurants.map((chef) => {
            return (
              <Link to={`/RestaurantPage/${chef.restaurantName}`} className="to-restaurant">
              <ChefItem chef={chef}/>
              </Link>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Chefs;
