import React, { Fragment } from "react";
import Chef from "../../../interfaces/Chef";
import "./HomePage.scss";
import { Link } from "react-router-dom";

interface ChefProps {
  chefs: Chef[];
}

const ChefItem: React.FC<Chef> = ({
  key,
  restaurantName,
  restaurantImage,
}: Chef) => {
  return (
    <div className="chef-restaurant-item">
    <img src={restaurantImage} alt="img" className="chef-restaurant-img" /> <h3>{restaurantName}</h3>
    </div>
  );
};

const Chefs: React.FC<ChefProps> = ({ chefs }: ChefProps) => {
  const yossiRestaurants = chefs.filter(
    (chef) => chef.chefName === "Yossi Shitrit"
  );
  return (
    <Fragment>
      <div className="chef-container">
        <div className="chef-img">
          <img
            src={yossiRestaurants[1].chefImage}
            alt="chef"
            className="chef-img"
          ></img>
          <h1>{yossiRestaurants[1].chefName}</h1>
        </div>
        <p className="chef-description">
          {yossiRestaurants[1].chefDescription}
        </p>
      </div>
      <div className="chefs-restaurants">
        <p className="chef-left-title">
          {yossiRestaurants[1].chefName}’s restaurants :
        </p>
        <div className="chef-restaurants-container">
          {yossiRestaurants.map((chef) => {
            return (
              <Link
              to={`/RestaurantPage/${chef.restaurantName}`} className="to-restaurant">
              <ChefItem
                key={chef.key}
                chefName={chef.chefName}
                chefImage={chef.chefImage}
                chefDescription={chef.chefDescription}
                restaurantName={chef.restaurantName}
                restaurantImage={chef.restaurantImage}
              ></ChefItem>
              </Link>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Chefs;