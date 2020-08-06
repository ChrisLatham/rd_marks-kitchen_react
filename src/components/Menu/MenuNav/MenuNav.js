import React from "react";
import { sections } from "../../../data/menu.json";

const MenuNav = ({ sectionClick }) => {
  return (
    <section className="menu-navigation">
      <div className="menu-navigation-header">
        <h2 className="first">Quick Links</h2>
      </div>
      <ul className="menu-navigation-items">
        {sections.map(({ header }, index) => (
          <li key={index} className="menu-navigation-item">
            <button type="button" onClick={() => sectionClick(index)}>
              {header}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MenuNav;
