import React, { useState } from "react";
import { sections } from "../data/menu.json";
import WithAside from "../layout/WithAside";
//import OrderSummary from "./OrderSummary";

const Menu = () => {
  const [orderList, setOrderList] = useState([]);
  const orderEmpty = () => {
    if (Array.isArray(orderList) && orderList.length === 0) {
      return (
        <div className="order-summary-empty">No items in your basket.</div>
      );
    }
  };
  const orderTotal = () => {
    let total = 0;
    orderList.forEach((item) => (total += item.price));

    return total;
  };
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

  const updateOrderList = (e, id, title, price) => {
    let objIndex = orderList.findIndex((obj) => obj.id === id);
    if (objIndex >= 0) {
      setOrderList(
        orderList.map((item) =>
          item.id === id
            ? {
                id: id,
                title: title,
                price: price * (item.quantity + 1),
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
  };
  return (
    <WithAside
      main={
        <section className="menu">
          {sections.map(({ header, tagline, items }) => (
            <section className="panel menu-section" key={header}>
              <div className="menu-section-header">{header}</div>
              <div className="menu-section-subheader">{tagline}</div>
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
                      onClick={(e) => updateOrderList(e, id, title, price)}
                    >
                      Add
                    </button>
                  </div>
                </section>
              ))}
            </section>
          ))}
        </section>
      }
      aside={
        <section className="panel menu-aside">
          <section className="order">
            <h2 className="first">Order Summary</h2>
            <div className="order-summary">
              {orderEmpty()}
              {orderList.map(({ id, title, price, quantity }) => (
                <div className="order-items" key={id}>
                  <div className="order-item-quantity">{quantity}x</div>
                  <div className="order-item-title">{title}</div>
                  <div className="order-item-price">
                    {parseFloat(price).toLocaleString("en-GB", {
                      style: "currency",
                      currency: "GBP",
                    })}
                  </div>
                </div>
              ))}
              <hr />
              <div className="order-total">
                Total:{" "}
                {parseFloat(orderTotal()).toLocaleString("en-GB", {
                  style: "currency",
                  currency: "GBP",
                })}
              </div>
            </div>
          </section>
        </section>
      }
    />
  );
};

export default Menu;
