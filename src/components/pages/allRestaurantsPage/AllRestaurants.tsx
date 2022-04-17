import Header from "../../header/Header";
import "./AllRestaurants.scss";
import { useState } from "react";
import Footer from "../../footer/Footer";
import RestaurantsGrid from "./RestaurantsGrid";
import React from "react";

const AllRestaurants: React.FC = () => {
  const [filter, setFilter] = useState("all");
  return (
    <div className="all-restaurants-page">
      <Header />
      <br /> <br />
      <h2>Restaurants</h2>
      <div className="categories-div">
        <button onClick={() => setFilter("all")} className={`${filter === "all" ? 'all':''}`}>All</button>
        <button onClick={() => setFilter("new")} className={`${filter === "new" ? 'new':''}`}>New</button>        
        <button onClick={() => setFilter("popular")} className={`${filter === "popular" ? 'popular':''}`}>Most Popular</button>
        <button onClick={() => setFilter("open")} className={`${filter === "open" ? 'open':''}`}>Open Now</button>
      </div>
      <br /> 
      <RestaurantsGrid filter={filter} />
      <hr />
      <Footer />
    </div>
  );
};

export default AllRestaurants;
