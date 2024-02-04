import React from "react";
import "./style.css";
import IMG from "./logo-bg.png";
import IMGS from "./tp-logo-bg.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-section">
          <h4>CONTACT US</h4>
          <hr className="nameLine" />

          <p>📞 7607472799</p>
          <p>🏠 Sunshine pizza</p>
          <p>📍 Via Nicola Antonio Porpora, 109, 20131 Milan MI</p>
        </div>
        <div className="footer-section">
          <h4>HOME DELIVERY</h4>
          <hr className="nameLine" />

          <p>Pizza food delivery in Dudhi</p>
          <p>Line Two About Us</p>
        </div>
        <div className="footer-section">
          <h4>SUNSHINE PIZZERIA AT HOME</h4>
          <hr className="nameLine" />

          <p>Takeaway pizza pizzeria menu</p>
        </div>
      </div>
      <div className="footer-bottom">
        <h4>OWR SPONSOR</h4>
        <hr className="nameLine" />
        <div className="sponsor">
          <img src={IMG} className="logo-img" />
          <img src={IMGS} className="logo-img" />
        </div>
        <p>
          Copyright © Triveni Point 2024-{new Date().getFullYear()}. All Rights
          Reserved. Created By Sunil Kumar Yadav.
        </p>
      </div>
    </footer>
  );
};

export { Footer };
