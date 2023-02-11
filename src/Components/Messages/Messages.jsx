import React from "react";
import s from "./Messages.module.css"
import ContactList from "./ContactList";
import MessagesList from "./MessagesList";

const Messages = () => {
    return (
        <div className={s.chatroom}>
            <div className={s.contact}>
               <ul>
                   <ContactList />
               </ul>
            </div>
            <div className={s.messages}>
               <ul>
                   <MessagesList />
               </ul>
            </div>
        </div>
    )
}

export default Messages