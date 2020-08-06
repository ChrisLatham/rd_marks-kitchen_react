import React from "react";
import styles from "./MenuItem.module.css";

const MenuItem = ({ items, addToOrder }) => {
  const parseItemId = (id) => {
    const regexStr = id.match(/[a-z]+|[^a-z]+/gi);
    return (
      <span>
        {regexStr[0]}
        <sup>{regexStr[1]}</sup>
      </span>
    );
  };
  const menuItemDescription = (description) => {
    if (description) {
      return <div className={styles.MenuItemDescription}>{description}</div>;
    }
  };
  return (
    <section className="menu-section-items">
      {items.map(({ id, title, description, price }) => (
        <section className={styles.MenuSectionItem} key={id}>
          <div className={styles.MenuItemId}>{parseItemId(id)}</div>
          <div className={styles.MenuItemTitle}>{title}</div>
          {menuItemDescription(description)}
          <div className={styles.MenuItemPrice}>
            {parseFloat(price).toLocaleString("en-GB", {
              style: "currency",
              currency: "GBP",
            })}
          </div>
          <div className={styles.MenuItemControls}>
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
  );
};

export default MenuItem;
