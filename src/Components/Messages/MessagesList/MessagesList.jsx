import React from "react";
import s from "./MessagesList.module.css"

const MessagesList = ({messages}) => {

    let mesList = messages
        .map(el =>
            <li className={(el.poz?`${s.left}`:`${s.right}`)}>
                <text  id={el.id}>{el.text}
                </text>
            </li>
        )
    return (
        <>
            {mesList}
        </>
    )
}

export default MessagesList