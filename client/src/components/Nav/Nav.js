import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => (
  <nav className="navbar navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">Home</Link>
    <Link className="navbar-brand" to="/about">About</Link>
  </nav>
);

export default Nav;
