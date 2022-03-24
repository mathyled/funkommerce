import {TYPES} from './types';
import axios from 'axios';

const URL_USER = "http://localhost:3001/api";



export const deleteUser=(token,id,navigate)=>{

    return async(dispatch)=>{

        try{

            const config={
                headers: {
                    'Content-Type':"Application/json",
                    "auth-token":token
                },
            }

            const { data } = await axios.delete(`${URL_USER}/user/delete?idUser=${id}`, config);

            console.log('La data del delete es: ',data);
            if (data.msg === "User has been deleted"){
                console.log('se despacha la accion')
              dispatch({
                type: TYPES.DELETE_USER,
                payload: id,
              });

              navigate('/admin')
            }

        }catch(err){
            console.log('error en deleteUser: ',err);
        }

    }


}


export const Update_User=(id,Role,token,delet) => {

    return async(dispatch)=>{

        try{

            const config={
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token": token
                },
            }
            const idUser=parseInt(id)

            const {data}=await axios.put(URL_USER+'/user',{idUser,Role},config);

            // console.log('La data de la actualizacion : ',data);

            dispatch({
                type:TYPES.UPDATE_USER,
                payload:data
            })
            delet('/admin')

        }catch(error){
            console.log('Error de update_USer: ',error);
        }

    }

}

export const resetPass=(idUser,token,flat,navigate)=>{

    return async(dispatch)=>{

        try{

            const config = {
              headers: {
                "Content-Type": "application/json",
                "auth-token": token,
              },
            };


            const {data}=await axios.put(URL_USER+'/user/reset',{idUser:parseInt(idUser),flat},config)

            if(data.msg==="user reset pass "){
                dispatch({
                  types: TYPES.RESET_PASSWORD_ADMIN,
                  payload: idUser,
                });
                navigate('/admin');
            }



        }catch(error){
            console.log('error ResetPass: ',error);
        }

    }

}
