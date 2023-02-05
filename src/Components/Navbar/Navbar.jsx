import React from 'react';
import s from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <div className={s.navbar_div}>
                <a href="/profile">Profile</a>
                <a href="/messengers">Messages</a>
                <a href="/news">News</a>
                <a href="/music">Music</a>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    )

}
export default Navbar;