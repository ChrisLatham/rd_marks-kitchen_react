import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const WithAside = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main-container">{props.main}</main>
      <aside className="aside-container">{props.aside}</aside>
      <Footer />
    </div>
  );
};
export default WithAside;
