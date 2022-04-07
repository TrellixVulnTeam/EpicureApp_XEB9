import { Fragment } from "react";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import ChefsGrid from "./ChefsGrid";
import { useState } from "react";

const AllChefs = () => {
  return (
    <Fragment>
      <Header />
      <h2>Chefs</h2>  
       <ChefsGrid /> 
      <Footer />
    </Fragment>
  );
};

export default AllChefs;
