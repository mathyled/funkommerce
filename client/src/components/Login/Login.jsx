import Modal from '../componentsReusable/Modal';
import Input from '../componentsReusable/Input';
import Button from '../componentsReusable/Button';
import S from './Login.module.css';

 const Login=()=>{

    return (
      <Modal buttonText="REGISTER">
        <main className={S.containerForm}>
          <form className={S.login}>
            <h3>CREATE ACCOUNT</h3>
            <div className={S.inputGroup}>
              <Span text="Name" />
              <Input type="text" name="name" />
              <Span text="Last-Name" />
              <Input type="text" name="lastName" />
              <Span text="Password" />
              <Input type="password" name="password" />
              <Span text="Email" />
              <Input type="email" name="email" />
            </div>
            <Button>Submit</Button>
          </form>
        </main>
      </Modal>
    );
}

const Span=({text})=>{
  return (
    <span className={S.spanText}>
      {text}
    </span>);
}


export default Login;