import React from 'react';
import s from "./Navbar.module.css";
const Navbar = () => {
    return(
        <nav className={s.navbar}>
            <div className={s.navbar_div} >
                <a href="/#">Profile</a>
                <a href="/#">Messages</a>
                <a href="/#">News</a>
                <a href="/#">Music</a>
                <a href="/#">Settings</a>
            </div>
        </nav>
    )

}
export default Navbar;