import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <ul>
              <ul style={ { textAlign: "center" }}>
                <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src={ require("../static/images/brain_logo.png") }
                alt=""
                width="100" height="50"
                />
                <p>Scientia Omnium</p>
              </ul>
            </ul>
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <button type="button" class="btn btn-primary">Primary</button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;