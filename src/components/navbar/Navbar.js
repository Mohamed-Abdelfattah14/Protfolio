import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";
import Sidebar from "../sidebar/Sidebar.js";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

  return (
    <>
      {toggle ? <Sidebar /> : (
        <div className="main-nav">
          <nav className="container">
            <div className="logo demo animated">
              <h1 className="text-center mt-1"> M </h1>
            </div>
            <div className="icon">
              <FaBars onClick={() => setToggle(true)} />
            </div>
            <ul className="nav-menu">
              <li className="navItem">
                <NavLink to="/" className="link" exact>
                  Home
                </NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/about" className="link" exact>
                  About
                </NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/experience" className="link" exact>
                  Experience
                </NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/projects" className="link" exact>
                  Projects
                </NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/contact" className="link" exact>
                  Contacts
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      ) }
    </>
  );
};

export default Navbar;
