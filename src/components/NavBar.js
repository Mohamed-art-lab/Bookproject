import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
  
function NavBar () {
    return(
        <div className="nav">
            <div className="nav-logo">Jik<span>oni</span></div>
            <ul className="nav-menu">
                <li>
                    <NavLink exact='true' to="/">Home</NavLink>
                </li><li>
                    <NavLink exact='true' to="/food">Food</NavLink>
                </li><li className="home-button">
                    <NavLink exact='true' to="/add">Add Recipe</NavLink>
                </li>
            </ul>
        </div>
    )
}


export default NavBar;
