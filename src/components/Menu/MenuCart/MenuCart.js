import React from "react";

const MenuCart = ({ orderList, removeFromOrderList }) => {
  const loadOrderList = () => {
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

  return (
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
  );
};

export default MenuCart;
