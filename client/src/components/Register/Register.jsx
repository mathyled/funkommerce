import Modal from '../componentsReusable/Modal';
import Input from '../componentsReusable/Input';
import Button from '../componentsReusable/Button';
import S from './Register.module.css';
import {validator} from '../../helpers/validatorsForm';
import { useState } from 'react';

 const Register=()=>{

  const [errors,setErrors]=useState({
    name:'',
    lastName:'',
    password:'',
    email:''
  });
  const [inputs, setInputs] = useState({
    name: "",
    lastName: "",
    password: "",
    email: "",
  });

    return (
      <Modal buttonText="REGISTER">
        <main className={S.containerForm}>
          <form className={S.login} autoComplete="off">
            <h3>CREATE ACCOUNT</h3>
            <div
              className={S.inputGroup}
              onChange={(e) => {
                setInputs({
                  ...inputs,
                  [e.target.name]:e.target.value
                })
                setErrors(validator(errors,e.target))
              }}
            >
              <Input type="text" name="name" placeholder="Name" min="4" />
                  {errors.name && <span className={S.err}>{errors.name}</span>}
              <Input type="text" name="lastName" placeholder="lastName" />
                  {errors.lastName && <span className={S.err}>{errors.lastName}</span>}
              <Input type="password" name="password" placeholder="password" />
                  {errors.password && <span className={S.err}>{errors.password}</span>}
              <Input
                type="email"
                name="email"
                placeholder="email"
              />
                  {errors.email && <span className={S.err}>{errors.email}</span>}
            </div>
            <Button>Submit</Button>
          </form>
        </main>
      </Modal>
    );
}


export default Register;