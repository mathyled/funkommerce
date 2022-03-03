import Modal from '../componentsReusable/Modal';
import S from './Login.module.css';

 const Login=()=>{

    return (
      <Modal buttonText='REGISTER'>
        <form className={S.login}>
          <h3>CREATE ACCOUNT</h3> 
          <div className={S.inputGroup}>
            <input type="text" name="name" />
            <input type="password" name="password" />
            <input type="email" name="email" />
          </div>
          <button>Submit</button>
        </form>
      </Modal>
    );
}
export default Login;