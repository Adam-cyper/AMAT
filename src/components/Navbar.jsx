import React from "react";
import { useRef } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Navbar() {

  const refNav = useRef();
  const  showNav = () =>{
    refNav.current.classList.toggle('nav--active')
  }
  return (
    <>
      <div className="nav-contianer">
        <h4 className="logo">Logo here</h4>
        <div className="nav-bar">
          <nav className="navbar" ref={refNav}>
            <ul className="nav">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/Servic"}>Service</NavLink>
              </li>
              <li>
                <NavLink to={"/Product"}>Product</NavLink>
              </li>
              <li>
                <NavLink to={"/Hub Support"}>Hub Support</NavLink>
              </li>
              <li>
                <NavLink to={"/Contact"}>Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="btn" onClick={showNav}>
          <FaBars />
        </div>
      </div>
    </>
  );
}

export default Navbar;
