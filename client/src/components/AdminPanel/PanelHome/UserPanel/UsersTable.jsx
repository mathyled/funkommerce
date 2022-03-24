import { useEffect } from "react";
import{useDispatch,useSelector} from 'react-redux';
import {getUsersAdmin} from '../../../../redux/actions/actions';
import {deleteUser, Update_User} from '../../../../redux/actions/ActionAdmin';
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
              console.log('se traen los useuarios!');
                dispatch(getUsersAdmin(token,usuario.email));
            }
        }

        return ()=>{
            console.log('se desmonto los usuarios');
        }
    },[])


    const userDelete=(event)=>{
      event.preventDefault();
      console.log('borrando el user : ',event.target.id);
      // dispatch(deleteUser(token,event.target.id));
    }
    const userUpdate=(event)=>{
      event.preventDefault();
      const userUpdate=users.find(user=>user.id === parseInt(event.target.id));
      console.log('el user es: ',userUpdate)

      console.log('actualizando el user : ',event.target.id);
      // dispatch(Update_User(event.target.id,userUpdate.role,token));

    }



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
          <div>Update</div>
          {users.map((user, index) => {
            console.log('id:',user.id)
            return (
              <>
                <span className={Styles.span}>{index}</span>
                <span  className={Styles.span}>{user.name}</span>
                <span  className={Styles.span}>{user.lastName}</span>
                <span  className={Styles.span}>{user.email}</span>
                <span className={Styles.span}>{user.role}</span>
                <span className={Styles.span}>{user.LogedIn.toString()}</span>
                <button title="User Delete" id={user.id} onClick={userDelete}>
                  <img src="/images/trash.svg" alt="trash" id={user.id} />
                </button>
                <button title="User Update" id={user.id} onClick={userUpdate}>
                  <img src="/images/update.svg" alt="trash" id={user.id} />
                </button>
              </>
            );
          })}
        </article>
      </section>
    );
}

export default UsersTable;