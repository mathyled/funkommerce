import S from './Generics.module.css';

const Input =({placeholder,name,type})=>{

    return(
        <input className={S.input} placeholder={placeholder} name={name} type={type}/>
    )

}

export default Input;