import React from "react";
import s from "./Post.module.css"
import avatar from "../../Header/pngegg.png"

const Post = () => {
    return (
        <div className={s.post}>
            <img src={avatar}/>
            <p>post 1</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolorem inventore quo vero? At enim
                odit officia perspiciatis, soluta ullam.
            </p>
            <div>
                <button>Like</button>
            </div>
        </div>
    )
}
export default Post