import React from "react";
import "./App.css";
import Home from "./components/Home";
import Menu from "./components/Menu/Menu";
import Contact from "./components/Contact";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/menu" component={Menu} />
      <Route path="/contact" component={Contact} />
    </BrowserRouter>
  );
}

export default App;
