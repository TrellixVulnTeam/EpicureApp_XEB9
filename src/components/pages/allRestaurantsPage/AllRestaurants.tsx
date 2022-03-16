import Header from "../../header/Header";
import "./AllRestaurants.scss";
import NavLinkTemplate from "../../layout/button/NavLinkTemplate";
import { Fragment } from "react";
import Footer from "../../footer/Footer";
import RestaurantsGrid from "./RestaurantsGrid";
import React from 'react';


const AllRestaurants:React.FC<{addData: any, data:any}>= (props) => {
  return (
    <Fragment>
      <Header />
      <h2>Restaurants</h2>
      <div className="categories-div">
       <NavLinkTemplate to={'/AllRestaurants'} content={'All'}></NavLinkTemplate>
       <NavLinkTemplate to={'/New'} content={'New'}></NavLinkTemplate>
       <NavLinkTemplate to={'/MostPopular'} content={'Most Popular'}></NavLinkTemplate>
       <NavLinkTemplate to={'/OpenNow'} content={'Open Now'}></NavLinkTemplate>
      </div>
      <RestaurantsGrid />
      <hr />
      <Footer />
    </Fragment>
  );
};

export default AllRestaurants;