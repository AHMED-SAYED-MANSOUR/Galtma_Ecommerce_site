import React from "react";
import { useState, useEffect } from "react";
import logo from "../NavBar/logo/logo1.png";
import "../NavBar/NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [scrolled, setscrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setscrolled(true);
      } else {
        setscrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="img">
        <img src={logo} alt="logo" />
      </div>
      <ul className={`menu ${scrolled ? "black" : "transparent"}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/protofolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contactus">ContactUS</Link>
        </li>
        
      </ul>
      <div className="buttons">
      <button type="button" className="btn btn-outline-success mr-2">Login</button> 
      <button type="button" className="btn btn-outline-danger">Logout</button>
      </div>
    </>
  );
};

export default NavBar;
