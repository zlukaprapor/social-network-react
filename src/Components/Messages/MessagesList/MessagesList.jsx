import React from "react";
//import s from "./MessagesList.module.css"

const MessagesList = ({messages}) => {

    let mesList = messages
        .map(el => <li>
                <text id={el.id}>{el.text}</text>
            </li>
        )
    return (
        <div>
            {mesList}
        </div>
    )
}

export default MessagesList