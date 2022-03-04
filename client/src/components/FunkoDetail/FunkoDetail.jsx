

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails,clearCart } from "../../redux/actions/actions";
import { Link } from "react-router-dom";
// import Loading from "./Loading"
import styles from "./FunkoDetail.module.css"
import Loader from "../../assets/Funko.gif"
// const capitalize = (input)=>{
//     return input.charAt(0).toUpperCase() + input.slice(1);
// }

const FunkoDetail = ()=> {
    const { id } = useParams();
    const dispatch = useDispatch();
    const funkoDetails = useSelector(state => state.detail)

    
    useEffect(() => {
        dispatch(getDetails(id))
       dispatch(clearCart())
    },[dispatch])
    
    console.log("H",funkoDetails)
    if(funkoDetails.length < 1){
      return ( <img src={Loader} />)
    }else{
    return (
  <div >
 
      <h1>funkoDetails details</h1>
   
   <p>{funkoDetails[0].attributes.brand}</p>

   <p>{funkoDetails[0].attributes.title}</p>


         <Link to="/">
            <button >Go back</button>
        </Link>
        </div>
    )    
    }
};

export default FunkoDetail;





