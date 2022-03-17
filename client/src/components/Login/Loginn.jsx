import styles from "./Login.module.css";
import Input from "../componentsReusable/Input";
import Button from "../componentsReusable/Button";

import { validator } from "../../helpers/validatorsForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findUser } from "../../redux/actions/actions";

const Login = ({close,closeValue}) => {
  const user = useSelector((state) => state.user);


  const viewErrorAndInputs = (errores, inputs) => {
    const result = [];

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
  };

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    name: "",
    password: "",
  });

  const dispatch = useDispatch();

  const sendLogin = (event) => {
    event.preventDefault();

    const resultados = viewErrorAndInputs(error,inputs);

     if (resultados.length) {
       alert(resultados[0]);

     } else {
       dispatch(findUser(inputs));
       if (user) {
         
          setInputs({
            email: "",
            password: "",
          });
          event.target.email.value = "";
          event.target.password.value = "";
          close(!closeValue);
       } else {
         alert("User not found");
       }
     } 

  };

  return (
    <div>
      {user ? null : (
        <div  className={styles.login}>
          <main className={styles.container} onSubmit={sendLogin}>
            <form autoComplete="off">
              <h3>LOGIN</h3>
              <div
                className={styles.inputGroup}
                onChange={(e) => {
                  setInputs({
                    ...inputs,
                    [e.target.name]: e.target.value,
                  });
                  setError(validator(error, e.target));
                }}
              >
                <Input type="email" name="email" placeholder="Email" />
                {error.email && <b className={styles.err}>{error.email}</b>}

                <Input type="password" name="password" placeholder="password" />
                {error.password && <b className={styles.err}>{error.password}</b>}

                <Button>Submit</Button>
              </div>
            </form>
          </main>
        </div>
      )}
    </div>
  );
};

export default Login;
