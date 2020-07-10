import React from "react";

const OrderSummary = ({ id, title, price, quantity }) => {
  console.log(id, title, price, quantity);
  return (
    <section className="orders-list">
      <h1 className="first">Your Order</h1>
      <div id="OrderList">
        <div key={id}>
          {title}, {price}, {quantity}
        </div>
      </div>
    </section>
  );
};
export default OrderSummary;
