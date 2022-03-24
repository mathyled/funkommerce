import React,{useEffect} from "react";
import styles from "./Profile.module.css";
import {useSelector} from "react-redux";
 const Profile =()=>{
  const user = useSelector(state=> state.userGoogle)
  useEffect(()=>{
    console.log("holaaa")
  },[ Object.entries(user).length])
    return(
        <div className={styles.root}>
          <p className={styles.p}>{user?.profileObj?.name}</p>
          <img src={user?.profileObj?.imageUrl} alt={user?.profileObj?.name} className={styles.logo}/>
        </div>
    )
};

export default Profile;