import Header from "../../header/Header";
import "./AllRestaurants.scss";
import { useState } from "react";
import Footer from "../../footer/Footer";
import RestaurantsGrid from "./RestaurantsGrid";
import React from "react";
import { Link } from "react-router-dom";

const AllRestaurants: React.FC = () => {
  const [filter, setFilter] = useState("all");
  return (
    <div className="all-restaurants-page">
      <Header />
      <br /> <br />
      <h2>Restaurants</h2>
      <div className="categories-div">
        {/* <button onClick={() => setFilter("all")} className={`${filter === "all" ? 'all':''}`}>All</button>
        <button onClick={() => setFilter("new")} className={`${filter === "new" ? 'new':''}`}>New</button>        
        <button onClick={() => setFilter("popular")} className={`${filter === "popular" ? 'popular':''}`}>Most Popular</button>
        <button onClick={() => setFilter("open")} className={`${filter === "open" ? 'open':''}`}>Open Now</button> */}
        <Link to="/restaurants/all/1" onClick={() => setFilter("all")} className={`${filter === "all" ? 'all':''}`}>All</Link>
        <Link to="/restaurants/new/1" onClick={() => setFilter("new")} className={`${filter === "new" ? 'new':''}`}>New</Link>
        <Link to="/restaurants/popular/1" onClick={() => setFilter("popular")} className={`${filter === "popular" ? 'popular':''}`}>Most Popular</Link>
        <Link to="/restaurants/open/1" onClick={() => setFilter("open")} className={`${filter === "open" ? 'open':''}`}>Open Now</Link>

      </div>
      <br /> 
      <RestaurantsGrid filter={filter} />
      <hr />
      <Footer />
    </div>
  );
};

export default AllRestaurants;
