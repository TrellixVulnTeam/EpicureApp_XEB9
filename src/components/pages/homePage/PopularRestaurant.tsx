import React from "react";
import Popular from "../../../interfaces/Popular";
import "./HomePage.scss";
import Slider from "react-slick";
import { Link } from "react-router-dom";

interface PopularProps {
  populars: Popular[];
}

const PopularItem: React.FC<Popular> = ({
  restaurantName,
  chefName,
  restaurantImage,
  desktopImage,
}: Popular) => {
  return (
    <Link
      to={`/RestaurantPage/${restaurantName}`}
      className="to-restaurant-btn">
      <div className="data-item popular-item">
        <img
          src={restaurantImage}
          alt="img"
          className="restaurant-img"
          srcSet={`${desktopImage} 800w`}
        ></img>
        <div className="restaurant-content">
          <h2 className="restaurant-name">{restaurantName}</h2>
          <p className="chef-name">{chefName}</p>
        </div>
      </div>
    </Link>
  );
};

const PopularRestaurant: React.FC<PopularProps> = ({
  populars,
}: PopularProps) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };
  const smallerArr = populars.slice(0, 3);
  return (
    <div className="slider-div">
      <Slider {...settings}>
        {smallerArr.map((item) => {
          return (
            <PopularItem
              key={item.key}
              chefName={item.chefName}
              restaurantName={item.restaurantName}
              restaurantImage={item.restaurantImage}
              desktopImage={item.desktopImage}
            ></PopularItem>
          );
        })}
      </Slider>
    </div>
  );
};

export default PopularRestaurant;
