import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

function NavLink({ to, exact, children }) {
  return (
    <Route path={to} exact={exact}>
      {({ match }) => (
        <li className={match ? "nav-item active" : "nav-item"}>
          <Link to={to}>{children}</Link>
        </li>
      )}
    </Route>
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
                <NavLink to={`/`} exact={true}>
                  Home
                </NavLink>
                <NavLink to={`/menu`} exact={false}>
                  Menu
                </NavLink>
                <NavLink to={`/contact`} exact={false}>
                  Contact
                </NavLink>
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
