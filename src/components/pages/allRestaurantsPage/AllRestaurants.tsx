import Header from "../../header/Header";
import "./AllRestaurants.scss";
import { Fragment, useState } from "react";
import Footer from "../../footer/Footer";
import RestaurantsGrid from "./RestaurantsGrid";
import React from "react";

const AllRestaurants: React.FC = () => {
  const [filter, setFilter] = useState("all");
  return (
    <Fragment>
      <Header />
      <h2>Restaurants</h2>
      <div className="categories-div">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("new")}>New</button>        
        <button onClick={() => setFilter("popular")}>Most Popular</button>
        <button onClick={() => setFilter("open")}>Open Now</button>
      </div>
      <RestaurantsGrid filter={filter} />
      <hr />
      <Footer />
    </Fragment>
  );
};

export default AllRestaurants;
