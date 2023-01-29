import React from "react";
// import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <a href="/" className="nav-link">
                    Main
                </a>
                {/* <div className="nav-link"> */}
                {/* <Link to="/">Main</Link> */}
                {/* </div> */}
            </li>
            <li className="nav-item">
                <a href="/login" className="nav-link">
                    Login
                </a>
                {/* <div className="nav-link"> */}
                {/* <Link to="/login">Login</Link> */}
                {/* </div> */}
            </li>
            <li className="nav-item">
                <a href="/users" className="nav-link">
                    Users
                </a>
                {/* <div className="nav-link"> */}
                {/* <Link to="/users">Users</Link> */}
                {/* </div> */}
            </li>
        </ul>
    );
};

export default NavBar;
