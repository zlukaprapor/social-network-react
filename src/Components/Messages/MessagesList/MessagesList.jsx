import React from "react";
//import s from "./MessagesList.module.css"

const MessagesList = (p) => {

    let messages = [
        {id: 1, text: "Hi"},
        {id: 2, text: "How are you"},
        {id: 3, text: "I'm fine"},
        {id: 4, text: "And you"},
        {id: 5, text: "Good"},
    ]

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