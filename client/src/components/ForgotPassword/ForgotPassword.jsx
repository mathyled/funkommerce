import Modal from "./Modal";
import Input from "../componentsReusable/Input";
import Button from "../componentsReusable/Button";
import styles from "../ForgotPassword/ForgotPassword.module.css";
import { validator } from "../../helpers/validatorsForm";
import { useState } from "react";

import {useDispatch} from 'react-redux';
import { createUser } from '../../redux/actions/actions';


 const ForgotPassword=()=>{


  const dispatch=useDispatch();
  const [errors,setErrors]=useState({
    email:''
  });
  const [inputs, setInputs] = useState({
    email: "",
  });

    const sendForm=(event) => {
      event.preventDefault();
      dispatch(createUser(inputs))

    }




    return (<div>


   

      <Modal className={styles.register}>
        <main className={styles.containerForm}>
          <form  className={styles.login} autoComplete="off" onSubmit={sendForm} >
            <h3>RESET PASSWORD</h3>
            <div >
           <p font-family= "Secular One">We'll send you a link to reset your password.</p>
            </div>

            <div
              className={styles.inputGroup}
              onChange={(e) => {
                setInputs({
                  ...inputs,
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
