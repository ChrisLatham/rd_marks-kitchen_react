import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const WithAside = ({ main, aside }) => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main-container">{main}</main>
      <aside className="aside-container">{aside}</aside>
      <Footer />
    </div>
  );
};
export default WithAside;
