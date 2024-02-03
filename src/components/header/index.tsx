import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">My Pizza Shop</div>
      <nav>
        <ul className="navList">
          <li>Home</li>
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
