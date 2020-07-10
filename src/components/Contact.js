import React from "react";
import WithAside from "../layout/WithAside";

const Contact = () => {
  return (
    <WithAside
      main={<h1 className="first">Contact Us</h1>}
      aside={<h1 className="first">Opening Hours</h1>}
    />
  );
};
export default Contact;
