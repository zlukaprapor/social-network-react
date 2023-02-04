import React from "react";
import s from "./Posts.module.css"
const Posts = () => {
    return(
        <div className={s.posts}>
            <div className={s.new_post}>
                <h2>New Posts</h2>
                <textarea></textarea>
                <button>LIKE</button>
                <button>Send</button>
            </div>
            <div className={s.my_post}>
                <h2>My Posts</h2>
                <p>Post 1</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis doloribus earum nisi qui ut. Aliquam impedit incidunt possimus ratione temporibus!</p>
                <p>Post 2</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis doloribus earum nisi qui ut. Aliquam impedit incidunt possimus ratione temporibus!</p>
                <p>Post 1</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis doloribus earum nisi qui ut. Aliquam impedit incidunt possimus ratione temporibus!</p>
            </div>
        </div>
    )
}
export default Posts