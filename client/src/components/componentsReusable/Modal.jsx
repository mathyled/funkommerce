import {useState} from 'react';

import S from './Generics.module.css';

const Login=({children,buttonText, className})=>{

    const [visible,setVisible]= useState(false);

    const vista = visible ? 'modal-visible': 'modal-hidden'
    

    return(
        <section>
            <button className={className} onClick={()=>setVisible(!visible)}>
                {buttonText}
            </button>
            <main className={S[vista]}>
                <button className={S.close} onClick={()=>setVisible(!visible)}>
                    x
                </button>
                {children}
            </main>

        </section>
    )
}
export default Login;