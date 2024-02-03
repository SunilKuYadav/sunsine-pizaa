import React from "react";
import "./style.css";

interface MenuCardProps {
  name: string;
  description: string;
  price: number;
  imageSrc: string;
  typeLabel: string; // e.g., "PIZZA" or "CALZONE"
}

const MenuCard: React.FC<MenuCardProps> = ({
  name,
  description,
  price,
  imageSrc,
  typeLabel,
}) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={name} className="image" />
      <h3 className="name">{name}</h3>
      <p className="description">{description}</p>
      <p className="typeLabel">{typeLabel}</p>
      <p className="price">€{price.toFixed(2)}</p>
    </div>
  );
};

export default MenuCard;
