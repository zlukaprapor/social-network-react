import React from 'react';
import s from "./Header.module.css";
import img from "./pngegg.png"
const Header = () => {
  return(
     <header className={s.header}>
         <img className={s.logo} src={img}/>
         <h1 className={s.text_logo}>WithKaras</h1>
     </header>

  )
}
export default Header;