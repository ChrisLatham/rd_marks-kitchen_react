import React, { Component } from "react";
import { Link, Match } from "@reach/router";

function NavLink({ to, children }) {
  return (
    <Match path={to}>
      {({ match }) => (
        <li className={match ? "nav-item active" : "nav-item"}>
          <Link to={to}>{children}</Link>
        </li>
      )}
    </Match>
  );
}
class Header extends Component {
  render() {
    return (
      <header className="header-container">
        <div className="inner-wrapper">
          <div className="brand-nav-group">
            <section className="brand">Mark's Kitchen</section>
            <section className="phone-number-mobile">
              <a href="tel:01285652601">01285 652 601</a>
            </section>
            <nav className="navigation">
              <ul className="nav-bar">
                <NavLink to={`/`}>Home</NavLink>
                <NavLink to={`/menu`}>Menu</NavLink>
                <NavLink to={`/contact`}>Contact</NavLink>
              </ul>
            </nav>
          </div>
          <section className="phone-number">
            <a href="tel:01285652601">01285 652 601</a>
          </section>
        </div>
      </header>
    );
  }
}
export default Header;
