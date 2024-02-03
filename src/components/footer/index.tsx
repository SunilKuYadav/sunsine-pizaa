import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>CONTACT US</h4>
        <p>📞 0249596668</p>
        <p>🏠 Niso's pizza & hamburger</p>
        <p>📍 Via Nicola Antonio Porpora, 109, 20131 Milan MI</p>
      </div>
      <div className="footer-section">
        <h4>HOME DELIVERY</h4>
        <p>Pizza food delivery in Milan</p>
        <p>Line Two About Us</p>
      </div>
      <div className="footer-section">
        <h4>KEBAB AT HOME</h4>
        <p>Takeaway pizza pizzeria menu</p>
      </div>
      <div className="footer-bottom">
        <p>Copyright © Nisos 2020. All Rights Reserved. Created By Dipu paul</p>
      </div>
    </footer>
  );
};

export { Footer };
{
  /* <footer className={"footer"}>
      <div>
        © {new Date().getFullYear()} My Pizza Shop. All Rights Reserved.
      </div>
      <div>
        Follow us on social media
        {/* Here you can add social media icons */
}
// </div>
// </footer> */}
