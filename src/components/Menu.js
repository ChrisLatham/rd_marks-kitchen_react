import React, { useState } from "react";
import { sections } from "../data/menu.json";
import DoubleAside from "../layout/DoubleAside";
//import OrderSummary from "./OrderSummary";

const Menu = () => {
  const [orderList, setOrderList] = useState([]);
  const loadOrderList = () => {
    if (orderList.length === 0 && sessionStorage.length > 0) {
      if (JSON.parse(sessionStorage.getItem("session")).length > 0) {
        setOrderList(JSON.parse(sessionStorage.getItem("session")));
      }
    }
    sessionStorage.setItem("session", JSON.stringify(orderList));
    if (Array.isArray(orderList) && orderList.length === 0) {
      return (
        <div className="order-summary-empty">No items in your basket.</div>
      );
    } else {
      return orderList.map(({ id, title, price, quantity }) => (
        <div className="order-items" key={id}>
          <div className="order-item-delete">
            <button
              type="button"
              className="order-item-delete-btn"
              onClick={(e) => removeFromOrderList(e, id, title, price)}
            >
              ✖
            </button>
          </div>
          <div className="order-item-quantity">{quantity}x</div>
          <div className="order-item-title">{title}</div>
          <div className="order-item-price">
            {parseFloat(price).toLocaleString("en-GB", {
              style: "currency",
              currency: "GBP",
            })}
          </div>
        </div>
      ));
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

  const addToOrderList = (e, id, title, price) => {
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
  const removeFromOrderList = (e, id, title, price) => {
    let objIndex = orderList.findIndex((obj) => obj.id === id);
    if (objIndex >= 0 && orderList[objIndex].quantity > 1) {
      setOrderList(
        orderList.map((item) =>
          item.id === id
            ? {
                id: id,
                title: title,
                price: (price / item.quantity) * (item.quantity - 1),
                quantity: (item.quantity -= 1),
              }
            : item
        )
      );
    } else {
      if (orderList.length === 1) {
        setOrderList(() => []);
        sessionStorage.clear();
      } else {
        setOrderList(orderList.filter((item) => item.id !== id));
      }
    }
  };

  return (
    <DoubleAside
      left={
        <section className="menu-navigation">
          <div className="menu-navigation-header">
            <h2 className="first">Quick Links</h2>
          </div>
          <ul className="menu-navigation-items">
            {sections.map(({ header }) => (
              <li key={header} className="menu-navigation-item">
                <a href={`#${header}`}>{header}</a>
              </li>
            ))}
          </ul>
        </section>
      }
      middle={
        <section className="menu">
          {sections.map(({ header, tagline, items }) => (
            <section className="menu-section" id={header} key={header}>
              <button type="button" className="menu-section-header">
                {header}
              </button>
              <div className="menu-section-content">
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
                          onClick={(e) => addToOrderList(e, id, title, price)}
                        >
                          Add
                        </button>
                      </div>
                    </section>
                  ))}
                </section>
              </div>
            </section>
          ))}
        </section>
      }
      right={
        <section className="order-summary">
          <div className="order-summary-header">
            <h2 className="first">Order Summary</h2>
          </div>
          <div className="order-summary-items">
            {loadOrderList()}
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
      }
    />
  );
};

export default Menu;
