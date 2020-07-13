import React from "react";

import FullWidth from "../layout/FullWidth";

const Home = () => {
  return (
    <FullWidth>
      <h1 className="first">Welcome</h1>
      <div className="menu-section-subheader">
        We offer elegant dishes and fine dining to provide you with the most
        authentic experience of Chinese cuisine.
      </div>
      <img
        src={require("../images/hygiene-rating.png")}
        alt="Hygiene Rating 5 out of 5 - Very Good"
      />
    </FullWidth>
  );
};
export default Home;
