import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const FullWidth = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main-container-home">{children}</main>
      <Footer />
    </div>
  );
};
export default FullWidth;
