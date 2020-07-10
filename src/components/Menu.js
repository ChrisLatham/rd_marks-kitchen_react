import React, { useState } from "react";
import { sections } from "../data/menu.json";
import WithAside from "../layout/WithAside";
//import OrderSummary from "./OrderSummary";

const Menu = () => {
  const [orderList, setOrderList] = useState([]);
  function updateOrderList(e, id, title, price) {
    let objIndex = orderList.findIndex((obj) => obj.id === id);
    if (objIndex >= 0) {
      setOrderList(
        orderList.map((item) =>
          item.id === id
            ? {
                id: id,
                title: title,
                price: price,
                quantity: (item.quantity += 1),
              }
            : item
        )
      );
    } else {
      setOrderList((orderList) =>
        orderList.concat({
          id: id,
          title: title,
          price: price,
          quantity: 1,
        })
      );
    }
  }
  return (
    <WithAside
      main={
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
                    <button className="btn">-</button>
                    <div className="menu-item-controls-quantity">0</div>
                    <button
                      className="btn"
                      onClick={(e) => updateOrderList(e, id, title, price)}
                    >
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
      }
      aside={
        <div>
          {orderList.map(({ id, title, price, quantity }) => (
            <div key={id}>
              {title}, {price}, {quantity}
            </div>
          ))}
        </div>
      }
    />
  );
};

export default Menu;
