import Card from "../../layout/card/Card";
import "./HomePage.scss";
import Search from "../../layout/search/Search";
import MobileNav from "./mobile-nav/MobileNav";
import About from "./about/About";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import PopularRestaurant from "./PopularRestaurant";
import SignatureDish from "./SignatureDish";
import Icons from "./Icons";
import Chefs from "./Chefs";
import dummy from "../../DummyData";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
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
        <PopularRestaurant populars={dummy} />
        <Link to={"AllRestaurants"} className="all-restaurants-desktop-btn">
          All Restaurants {">>"}{" "}
        </Link>
        <p className="sub-title">SIGNATURE DISH OF :</p>
        <SignatureDish signatures={dummy} />
        <Icons />
      </div>
      <p className="sub-title">CHEF OF THE WEEK :</p>
      <Chefs chefs={dummy} />
      <About />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
