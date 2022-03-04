import Modal from "../componentsReusable/Modal";
import Input from "../componentsReusable/Input";
import Button from "../componentsReusable/Button";

import S from './Login.module.css';
import {validator} from '../../helpers/validatorsForm';
import { useState } from "react";

const Login = () => {

  const [inputs,setInputs]=useState({
    email:'',
    password:''
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });

    return (
      <Modal buttonText="Login">
        <main className={S.container}>
          <form autoComplete="off">
            <h3>REGISTER</h3>
            <div className={S.inputGroup} onChange={(e)=>{

              setInputs({
                ...inputs,
                [e.target.name]:e.target.value,
              })
              setError(validator(error,e.target))

            }}>
              <span>Email</span>
              <Input type="email" name="email" placeholder="example@gmail"/>
                {error.email && <b>{error.email}</b>}
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
