import React, { useState } from "react";
import "./style.css";
import { MenuCarousel } from "../menuCarousel";
import { useAppSelector } from "../../redux";

const categories = ["All", "Pizza", "Desserts"]; // Example categories

const Menu = () => {
  const menuItems = useAppSelector((state) => state.menuReducer.menu);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    // Here you might also want to filter your menu items based on the category
  };

  return (
    <div className="menu">
      <MenuCarousel />
      <section className="menu-section">
        <h2 className="menu-section-title">Our Food Menu</h2>
        <hr className="nameLine" />
        <p className="menu-section-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
        </p>
      </section>
      <nav className="sub-navigation">
        <ul className="sub-navigation-list">
          {categories.map((category) => (
            <li
              key={category}
              className={`sub-navigation-item ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </nav>
      <div className="menu-list">
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <div className="menu-item-image">
              <img src={item.imageSrc} />
            </div>
            <div className="menu-item-info">
              <h3 className="menu-item-name">{item.name}</h3>
              <p className="menu-item-description">{item.description}</p>
            </div>
            <div className="menu-item-price">
              <p className="price">€{item?.prices?.regular.toFixed(2)}</p>
              <button className="view">Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Menu };
