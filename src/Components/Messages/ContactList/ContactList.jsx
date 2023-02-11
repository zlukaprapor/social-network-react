import React from "react";
import {NavLink} from "react-router-dom";
//import s from "./ContactList.module.css"

const ContactList = (p) => {

    let contacts=[
        {id:1, name:"Sara"},
        {id:2, name:"Mery"},
        {id:3, name:"Alex"},
        {id:4, name:"Any"},
        {id:5, name:"Conan"},
        {id:6, name:"Gleb"},

    ]
    let contactsList = contacts
        .map((el) => <li><NavLink to={`/messages/${el.id}`}>{el.name}</NavLink></li> )
    return (
        <div>
            {contactsList}
        </div>
    )
}

export default ContactList