import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Profile.module.css"
 const Profile =()=>{
     const {user} = useAuth0()
    return(
        <div className={styles.root}>
          <p className={styles.p}>{user.nickname}</p>
          <img src={user.picture} className={styles.logo}/>
        </div>
    )
};

export default Profile;