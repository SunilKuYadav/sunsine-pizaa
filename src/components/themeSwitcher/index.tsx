import React, { useState, useEffect } from "react";
import "./style.css"; // Ensure you have the SCSS file for styles

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState("light");

  // Effect to apply the theme
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark-theme");
    } else {
      root.classList.remove("dark-theme");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme} className="theme-switcher">
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
};

export default ThemeSwitcher;
