import { Link } from "react-router-dom";

const PopularItem = ({restaurant}) => {
    return (
      <Link
        to={`/RestaurantPage/${restaurant.restaurantName}`}
        className="to-restaurant-btn">
        <div className="data-item popular-item">
          <img
            src={restaurant.restaurantImage}
            alt="img"
            className="restaurant-img"
            srcSet={`${restaurant.desktopImage} 800w`}
          ></img>
          <div className="restaurant-content">
            <h2 className="restaurant-name">{restaurant.restaurantName}</h2>
            <p className="chef-name">{restaurant.chefName}</p>
          </div>
        </div>
      </Link>
    );
  };

  export default PopularItem;