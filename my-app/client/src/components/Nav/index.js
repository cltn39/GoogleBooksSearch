import React, { Component } from "react";
import "./Navbar.css";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <ul>
          <li className="logo">
            <a href="/">Google Books</a>
          </li>
          <li className="search"><a href="/search">Search</a></li>
          <li className="saved"><a href="/saved">Saved</a></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
