import React from "react";
import { NavLink } from "react-router-dom";
import "./components/BookNavBar.css"
  
function BookNavBar() {
    return(
        <div className="nav">
            <div className="nav-logo">Book<span>Corner</span></div>
            <ul className="nav-menu">
                <li>
                    <NavLink exact='true' to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink exact='true' to="/books">Books</NavLink>
                </li>
                <li className="add-book-button">
                    <NavLink exact='true' to="/add-book">Add Book</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default BookNavBar;
