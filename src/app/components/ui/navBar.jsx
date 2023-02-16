import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <div className="nav-link">
                    <Link to="/">Main</Link>
                </div>
            </li>
            <li className="nav-item">
                <div className="nav-link">
                    <Link to="/login">Login</Link>
                </div>
            </li>
            <li className="nav-item">
                <div className="nav-link">
                    <Link to="/users">Users</Link>
                </div>
            </li>
        </ul>
    );
};

export default NavBar;
