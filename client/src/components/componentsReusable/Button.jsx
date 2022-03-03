import S from './Modal.module.css'

export default function Button({children,click}){
    return(
            <button onClick={click} className={S.button}>
                {children}
            </button>
    )
};