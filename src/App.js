import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Home path="/" />
      <Menu path="menu" />
      <Contact path="contact" />
    </Router>
  );
}

export default App;
