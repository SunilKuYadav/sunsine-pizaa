import React, { useState } from "react";
import MenuCard from "./menuCard";
import "./style.css";

const MenuCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const menuItems = [
    {
      name: "Margherita",
      description:
        "A delightful mix of tomato sauce and mozzarella cheese, garnished with basil",
      price: 4.5,
      imageSrc: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      typeLabel: "PIZZA",
    },
    {
      name: "Calzone Liscio",
      description:
        "A folded pizza with tomato sauce, mozzarella, and ham, served with a side of marinara",
      price: 5.0,
      imageSrc: "https://images.unsplash.com/photo-1572448862527-d3c904757de6",
      typeLabel: "CALZONE",
    },
    {
      name: "Pizza Diavola",
      description:
        "Spicy salami with a fiery tomato sauce and mozzarella cheese",
      price: 4.5,
      imageSrc: "https://images.unsplash.com/photo-1589182373725-fc5cfb8d8a9b",
      typeLabel: "PIZZA",
    },
    // Add more items as needed
  ];

  const goPrev = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : menuItems.length - 1
    );
  const goNext = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex < menuItems.length - 1 ? prevIndex + 1 : 0
    );

  return (
    <div className="carousel">
      <button onClick={goPrev} className="prev">
        &lt;
      </button>
      <MenuCard {...menuItems[currentIndex]} />
      <button onClick={goNext} className="next">
        &gt;
      </button>
    </div>
  );
};

export default MenuCarousel;
