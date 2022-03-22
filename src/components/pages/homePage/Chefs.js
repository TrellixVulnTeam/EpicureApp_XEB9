import { Fragment } from "react";
import ChefItem from './ChefItem';
import "./HomePage.scss";
import { Link } from "react-router-dom";


const Chefs = ({chefs})=> {
  // const yossiRestaurants = chefs.filter(
  //    (chef) => chef.chefName === "Yossi Shitrit"
  // );
  // console.log(chefs)
  return (
    <Fragment>
      <div className="chef-container">
        {/* <div className="chef-img">
          <img
            src={yossiRestaurants[0].chefImage}
            alt="chef"
            className="chef-img"
          ></img>
          <h1>{yossiRestaurants[0].chefName}</h1>
        </div>
        <p className="chef-description">
          {yossiRestaurants[0].chefDescription}
        </p>
      </div>
      <div className="chefs-restaurants">
        <p className="chef-left-title">
          {yossiRestaurants[0].chefName}’s restaurants :
        </p> */}
              {/* <Link
              to={`/RestaurantPage/${chefs}`} className="to-restaurant"> */}
              <ChefItem chef={chefs} />
              {/* </Link> */}
      </div>
    </Fragment>
  );
};

export default Chefs;
