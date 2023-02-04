import React from 'react';
import s from "./Profile.module.css";
const Profile = () => {
    return(
        <div className={s.profile} >
            <img className={s.img}
                 src={"https://www.w3schools.com/css/img_5terre_wide.jpg"}/>
            <img className={s.img_avatar}
                 src={"https://avatars.mds.yandex.net/i?id=a7efe782f82f5a96cdb44fd3cd337678d53659e1-8228018-images-thumbs&n=13"}/>
            <text className={s.text}>Oleksii Zluka</text>
        </div>
    )

}
export default Profile;