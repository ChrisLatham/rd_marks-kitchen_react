import React from "react";
import "./App.css";
import Header from "./Layout/Header";
import Menu from "./components/Menu";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main-container">
        <Router>
          <Menu path="menu" />
        </Router>
      </main>
      <aside className="aside-container">
        <h1 className="first">Your Order</h1>

        <p className="subtext">We do not currently deliver.</p>
      </aside>
      <aside className="footer-container">
        <div className="inner-wrapper">Footer</div>
      </aside>
    </div>
  );
}

export default App;
