import React from "react";
import { GoogleLogout } from 'react-google-login';

const LogOut = () =>{
return(
    <div>
       <GoogleLogout
      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={logout}
    ></GoogleLogout>
    </div>
)

};

export default LogOut;

