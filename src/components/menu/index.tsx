import React, { useState } from "react";
import "./style.css";
import MenuCarousel from "../menuCarousel";

const pizzas = [
  {
    name: "Margherita",
    description: "Classic delight with 100% real mozzarella cheese",
    price: 8.99,
  },
  {
    name: "Pepperoni",
    description: "Loaded with pepperoni and cheese",
    price: 9.99,
  },
  {
    name: "Veggie Supreme",
    description: "Garden fresh veggies and 100% real mozzarella",
    price: 10.99,
  },
  // Add more pizzas here
];
const categories = ["All", "Pizza", "Desserts"]; // Example categories
const menuItems = [
  {
    imageSrc: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    name: "Daisy",
    description: "Pomodoro and mozzarella",
    price: 4.5,
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1572448862527-d3c904757de6",
    name: "HOAX",
    description: "Tomato, buffalo mozzarella",
    price: 6.5,
  },
  // Add more items here
];
const Menu = () => {
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
              <span>€{item.price.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
      {/* <ul className="pizzaList">
        {pizzas.map((pizza, index) => (
          <li key={index} className="pizzaItem">
            <h3>{pizza.name}</h3>
            <p>{pizza.description}</p>
            <p>${pizza.price.toFixed(2)}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export { Menu };
