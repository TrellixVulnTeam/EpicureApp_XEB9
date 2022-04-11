import "./DishPage.scss";
import Input from "../../layout/form/Input";
import line from "../../../assets/line-7-copy-2.png";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../store/store";
import { useEffect, useState } from "react";
import { fetchDishes } from "../../../store/dishDataSlice";

const DishPage = (props: { dish: string }) => {
  const dispatch = useAppDispatch();
  const { dishes } = useSelector((state: any) => state.dishes);

  useEffect(() => {
    dispatch(fetchDishes());
  });

  const dishDetails = dishes.filter((item: any) => item.name === props.dish)[0];

  const [quantityNumber, setQuantitynumber] = useState(1);
  const inputsContainer = (content: string) => {
    return (
      <div>
        <p>{content}</p>
        <img src={line} alt="line" className="line"></img>
      </div>
    );
  };
  const addDish = () => {
    setQuantitynumber(quantityNumber + 1);
  };
  const removeDish = () => {
    setQuantitynumber(quantityNumber - 1);
  };
  return (
    <div className="dish">
      <div className="dish-details">
        <img
          src={dishDetails.mobileImage}
          alt="img"
          className="dish-page-img"
          srcSet={`${dishDetails.desktopImage} 800w`}
        ></img>
        <div className="data-content">
          <img
            src={dishDetails.icon}
            alt="img"
            className="dish-page-icon-desktop"
          ></img>{" "}
          <h3 className="dish-title">{dishDetails.name}</h3>
          <p className="dish-page-description">{dishDetails.description}</p>
          <img
            src={dishDetails.icon}
            alt="img"
            className="dish-page-icon"
          ></img>{" "}
          <br></br>
          <div className="wrapper-dish-page">
            <div className="outter"></div>
            <span className="outter-span">
              <span className="ils">₪</span>
              {dishDetails.price}
            </span>
            <div className="outter"></div>
          </div>
        </div>
      </div>
      <br />
      {inputsContainer("Choose a side")}
      <p>
        {dishDetails.side.map((side: any) => (
          <Input content={side} type={"radio"} placeholder={""}  onChange={""} value={""}/>
        ))}
      </p>
      {inputsContainer("Changes")}
      <p>
        {dishDetails.changes.map((change: any) => (
          <Input content={change} type={"checkbox"} placeholder={""} onChange={""}  value={""}/>
        ))}
      </p>
      {inputsContainer("Quantity")}
      <div className="quantity-container">
        <button onClick={removeDish}>-</button>{" "}
        <span className="quantity-number">{quantityNumber}</span>
        <button onClick={addDish}>+</button>
      </div>
      <button className="add-to-bag-btn">ADD TO BAG</button>
    </div>
  );
};

export default DishPage;
