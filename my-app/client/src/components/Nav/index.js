import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <ul>
          <li className="logo">
            <a href="/books">Google Books</a>
          </li>
          <li className="search"><Link to={"/books"}>Search</Link></li>
          <li className="saved"><Link to={"/Saved"}>Saved</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
