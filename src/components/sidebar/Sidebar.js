import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./Sidebar.css";



const Sidebar = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
    {toggle ? (
      <div className="Main-sid">
        <div className="icon">
          <FaTimes className="close" onClick={() => setToggle(false)} />
        </div>
        
          <ul className="side-menu">
            <li className="side-item" onClick={()=> setToggle(false)}>
              <NavLink to="/" className="link">
                Home
              </NavLink>
              <NavLink to="about" className="link">
                About
              </NavLink>
              <NavLink to="experience" className="link">
                Experience
              </NavLink>
              <NavLink to="projects" className="link">
                Projects
              </NavLink>
            </li> 
          </ul>
        
      </div>
      ) : <Navbar />}
    </>
  );
};

export default Sidebar;
