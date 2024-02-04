import React, { useState } from "react";
import "./style.scss"; // Make sure to create a corresponding SCSS file for styling

interface CartItemProps {
  savePercentage: number;
  originalPrice: number;
  discountedPrice: number;
}

const CartItem = ({ savePercentage, originalPrice }: CartItemProps) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((qty) => qty + 1);
  const decrement = () => setQuantity((qty) => (qty > 0 ? qty - 1 : 0));
  originalPrice = originalPrice * quantity;
  const discountedPrice = (originalPrice * savePercentage) / 100;

  return (
    <div className="cart-item">
      <div className="discount-info">
        <p>₹ {discountedPrice.toFixed(2)} save</p>
        <p className="original-price">₹{originalPrice.toFixed(2)}</p>
        <p className="discounted-price">
          ₹{(originalPrice - discountedPrice).toFixed(2)}
        </p>
      </div>
      <div className="quantity-selector">
        <button onClick={decrement} disabled={quantity === 1}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={increment}>+</button>
      </div>
      <button className="add-to-cart-btn">Add To Cart</button>
    </div>
  );
};

export default CartItem;
