import styles from "./Login.module.css";
import Modal from "../componentsReusable/Modal";
import Input from "../componentsReusable/Input";
import Button from "../componentsReusable/Button";

import { validator } from "../../helpers/validatorsForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findUser } from "../../redux/actions/actions";

const Login = () => {
  const user = useSelector((state) => state.user);

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
    dispatch(findUser(inputs));
  };

  return (
    <div>
      {console.log('before- ',user)}

      {user ? 
        null
       :
      (
        <Modal buttonText="Login" className={styles.login}>
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
                {error.email && <b>{error.email}</b>}

                <Input type="password" name="password" placeholder="password" />
                {error.password && <b>{error.password}</b>}

                <Button>Submit</Button>
              </div>
            </form>
          </main>
        </Modal> )}
      {console.log(user)}
    </div>
  );
};

export default Login;
