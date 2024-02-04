import ThemeSwitcher from "../themeSwitcher";
import "./style.css";
import ImgP from "./logo.webp";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={ImgP} alt="logo" typeof="image/webp" />
      </div>
      <h1>Sunshine Pizzeria - Bask in the Glow of Authentic Flavors!</h1>

      {/* <nav>
        <ul className="navList">
          <li>Home</li>
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav> */}
      {/* <ThemeSwitcher /> */}
    </header>
  );
};

export { Header };
