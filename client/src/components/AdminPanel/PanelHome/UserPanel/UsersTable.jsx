import { useEffect } from "react";
import{useDispatch,useSelector} from 'react-redux';
import {getUsersAdmin} from '../../../../redux/actions/actions';
import Styles from './User.module.css';


const UsersTable=()=>{
    const dispatch = useDispatch();
    const usuario=useSelector((state) => state.user);
    const token=useSelector((state) => state.token);
    const users = useSelector((state) => state.admin.users);

    useEffect(()=>{

        if(!usuario || !token){
            alert('usuario no logueado');
        }else{

            console.log('se monto el users');
            if(!users.length){
                dispatch(getUsersAdmin());
            }
        }

        return ()=>{
            console.log('se desmonto los usuarios');
        }
    },[])

    return (
      <section className={Styles.userContent}>
        Soy Usuario
        <article>
          <div>N°</div>
          <div>Name</div>
          <div>LastName</div>
          <div>Email</div>
          <div>Role</div>
          <div>LogedIn</div>
          <div>Delete</div>
          {
              users.map((user,index)=>{
                  return (
                    <>
                      <span>{index}</span>
                      <span>{user.name}</span>
                      <span>{user.lastName}</span>
                      <span>{user.email}</span>
                      <span>{user.role}</span>
                      <span>{user.LogedIn.toString()}</span>
                      <button title='User Delete'>
                          <img src='/images/trash.svg'alt='trash'/>
                      </button>
                    </>
                  );
              })
          }
        </article>
      </section>
    );
}

export default UsersTable;