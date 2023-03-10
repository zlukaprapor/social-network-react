import React from "react";
import {NavLink} from "react-router-dom";
import s from "./ContactList.module.css"

const ContactList = ({contacts}) => {


    let contactsList = contacts
        .map((el) =>
            <li>
                <img className={s.img} src={el.src}/>
                <NavLink to={`/messages/${el.id}`}>{el.name}</NavLink>
            </li>)
    return (
        <>
            {contactsList}
        </>

    )
}

export default ContactList