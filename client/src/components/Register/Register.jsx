import Modal from '../componentsReusable/Modal';
import Input from '../componentsReusable/Input';
import Button from '../componentsReusable/Button';
import styles from './Register.module.css';
import {validator} from '../../helpers/validatorsForm';
import { useState } from 'react';

import {useDispatch} from 'react-redux';
import { createUser } from '../../redux/actions/actions';


 const Register=()=>{


  const dispatch=useDispatch();
  const [errors,setErrors]=useState({
    name:'',
    password:'',
    lastName:'',
    email:''
  });
  const [inputs, setInputs] = useState({
    name: "",
    password: "",
    lastName: "",
    email: "",
  });

    const sendForm=(event) => {
      event.preventDefault();

      dispatch(createUser(inputs))

    }




    return (
      <Modal buttonText="Register" className={styles.register}>
        <main className={styles.containerForm}>
          <form className={styles.login} autoComplete="off" onSubmit={sendForm}>
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
              {errors.name && <span className={styles.err}>{errors.name}</span>}
              <Input type="text" name="lastName" placeholder="lastName" />
              {errors.lastName && (
                <span className={styles.err}>{errors.lastName}</span>
              )}

              <Input type="password" name="password" placeholder="password" />
              {errors.password && (
                <span className={styles.err}>{errors.password}</span>
              )}
              <Input type="email" name="email" placeholder="email" />
              {errors.email && (
                <span className={styles.err}>{errors.email}</span>
              )}
            </div>
            <Button>Submit</Button>
          </form>
        </main>
      </Modal>
    );
}


export default Register;