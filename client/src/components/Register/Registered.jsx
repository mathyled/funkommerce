import Input from "../componentsReusable/Input";
import Button from "../componentsReusable/Button";
import styles from "./Register.module.css";
import { validator } from "../../helpers/validatorsForm";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/actions/actions";
import {useNavigate} from 'react-router-dom';
import axios from "axios";



const Register = ({close,closeValue}) => {
    const user = useSelector((state) => state.user);
    
    const navigate=useNavigate();
    const deleteInputs=(event)=>{
        setInputs({
          name: "",
          password: "",
          lastName: "",
          email: "",
        });
        event.target.name.value = "";
        event.target.password.value = "";
        event.target.lastName.value = "";
        event.target.email.value = "";
    
    }

    const viewErrorAndInputs=(errores,inputs) => {

        const result=[];

        for (let index in errores) {
          // console.log(error[index]);
          if (errores[index]) {
            result[0] = "Existen errores";
          }
        }

        for (let index in inputs) {
          // console.log(input[index]);
          if (!inputs[index]) {
            result[0] = "Faltan campos";
          }
        }

        return result;

    }


  const dispatch = useDispatch();
  const [errors, setErrors] = useState({
        name: "",
        password: "",
        lastName: "",
        email: "",
  });
  const [inputs, setInputs] = useState({
    name: "",
    password: "",
    lastName: "",
    email: "",
  });

  const sendForm = async(event) => {
    event.preventDefault();

    const resultados = viewErrorAndInputs(errors, inputs);
        
    if (resultados.length) {
      alert(resultados[0]);
    } else {

      let verification = await axios.post(
        "http://localhost:3001/api/user/signUp",
        inputs
      );
      console.log(verification)
      if (verification.data.message) {
        alert(verification.data.message);
      } else {
        // dispatch(createUser(inputs));
        // deleteInputs(ev
        deleteInputs(event);
        close(!closeValue);
        navigate('/sendmail');
        alert(verification.data.msg);
      }
    }

    } 

  return (
    <div>
      {user ? null : (
        <div  className={styles.register}>
          <main className={styles.containerForm}>
            <form
              className={styles.login}
              autoComplete="off"
              onSubmit={sendForm}
            >
              <h3>CREATE ACCOUNT</h3>
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
                <Input type="text" name="name" placeholder="Name" min="4" />
                {errors.name && (
                  <span className={styles.err}>{errors.name}</span>
                )}
                <Input type="text" name="lastName" placeholder="lastName" />

                {errors.lastName && (
                  <span className={styles.err}>{errors.lastName}</span>
                )}

                <Input type="email" name="email" placeholder="email" />
                {errors.email && (
                  <span className={styles.err}>{errors.email}</span>
                )}

                <Input type="password" name="password" placeholder="password" />
                {errors.password && (
                  <span className={styles.err}>{errors.password}</span>
                )}
                <div className={styles.buttonSubmit}>
                  <Button>Submit</Button>
                </div>
              </div>
            </form>
          </main>
        </div>
      )}
    </div>
  );
};

export default Register;