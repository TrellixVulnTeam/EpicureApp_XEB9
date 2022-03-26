import { Fragment } from "react";
import DishCard from "../../layout/card/DishCard";

const SignatureItem =({dish}) => {
    return (
      <Fragment>
        <div className="restaurant-title">{dish.restaurant}</div>
         <DishCard
          img={dish.mobileImage}
          signatureDesktopImage={dish.desktopImage}
          title={dish.name}
          detail={dish.description}
          icon={dish.icon}
          price={dish.price}
        ></DishCard> 
      </Fragment>
    );
  };

  export default SignatureItem;