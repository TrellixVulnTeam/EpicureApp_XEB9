import { useParams } from "react-router-dom";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import dummy from "../../DummyData";
import clock from "../../../assets/clock-icon.svg";
import NavLinkTemplate from "../../layout/button/NavLinkTemplate";
import DishSmallCard from "../../layout/card/DishSmallCard";
import "./RestaurantPage.scss";
import { Fragment, useState } from "react";
import DishPage from "../DishPage";


const RestaurantPage = () => {
  const [openDishCard, setOpenDishCard] = useState(false);
  const [dishName, setDishName] = useState("");
  const openDishCardHandler = (dish: string) => {
    setOpenDishCard(true);
    setDishName(dish);
  };

  const params: any = useParams();
  const restaurantDetails = dummy.filter(
    (item) => item.restaurantName === params.restaurantName
  );
  const mealsTypes: string[] = ["Breakfast", "Lunch", "Dinner"];
  return (
    <Fragment>
      <Header />
      {openDishCard && (<div><button className="dish-container" onClick={()=> setOpenDishCard(false)}></button> <button className="close-dish-page" onClick={()=>setOpenDishCard(false)}>X</button> <DishPage dish={dishName}></DishPage></div>)} 
       {!openDishCard && (<div className="restaurant-page-container">
          <img
            src={restaurantDetails[0].desktopImage}
            alt="restaurant"
            className="restaurant-page-img"
            srcSet={`${restaurantDetails[0].bigImage} 800w`}
          ></img>
          <h1>{params.restaurantName}</h1>
          <h2>{restaurantDetails[0].chefName}</h2>
          <img src={clock} alt="clock"></img> <span>Open now</span>
          <nav className="categories-div">
            {mealsTypes.map((type) => (
              <NavLinkTemplate content={type} to={`/${type}`} />
            ))}
          </nav>
          <div className="restaurants-container">
            {restaurantDetails.map((item) => {
              return (
                <button
                  className="to-dish-btn"
                  onClick={() => openDishCardHandler(item.signatureName)}
                >
                  <div className="restaurant-item">
                    <DishSmallCard
                      img={item.signatureImage}
                      signatureDesktopImage={item.signatureDesktopImage}
                      title={item.signatureName}
                      detail={item.signatureDescription}
                      price={item.price}
                      key={item.key}
                    ></DishSmallCard>
                  </div>
                </button>
              );
            })}
          </div>
          <Footer />
        </div>)}
    </Fragment>
  );
};

export default RestaurantPage;
