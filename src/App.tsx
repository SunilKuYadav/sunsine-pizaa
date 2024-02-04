import React from "react";
import "./App.css";
import { Footer, Header, Menu } from "./components";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <main>
          <Menu />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
