import React, { useEffect, useRef, useState } from "react";
import Chevron from "./Chevron";

const MenuSection = ({ header, tagline, items, addToOrder }) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0");
  const content = useRef(null);
  useEffect(() => {
    if (header === "Starters") {
      toggleSection();
    }
  }, []);

  const menuItemDescription = (description) => {
    if (description) {
      return <div className="menu-item-description">{description}</div>;
    }
  };
  const parseItemId = (id) => {
    const regexStr = id.match(/[a-z]+|[^a-z]+/gi);
    return (
      <span>
        {regexStr[0]}
        <sup>{regexStr[1]}</sup>
      </span>
    );
  };

  const toggleSection = () => {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0" : `${content.current.scrollHeight}px`
    );
  };
  return (
    <section className={`menu-section ${setActive}`}>
      <button
        type="button"
        className="menu-section-header"
        onClick={toggleSection}
      >
        {header}
        <Chevron
          fill={"#fff"}
          className={`menu-section-header-chevron ${setActive}`}
        />
      </button>
      <div
        ref={content}
        id={header}
        style={{ maxHeight: `${setHeight}` }}
        className="menu-section-content"
      >
        <div className="menu-section-subheader">{tagline}</div>
        <section className="menu-section-items">
          {items.map(({ id, title, description, price }) => (
            <section className="menu-section-item" key={id}>
              <div className="menu-item-id">{parseItemId(id)}</div>
              <div className="menu-item-title">{title}</div>
              {menuItemDescription(description)}
              <div className="menu-item-price">
                {parseFloat(price).toLocaleString("en-GB", {
                  style: "currency",
                  currency: "GBP",
                })}
              </div>
              <div className="menu-item-controls">
                <button
                  className="btn"
                  onClick={(e) => addToOrder(e, id, title, price)}
                >
                  Add
                </button>
              </div>
            </section>
          ))}
        </section>
      </div>
    </section>
  );
};
export default MenuSection;
