import Modal from "../componentsReusable/Modal";
import Input from "../componentsReusable/Input";
import Button from "../componentsReusable/Button";

import styles from './Login.module.css';
import {validator} from '../../helpers/validatorsForm';
import { useState } from "react";

const Login = () => {

  const [inputs,setInputs]=useState({
    name:'',
    password:''
  });
  const [error, setError] = useState({
    name: "",
    password: "",
  });

    return (
      <Modal buttonText="Login" className={styles.login}> 
        <main className={styles.container}>
          <form autoComplete="off">
            <h3>LOGIN</h3>
            <div className={styles.inputGroup} onChange={(e)=>{

              setInputs({
                ...inputs,
                [e.target.name]:e.target.value,
              })
              setError(validator(error,e.target))

            }}>
              <span>Name</span>
              <Input type="text" name="name" placeholder="Name"/>
                {error.name && <b>{error.name}</b>}
              <span>Password</span>
              <Input type="password" name="password" placeholder='password'/>
                {error.password && <b>{error.password}</b>}
                
              <Button>
                Submit
              </Button>
            </div>
          </form>
        </main>
      </Modal>
    );
};

export default Login;
