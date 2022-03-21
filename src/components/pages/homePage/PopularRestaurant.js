import "./HomePage.scss";
import Slider from "react-slick";
import PopularItem from "./PopularItem";

const PopularRestaurant = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1300, settings: { slidesToShow: 2 } },
      { breakpoint: 1050, settings: { slidesToShow: 1.5 } },
    ]
  };
  const smallerArr = data.slice(0, 3);
  return (
    <div className="slider-div">
      <Slider {...settings}>
        {smallerArr &&
          smallerArr.map((restaurant) => {
            return <PopularItem restaurant={restaurant} />;
          })}
      </Slider>
    </div>
  );
};

export default PopularRestaurant;
