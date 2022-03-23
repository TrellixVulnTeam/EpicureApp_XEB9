import Card from "../../layout/card/Card";
import "./HomePage.scss";
import Search from "../../layout/search/Search";
import MobileNav from "./mobile-nav/MobileNav";
import About from "./about/About";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import PopularRestaurant from "./PopularRestaurant";
import SignatureDish from "./SignatureDish";
import Chefs from "./Chefs";
import Icons from "./Icons";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ChefItem from "./ChefItem";

const HomePage = () => {
  const [dataResRestaurants, setDataResRestaurants] = useState([]);
  const [dataResDishes, setDataResDishes] = useState([]);
  const [dataResChefs, setDataResChefs] = useState([]);

  const fetchRestaurantsData = async () => {
    try {
      const responseRestaurant = await axios.get(
        "http://localhost:8080/restaurants"
      );
      setDataResRestaurants(responseRestaurant.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchRestaurantsData();
  }, []);

  const fetchDishesData = async () => {
    try {
      const responseDishes = await axios.get("http://localhost:8080/dishes");
      setDataResDishes(responseDishes.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchDishesData();
  }, []);

  const fetchChefsData = async () => {
    try {
      const responseChefs = await axios.get("http://localhost:8080/chefs");
      setDataResChefs(responseChefs.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchChefsData();
  }, []);

  return (
    <Fragment>
      <Header />
      <div className="card-bg">
        <Card>
          <p className="epicure-title">
            Epicure works with the top chef restaurants in Tel Aviv
          </p>
          <Search />
        </Card>
      </div>
      <MobileNav />
      <div className="data-section">
        <p className="sub-title">THE POPULAR RESTAURANTS IN EPICURE : </p>
        <PopularRestaurant data={dataResRestaurants} />
        <Link to={"AllRestaurants"} className="all-restaurants-desktop-btn">
          All Restaurants {">>"}{" "}
        </Link>
        <p className="sub-title">SIGNATURE DISH OF :</p>
        <SignatureDish dishes={dataResDishes} />
        <Icons />
      </div>
      <p className="sub-title">CHEF OF THE WEEK :</p>
      <ChefItem chef={dataResChefs} />
      <About />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
