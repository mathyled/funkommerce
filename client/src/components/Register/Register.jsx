import Modal from "../componentsReusable/Modal";
import Input from "../componentsReusable/Input";
import Button from "../componentsReusable/Button";
import styles from "./Register.module.css";
import { validator } from "../../helpers/validatorsForm";
import { useState } from "react";

const Register = () => {
  const [errors, setErrors] = useState({
    name: "",
    password: "",
    userName: "",
    email: "",
  });
  const [inputs, setInputs] = useState({
    name: "",
    password: "",
    userName: "",
    email: "",
  });

  return (
    <Modal buttonText="Sign up" className={styles.register}>
      <form className={styles.containerForm}>
        <main className={styles.login} autoComplete="off">
          <h3 className={styles.title}>CREATE ACCOUNT</h3>
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

            <Input type="email" name="email" placeholder="email" />
            {errors.email && <span className={styles.err}>{errors.email}</span>}

            <Input type="password" name="password" placeholder="password" />
            {errors.password && (
              <span className={styles.err}>{errors.password}</span>
            )}
            <div className={styles.buttonSubmit}>
              <Button>Submit</Button>
            </div>
          </div>
        </main>
      </form>
    </Modal>
  );
};

export default Register;
