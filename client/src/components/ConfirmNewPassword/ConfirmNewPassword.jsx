import Modal from "./Modal";
import Input from "../componentsReusable/Input";
import styles from "./ConfirmNewPassword.module.css";
import { validator } from "../../helpers/validatorsForm";
import { useState } from "react";
import {useDispatch} from 'react-redux';
import { ConfirmResetPassword } from '../../redux/actions/actions';
import {useNavigate, useParams} from "react-router-dom";

 const ConfirmNewPassword=()=>{
const {token} = useParams()
const navigate = useNavigate()
  const dispatch=useDispatch();
  const [errors,setErrors]=useState({
    password1:'',
    password2:''
  });
  const [input, setInput] = useState({
    password1: "",
    password2:''
  });

    const sendForm=(e) => {
      e.preventDefault();
      dispatch(ConfirmResetPassword(token,input))
      navigate("/sendnewpassword")
    }




    return (<div>


   

      <Modal className={styles.register}>
        <main className={styles.containerForm}>
          <form  className={styles.login} autoComplete="off" onSubmit={sendForm} >
            <h3>RESET PASSWORD</h3>
            <div >
           <p fontFamily= "Secular One">Reset your password.</p>
            </div>

            <div
              className={styles.inputGroup}
              onChange={(e) => {
                setInput({
                  ...input,
                  [e.target.name]: e.target.value,
                });
                setErrors(validator(errors, e.target));
              }} 
            >
              <div  className={styles.footer}>
              <Input type="password" name="password" placeholder="password" />
                {errors.input && <span className={styles.err}>{errors.input}</span>}
                <Input type="password" name="password" placeholder="password" />
                {errors.input && <span className={styles.err}>{errors.input}</span>}
              <button  className={styles.buttonSubmit}>Submit</button>
            </div>

          </div>
          </form>
        </main>
   
    </Modal>
    </div>
  );
};

export default ConfirmNewPassword;
