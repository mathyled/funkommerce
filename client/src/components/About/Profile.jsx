import Styles from './Profile.module.css'
import {useRef,useEffect} from 'react';

const Profile=({img})=>{
    const divProfile = useRef(null);

    useEffect(()=>{

        console.log(divProfile.current);
        const elemento=divProfile.current;
        elemento.style.backgroundImage=`url(${img})`;
    },[])

    
    return (
      <div ref={divProfile} className={Styles.profile}>
        {console.log("rederiza profile")}
        <div>
          iformacion extendida capo
        </div>
        {console.log("profile renderizado")}
      </div>
    );
}

export default Profile;