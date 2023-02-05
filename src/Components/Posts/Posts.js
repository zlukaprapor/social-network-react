import React from "react";
import s from "./Posts.module.css"
import Post from "./Post"

const Posts = () => {
    return (
        <div className={s.posts}>
            <div className={s.new_post}>
                <h2>My posts</h2>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}
export default Posts