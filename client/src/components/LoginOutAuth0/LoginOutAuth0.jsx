import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {AiOutlineLogout} from "react-icons/ai"
 const LoginOutAuth0 =()=>{
     const {logout} = useAuth0()
    return(
        <div>
           <button 
           onClick={()=> logout()}
           ><AiOutlineLogout /></button>
        </div>
    )
};

export default LoginOutAuth0;