import { Link, useParams } from "react-router-dom";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import ChefCard from "../../layout/card/ChefCard";
import dummy from "../../DummyData";
import "../homePage/HomePage.scss";
import { Fragment } from "react";

const ChefPage = () => {
  const params: any = useParams();
  const chefDetails = dummy.filter((chef) => chef.chefName === params.chefName);
  return (
    <Fragment>
      <Header />
      <h1>{params.chefName}</h1>
      <img src={chefDetails[0].chefImage} alt="chef" className="chef-img"/>
      <p>{chefDetails[0].chefDescription}</p>
      {chefDetails.map((chef) => {
        return (
          <Link
          to={`/RestaurantPage/${chef.restaurantName}`} className="to-restaurant-btn">
          <ChefCard
            key={chef.key}
            title={chef.chefName}
            detail={chef.chefDescription}
            restaurantImg={chef.restaurantImage}
            restaurantName={chef.restaurantName}
            img={chef.chefImage}
          />
          </Link>
        );
      })}
      <Footer />
    </Fragment>
  );
};

export default ChefPage;
