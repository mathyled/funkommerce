import S from './Generics.module.css';

const Input =({placeholder, name, type, value, onChange})=>{

    return(
        <input className={S.input} placeholder={placeholder} name={name} type={type} value={value} onChange={onChange}/>
    )

}

export default Input;