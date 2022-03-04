// // import {useTranslation} from "react-i18next";
// // import CardDemo from "./CardDemo"
// import "./Header.css"

// export default function Header(){
//     // const[t,i18n] = useTranslation("global")
//     return(
//     //     <div >
//     //    <h1>{t("header.hello-world")}</h1>
//     //    <br></br>
//     //    <button onClick={()=> i18n.changeLanguage("es")} >ES</button>
//     //    <button onClick={()=> i18n.changeLanguage("en")} >EN</button>
       
//     //    <hr></hr>
//     //     <CardDemo />
//     //     </div>

// <div class="switch-button">
//     <div>
//     <span>EN</span>
//     </div>
//     <div>
//            <input 
//     type="checkbox"
//      name="switch-button"
//       id="switch-label" 
//       class="switch-button__checkbox"
      
//       />
//     <label
//      for="switch-label"
//       class="switch-button__label"

//       ></label> 
//     </div>
//     <div>
//     <span>ES</span>
//     </div>
// </div>

//     )
// };
import { useTranslation } from "react-i18next";
import CardDemo from "./CardDemo"
import "./Header.css"
import { useState } from "react";

export default function Header() {
    const [t, i18n] = useTranslation("global")
    const [state,setState] = useState(false)
    return (
<div class="switch-button">
    
       <h1>{t("header.hello-world")}</h1>
     
    <span>EN</span>
           <input 
            type="checkbox"
            name="switch-button"
            id="switch-label" 
            class="switch-button__checkbox"
             onClick={()=>{
                 let lng = state ? "en" : "es"
                  i18n.changeLanguage(lng)
                  setState(!state)
            } }
      />
    <label
            for="switch-label"
            class="switch-button__label"
      
      ></label> 
      
      <span>ES</span>
      <CardDemo />

      </div >
    )
};
