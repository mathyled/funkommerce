import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import styles from '../componentsReusable/Generics.module.css';

const Modal=({children})=>{

    const [visible,setVisible]= useState(true);
    let navigate = useNavigate();
    const vista = visible ? 'modal-visible': 'modal-hidden'
    

    return (
      <section>
     
        <main className={styles[vista]}>
          <div className={styles.formButton}>
            <button className={styles.close} onClick={() => {
                 navigate(`/`);
                setVisible(!visible)}}>
              x
            </button>
            {children}
          </div>
        </main>
      </section>
    );
}
export default Modal;