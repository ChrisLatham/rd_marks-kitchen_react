import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const DoubleAside = ({ middle, left, right }) => {
  return (
    <div className="wrapper">
      <Header />
      <aside className="left-container">{left}</aside>
      <main className="middle-container">{middle}</main>
      <aside className="right-container">{right}</aside>
      <Footer />
    </div>
  );
};
export default DoubleAside;
