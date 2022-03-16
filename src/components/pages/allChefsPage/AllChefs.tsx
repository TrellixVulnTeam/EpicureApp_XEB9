import { Fragment } from "react";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import NavLinkTemplate from "../../layout/button/NavLinkTemplate";
import ChefsGrid from "./ChefsGrid";

const AllChefs = () => {
  return (
    <Fragment>
      <Header />
      <h2>Chefs</h2>
      <nav className="categories-div">
        <NavLinkTemplate to={"/AllChefs"} content={"All"}></NavLinkTemplate>
        <NavLinkTemplate
          to={"/MostPopular"}
          content={"Most Popular"}
        ></NavLinkTemplate>
      </nav>
      <ChefsGrid />
      <Footer />
    </Fragment>
  );
};

export default AllChefs;
