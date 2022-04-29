import React from "react";
import { NavLink } from "react-router-dom";
import '../static/css/header.css';

function Header() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">

          <NavLink className="navbar-brand" to="/">
            <ul className="navbar-nav ml-auto">
              <ul style={ { textAlign: "center" }}>
                <img
                className="img-fluid rounded mb-4 mb-lg-0"
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
                <NavLink className="nav-link" to="/submitQuestion">
                  <li className="nav-item">
                    <a className="nav-link text-white">Ask a Question</a>
                  </li>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/questions">
                  <li className="nav-item">
                    <a className="nav-link text-white">View Questions</a>
                  </li>
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  <button type="button" className="btn btn-primary">Login</button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  <button type="button" className="btn btn-secondary">Sign Up</button>
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