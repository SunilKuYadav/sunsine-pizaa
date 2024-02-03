import React from "react";
import "./App.css";
import { Footer, Header, Menu } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Menu />
      </main>
      <Footer />
    </div>
  );
}

export default App;
