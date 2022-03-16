import React from "react";
import Slider from "react-slick";
import Signature from "../../../interfaces/Signature";
import DishCard from "../../layout/card/DishCard";
import "./HomePage.scss";

interface SignatureProps {
  signatures: Signature[];
}

const SignatureItem: React.FC<Signature> = ({
  key,
  restaurantName,
  signatureName,
  signatureImage,
  signatureDesktopImage,
  signatureDescription,
  icon,
  price,
}: Signature) => {
  return (
    <div>
      <div className="restaurant-title">{restaurantName}</div>
       <DishCard
        img={signatureImage}
        signatureDesktopImage={signatureDesktopImage}
        title={signatureName}
        detail={signatureDescription}
        icon={icon}
        price={price}
        key={key}
      ></DishCard> 
    </div>
  );
};

const SignatureDish: React.FC<SignatureProps> = ({
  signatures,
}: SignatureProps) => {
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
          slidesToShow: 1.1,
        },
      },
    ],
  };
  const smallerArr= signatures.slice(0,3);
  return (
    <div className="slider-div">
      <Slider {...settings}>
        {smallerArr.map((signature) => {
          return (
            <SignatureItem
              key={signature.key}
              restaurantName={signature.restaurantName}
              signatureName={signature.signatureName}
              signatureDescription={signature.signatureDescription}
              icon={signature.icon}
              price={signature.price}
              signatureImage={signature.signatureImage}
              signatureDesktopImage={signature.signatureDesktopImage}
            ></SignatureItem>
          );
        })}
      </Slider>
    </div>
  );
};

export default SignatureDish;
