import {TYPES} from './types';
import axios from 'axios';

const URL_USER = "http://localhost:3001/api/";



export const deleteUser=(token)=>{

    return async(dispatch)=>{

        try{

            const config={
                headers: {
                    'Content-Type':"Application/json",
                    Authorization:`Bearer ${token}`
                }
            }

            const {data}=await axios.delete(URL_USER,config);

            console.log('La data del delete es: ',data);
            dispatch({
                type:TYPES.DELETE_USER,
                payload:data
            })


        }catch(err){
            console.log('error en deleteUser: ',err);
        }

    }


}


export const Update_User=(email,token) => {

    return async(dispatch)=>{

        try{

            const config={
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                data:{email}
            }

            const {data}=await axios.put(URL,config);

            console.log('La data de la actualizacion : ',data);

            dispatch({
                type:TYPES.UPDATE_USER,
                payload:data
            })


        }catch(error){
            console.log('Error de update_USer: ',error);
        }

    }

}