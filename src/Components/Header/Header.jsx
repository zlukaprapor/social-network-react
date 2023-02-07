import React from 'react';
import s from "./Header.module.css";
import img from "../../Image/logo.png"

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo} src={img}/>
        </header>

    )
}
export default Header;