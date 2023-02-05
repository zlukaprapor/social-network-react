import React from "react";
import s from "./Post.module.css"
import avatar from "../../Image/pngegg.png"

const Post = ({post, messeges, like}) => {
    return (
        <div className={s.post}>
            <img src={avatar}/>
            <p>post {post}</p>
            <p>
                {messeges}
            </p>
            <div>
                <button>{like}</button>
            </div>
        </div>
    )
}
export default Post