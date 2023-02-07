import React from 'react';
import s from "./Navbar.module.css";
import { NavLink} from "react-router-dom";

const Navbar = () => {
    let activeClassName = s.active
    let noActiveClassName = s.noActive
    return (
        <nav className={s.navbar}>
            <div className={s.item}>
                <NavLink to="/myNewsfeed"
                         className={({isActive}) => (
                             isActive ? activeClassName : noActiveClassName)}>
                    My Newsfeed
                </NavLink>
                <NavLink to="/friends"
                         className={({isActive}) => (
                             isActive ? activeClassName : noActiveClassName)}>
                    Friends
                </NavLink>
                <NavLink to="/messages"
                         className={({isActive}) => (
                             isActive ? activeClassName : noActiveClassName)}>
                    Messages
                </NavLink>

                <NavLink to="/music"
                         className={({isActive}) => (
                             isActive ? activeClassName : noActiveClassName)}>
                    Music
                </NavLink>
                <NavLink to="/image"
                         className={({isActive}) => (
                             isActive ? activeClassName : noActiveClassName)}>
                   Image
                </NavLink>
                <NavLink to="/video"
                         className={({isActive}) => (
                             isActive ? activeClassName : noActiveClassName)}>
                    Video
                </NavLink>

            </div>
        </nav>
    )

}
export default Navbar;