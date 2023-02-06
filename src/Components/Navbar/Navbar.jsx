import React from 'react';
import s from "./Navbar.module.css";
import { NavLink} from "react-router-dom";

const Navbar = () => {
    let activeClassName = s.active

    return (
        <nav className={s.navbar}>
            <div className={s.item}>
                <NavLink to="/profile"
                         className={({isActive}) => (
                             isActive ? activeClassName : 'inactive')}>
                    Profile
                </NavLink>
                <NavLink to="/messengers"
                         className={({isActive}) => (
                             isActive ? activeClassName : 'inactive')}>
                    Messages
                </NavLink>
                <NavLink to="/news"
                         className={({isActive}) => (
                             isActive ? activeClassName : 'inactive')}>
                    News
                </NavLink>
                <NavLink to="/music"
                         className={({isActive}) => (
                             isActive ? activeClassName : 'inactive')}>
                    Music
                </NavLink>
                <NavLink to="/settings"
                         className={({isActive}) => (
                             isActive ? activeClassName : 'inactive')}>
                    Settings
                </NavLink>
            </div>
        </nav>
    )

}
export default Navbar;