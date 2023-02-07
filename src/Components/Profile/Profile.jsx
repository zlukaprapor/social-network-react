import React from 'react';
import s from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.card}>
                <img className={s.photo} src={require("../../Image/user/user-1.jpg")}/>
                <a className={s.text}>Sara Cruiz</a>
                <a className={s.text}>
                    <i>   12,345  followers</i>
                </a>
            </div>




        </div>
    )

}
export default Profile;