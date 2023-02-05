import React from 'react';
import s from "./Navbar.module.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <div className={s.navbar_div}>
                <Link to="/profile">Profile</Link>
                <Link to="/messengers">Messages</Link>
                <Link to="/news">News</Link>
                <Link to="/music">Music</Link>
                <Link to="/settings">Settings</Link>
            </div>
        </nav>
    )

}
export default Navbar;