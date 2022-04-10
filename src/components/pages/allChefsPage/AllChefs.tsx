import { Fragment } from "react";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import ChefsGrid from "./ChefsGrid";

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
