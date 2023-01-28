import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {Link} from "react-router-dom"
import "./Navbar.css"
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h2 className="logo"> LOGO</h2>
        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler">
          <MenuIcon />
        </label>
        <div className="menu">
          <ul className="list">
              <li><Link id="link" to="/">Home</Link></li>
              <li><Link  id="link" to="/add">Add</Link></li>
              <li><Link  id="link" to="/fav">Fav</Link></li>


            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
