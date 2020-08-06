import React, { useEffect, useRef, useState } from "react";
import Chevron from "./Chevron";

const MenuSection = ({
  header,
  tagline,
  items,
  addToOrder,
  active,
  sectionClick,
  index,
}) => {
  const [setHeight, setHeightState] = useState("0");
  const content = useRef({});
  const scroll = useRef({});

  useEffect(() => {
    setTimeout(() => {
      if (active === "active") {
        scroll.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 500);

    setHeightState(
      active === "active" ? `${content.current.scrollHeight}px` : "0"
    );
  }, [active]);

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
  return (
    <section className={`menu-section ${active}`} id={header} ref={scroll}>
      <button
        type="button"
        className="menu-section-header"
        onClick={() => sectionClick(index)}
      >
        {header}
        <Chevron
          fill={"#fff"}
          className={`menu-section-header-chevron ${active}`}
        />
      </button>
      <div
        ref={content}
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
