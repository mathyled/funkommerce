import S from './Generics.module.css';

const Input =({placeholder, name, type, value, step, onChange})=>{

    return(
        <input 
        className={S.input} 
        placeholder={placeholder} 
        name={name} 
        type={type} 
        value={value} 
        step={step}
        onChange={onChange}
        />
    )

}

export default Input;