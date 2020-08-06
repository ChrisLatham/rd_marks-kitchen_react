import React, { Component } from "react";
import { sections } from "../../data/menu.json";
import DoubleAside from "../../layout/DoubleAside";
import MenuSection from "./MenuSection/MenuSection";
import MenuNav from "./MenuNav/MenuNav";
import MenuCart from "./MenuCart/MenuCart";

class Menu extends Component {
  state = {
    orderList: [],
    activeSection: 0,
  };
  setActiveSection(id) {
    this.setState({ activeSection: id });
  }
  setOrderList(input) {
    this.setState({
      orderList: input,
    });
  }

  render() {
    const sectionClick = (id) => {
      this.setActiveSection(this.state.activeSection === id ? "" : id);
    };

    const addToOrderList = (e, id, title, price) => {
      let prevState = this.state.orderList;
      let objIndex = prevState.findIndex((obj) => obj.id === id);

      if (objIndex >= 0) {
        prevState[objIndex].quantity += 1;
        prevState[objIndex].price = price * prevState[objIndex].quantity;
      } else {
        prevState.push({ id: id, title: title, price: price, quantity: 1 });
      }
      this.setOrderList(prevState);
    };
    const removeFromOrderList = (e, id) => {
      let prevState = this.state.orderList;
      let objIndex = prevState.findIndex((obj) => obj.id === id);
      let prevQuantity = prevState[objIndex].quantity;
      let prevPrice = prevState[objIndex].price;

      if (objIndex >= 0 && prevState[objIndex].quantity > 1) {
        prevState[objIndex].quantity -= 1;
        prevState[objIndex].price =
          (prevPrice / prevQuantity) * prevState[objIndex].quantity;
        this.setOrderList(prevState);
      } else {
        if (prevState.length === 1) {
          this.setState({ orderList: [] });
          sessionStorage.clear();
        } else {
          prevState.splice(objIndex, 1);
          this.setOrderList(prevState);
        }
      }
    };
    return (
      <DoubleAside
        left={<MenuNav sectionClick={sectionClick} />}
        middle={
          <section className="menu">
            {sections.map(({ header, tagline, items }, index) => (
              <MenuSection
                key={index}
                header={header}
                tagline={tagline}
                items={items}
                active={this.state.activeSection === index ? "active" : ""}
                sectionClick={sectionClick}
                addToOrder={addToOrderList}
                index={index}
              />
            ))}
          </section>
        }
        right={
          <MenuCart
            orderList={this.state.orderList}
            removeFromOrderList={removeFromOrderList}
          />
        }
      />
    );
  }
}

export default Menu;
