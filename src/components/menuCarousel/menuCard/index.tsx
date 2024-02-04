import React from "react";
import "./style.css";
import CartItem from "../cartItem";

interface OfferConfig {
  percentage: number;
  offerType: string; // could be more specific, e.g., 'regular' | 'medium'
}

interface Prices {
  regular: number;
  medium: number;
}

interface MenuCardProps {
  id: string;
  name: string;
  description: string;
  prices: Prices;
  offer: boolean;
  offerConfig?: OfferConfig;
  imageSrc: string;
  typeLabel: string;
}

enum PIZZA_SIZE {
  REGULAR = "REGULAR",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
}

const MenuCard = ({
  name,
  description,
  prices,
  offer,
  offerConfig,
  imageSrc,
  typeLabel,
}: MenuCardProps) => {
  let savePercentage = 0;
  let originalPrice = 0;

  if (offer) {
    savePercentage = offerConfig?.percentage as number;
  }
  if (typeLabel === "PIZZA") {
    const key = offerConfig?.offerType as "regular" | "medium";
    originalPrice = prices[key];
  }
  const discountedPrice = 49.89;

  return (
    <div className={`card`}>
      <div>
        <img src={imageSrc} alt={name} className="image" />
      </div>
      <div>
        <h3 className="name">{name}</h3>
        <hr className="nameLine" />
        <p className="typeLabel">{typeLabel}</p>
        <p className="description">{description}</p>
      </div>
      <CartItem
        savePercentage={savePercentage}
        originalPrice={originalPrice}
        discountedPrice={discountedPrice}
      />
    </div>
  );
};

export default MenuCard;
