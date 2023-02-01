import React from 'react';
import '../App.css';
const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar_div" >
                <a>Profile</a>
                <a>Messages</a>
                <a>News</a>
                <a>Music</a>
                <a>Settings</a>
            </div>
        </nav>
    )

}
export default Navbar