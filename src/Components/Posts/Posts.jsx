import React from "react";
import s from "./Posts.module.css"
import Post from "./Post"

const Posts = () => {

    const test = {
        1: "A: Hi, how are you doing?",
        2: "I'm fine. How about yourself?",
        3: "I'm pretty good. Thanks for asking",
        4: "No problem. So how have you been?",


    }
    return (
        <div>
            <div className={s.new_post}>
                <h2>My posts</h2>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post messeges={test["1"]} post={"1"} like={'0'}/>
                <Post messeges={test["2"]} post={"2"} like={'45'}/>
                <Post messeges={test["3"]} post={"3"} like={'3434'}/>
                <Post messeges={test["4"]} post={"4"} like={'230'}/>
            </div>
        </div>
    )
}
export default Posts