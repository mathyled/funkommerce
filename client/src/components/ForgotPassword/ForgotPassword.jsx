import Modal from "./Modal";
import Input from "../componentsReusable/Input";
import Button from "../componentsReusable/Button";
import styles from "../ForgotPassword/ForgotPassword.module.css";
import { validator } from "../../helpers/validatorsForm";
import { useState } from "react";

import {useDispatch} from 'react-redux';
import { resetPassword } from '../../redux/actions/actions';


 const ForgotPassword=()=>{


  const dispatch=useDispatch();
  const [errors,setErrors]=useState({
    email:''
  });
  const [email, setEmail] = useState({
    email: "",
  });

    const sendForm=(event) => {
      event.preventDefault();
      dispatch(resetPassword(email))

    }




    return (<div>


   

      <Modal className={styles.register}>
        <main className={styles.containerForm}>
          <form  className={styles.login} autoComplete="off" onSubmit={sendForm} >
            <h3>RESET PASSWORD</h3>
            <div >
           <p fontFamily= "Secular One">We'll send you a link to reset your password.</p>
            </div>

            <div
              className={styles.inputGroup}
              onChange={(e) => {
                setEmail({
                  ...email,
                  [e.target.name]: e.target.value,
                });
                setErrors(validator(errors, e.target));
              }} 
            >
              <div  className={styles.footer}>
              <Input type="email" name="email" placeholder="email" />
                {errors.email && <span className={styles.err}>{errors.email}</span>}
           
              <button  className={styles.buttonSubmit}>Submit</button>
            </div>

          </div>
          </form>
        </main>
   
    </Modal>
    </div>
  );
};

export default ForgotPassword;
