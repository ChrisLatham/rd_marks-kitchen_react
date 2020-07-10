import React from "react";
import { sections } from "../data/menu.json";

const Menu = () => {
  return (
    <section className="menu">
      {sections.map(({ header, tagline, items }) => (
        <section className="menu-section" key={header}>
          <div className="menu-section-header">{header}</div>
          <div className="menu-section-subheader">{tagline}</div>
          {items.map(({ id, title, description, price }) => (
            <section className="menu-section-item" key={id}>
              <div className="menu-item-id">{id}</div>
              <div className="menu-item-title">{title}</div>
              <div className="menu-item-description">{description}</div>
              <div className="menu-item-price">
                {parseFloat(price).toLocaleString("en-GB", {
                  style: "currency",
                  currency: "GBP",
                })}
              </div>
              <div className="menu-item-controls">
                <button type="button" className="btn">
                  -
                </button>
                <div className="menu-item-controls-quantity">0</div>
                <button type="button" className="btn">
                  +
                </button>
              </div>
            </section>
          ))}
          <div className="menu-section-separator">
            <hr />
          </div>
        </section>
      ))}
    </section>
  );
};

export default Menu;
