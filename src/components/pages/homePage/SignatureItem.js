import { Fragment } from "react";
import DishCard from "../../layout/card/DishCard";

const SignatureItem =({dish}) => {
    return (
      <Fragment>
        <div className="restaurant-title">{dish.restaurantName}</div>
         <DishCard
          img={dish.signatureImage}
          signatureDesktopImage={dish.signatureDesktopImage}
          title={dish.signatureName}
          detail={dish.signatureDescription}
          icon={dish.icon}
          price={dish.price}
          key={dish.key}
        ></DishCard> 
      </Fragment>
    );
  };

  export default SignatureItem;