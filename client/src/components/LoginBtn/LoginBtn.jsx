import GoogleLogin from 'react-google-login';
import React from "react";
import {useDispatch} from "react-redux";
// import styles from "./LoginBtn.module.css";
import {getUserGoogle} from "../../redux/actions/actions"

 const LoginBtn =()=>{
 
    const dispatch = useDispatch()

    const  handlerLogin = (response) => {
        console.log(response);
        dispatch(getUserGoogle(response))
      };


      const handlerFailure = (response) => {
        alert(response);
      }

    return(
        <div style={{margin:"10px"}}>
      <GoogleLogin
    clientId="828216798458-1joseerv1htafe20n0d7eafeef0b6m3s.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={handlerLogin}
    onFailure={handlerFailure}
    cookiePolicy={'single_host_origin'}
  />
        </div>
    )
};

export default LoginBtn;