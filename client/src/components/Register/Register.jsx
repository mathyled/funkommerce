import { useState } from "react";
import Registered from './Registered';
import styled from "./Register2.module.css";

const Register = () => {
  const [visible, setVisible] = useState(false);

  const vista = visible ? "modal-visible" : "modal-hidden";

  return (
    <section>
      <button className={styled.button} onClick={() => setVisible(!visible)}>
        Sign up
      </button>
      <main className={styled[vista]}>
        <div className={styled.formButton}>
          <button className={styled.close} onClick={() => setVisible(!visible)}>
            x
          </button>
          <Registered close={setVisible} closeValue={visible} />
        </div>
      </main>
    </section>
  );

};
export default Register;
