
import { useState } from "react";
import Login from './Loginn';

import S from "./Loginn.module.css";

const Modal = () => {
  const [visible, setVisible] = useState(false);

  const vista = visible ? "modal-visible" : "modal-hidden";

  return (
    <section>
      <button className={S.button} onClick={() => setVisible(!visible)}>
        Login
      </button>
      <main className={S[vista]}>
        <div className={S.formButton}>
          <button className={S.close} onClick={() => setVisible(!visible)}>
            x
          </button>
          <Login close={setVisible} closeValue={visible}/>
        </div>
      </main>
    </section>
  const sendLogin = (event) => {
    event.preventDefault();
    dispatch(findUser(inputs));


  }

  );
};
export default Modal;
