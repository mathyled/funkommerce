import { useEffect,useState } from "react";
import{useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {getUsersAdmin} from '../../../../redux/actions/actions';
import {deleteUser, resetPass, Update_User} from '../../../../redux/actions/ActionAdmin';
import Styles from './User.module.css';


const UsersTable=()=>{
    const dispatch = useDispatch();
    const usuario=useSelector((state) => state.user);
    const token=useSelector((state) => state.token);
    const listUser = useSelector((state) => state.admin.users);
    // const [users,setUsers]=useState(listUser)
    const navigate=useNavigate();
    let users=listUser;
    useEffect(()=>{

        if(!usuario || !token){
            alert('usuario no logueado');
            navigate('/');
            window.localStorage.removeItem('loggedUser');
            window.localStorage.removeItem("token");

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

    useEffect(() => {

      users=listUser;
    },[listUser])

    const userDelete=(event)=>{
      event.preventDefault();
      console.log('borrando el user : ',event.target.id);
      dispatch(deleteUser(token,event.target.id,navigate));
    }
    const userUpdate=(event)=>{
      event.preventDefault();
      const userUpdate=users.find(user=>user.id === parseInt(event.target.id));
      // console.log('el user es: ',userUpdate)

      const changeRole=(userUpdate.role === 'ADMIN') ? 'USERS': 'ADMIN';

      // console.log('actualizando el user : ',event.target.id,changeRole);
      // console.log('el id a actualizar es: ',event.target.id);
      dispatch(Update_User(event.target.id,changeRole,token,navigate));

    }

    const resetPassword=(event)=>{
      event.preventDefault();
      // const userUpdate = users.find(
      //   (user) => user.id === parseInt(event.target.id)
      // );
      
      dispatch(resetPass(event.target.id,token,true,navigate))

    }



    return (
      <section className={Styles.userContent}>
        {console.log('se renderizo el user: ',users)}
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
          <div>ResetPass</div>
          { users.map((user, index) => {
            console.log("id:", user);
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
                <button title="Reset Password" id={user.id} onClick={resetPassword}>
                  <img src="/images/reset.svg" alt="reset" id={user.id} />
                </button>
              </>
            );
          })}
        </article>
      </section>
    );
}

export default UsersTable;