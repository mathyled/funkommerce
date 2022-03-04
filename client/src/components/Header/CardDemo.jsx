import {useTranslation} from "react-i18next";

export default function CardDemo(){
    const[t,i18n] = useTranslation("global")
    return(
        <div >
            <div>
             <h5>{t("cardDemo.my-Card")}</h5>
             <span>{t("cardDemo.click-here")}</span>
       <hr></hr>   
            </div>
       
        </div>
    )
};