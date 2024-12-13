// eslint-disable-next-line no-unused-vars
import React from "react";
import SearchBar from "./SearchBar";
import { Button } from "react-bootstrap";

const Sidebar = () => (
  <aside className="col col-2">
    <nav className="navbar navbar-expand-md fixed-left justify-content-between">
      <div className="container flex-column align-items-start">
        <a className="navbar-brand" href="index.html">
          <img
            src="/assets/logo/logo.png"
            alt="Spotify Logo"
            width="131"
            height="40"
          />
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <ul>
              <li>
                <Button
                  className="nav-item nav-link d-flex align-items-center"
                  href="#"
                >
                  <i className="bi bi-house-door-fill"></i>&nbsp; Home
                </Button>
              </li>
              <li>
                <Button
                  className="nav-item nav-link d-flex align-items-center"
                  href="#"
                >
                  <i className="bi bi-book-fill"></i>&nbsp; Your Library
                </Button>
              </li>
              <li>
                <SearchBar /> {/* Barra di ricerca inserita nella Sidebar */}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="nav-btn">
        <Button className="btn signup-btn">Sign Up</Button>
        <Button className="btn login-btn">Login</Button>
      </div>
      <span>
        <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
      </span>
    </nav>
  </aside>
);

export default Sidebar;
