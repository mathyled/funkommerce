import axios from "axios";
import { TYPES } from "./types";



export const getFunkos = () => {
  return async (dispatch) => {
    var json = await axios.get(
      "http://localhost:3001/api/producttest"
    );
   // console.log("hola",json)
    return dispatch({
      type: TYPES.GET_FUNKOS,
      payload: json.data,
    });
  };
};

export const addToCart = (id) => {
  // console.log('action',id)
  return {
    type: TYPES.ADD_TO_CART,
    payload: id,
  };
}; 

export const sumInCart = (id) => {
  //console.log(id)
  return {
    type: TYPES.SUM_IN_CART,
    payload: id,
  };
}; 

export const deleteFromCart =
  (id, all = false) =>
  (dispatch) => {
    //console.log("holaJ",all)
    return all
      ? dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id })
      : dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
  };


export const clearCart = () => (dispatch)=>{
  dispatch({ type: TYPES.CLEAR_CART });
};

export const searchFunkos = (name) => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`https://the-funko-api.herokuapp.com/api/v1/items/${name}`)
      dispatch({type: TYPES.SEARCH_FUNKOS, payload: data.data})
    }
    catch(error) {
      dispatch({type: TYPES.SEARCH_FUNKOS, payload: []})
      console.log("error in action searchFunko")
      console.log(error)
    }
  }
}

// export const changeTextButton =
//   (id, text) =>
//   (dispatch) => {
//     return  dispatch({ type: TYPES.CHANGE_TEXT_BUTTON, payload:[text,id] });
//   };

export const orderFunkos = (order) => {
  return {type: TYPES.ORDER_FUNKOS, payload: order}
}

//ACTIONS FOR CREATE USER 
export const createUser=(name,lastName,email,userName,password) => {

  return async (dispatch)=>{

    try{

      //Espera por crear un ususario
      await axios.post('http:url.com',{name,lastName,email,userName,password});

      dispatch({
          type:TYPES.CREATE_USER,
        })

    }catch(error){

      console.log('CREATEUSER__ACTION: ',error)

    }
  }
}

  //ACTION PARA VERIFICAR SI EL USUARIO TIENE UNA CUENTA

  export const findUser=(userName,password)=>{

    return async(dispatch)=>{

      try{

        const response=await axios.post('http:url.com',{userName,password});

        dispatch({
           type:TYPES.GET_USER,
           payload:response
        })


      }catch(error){

        console.log('FINDUSER_ACTION: ',error);
      }

    }

  }

export const getDetails = (id)=>{
    return async (dispatch) => {
        var json = await axios.get(
           `https://the-funko-api.herokuapp.com/api/v1/items/${id}?page=7`);
        return dispatch({
            type: TYPES.GET_FUNKO_DETAIL,
            payload: json.data.data
        })
    
      }
};

export const filterCategories=(payload) =>{
  return {
      type: TYPES.HANDLE_CATEGORIES,
      payload
  }
}

export const filterBrands=(payload) =>{
  return {
      type: TYPES.HANDLE_BRANDS,
      payload
  }
}

export const filterLicense=(payload) =>{
  return {
      type: TYPES.HANDLE_LICENSE,
      payload
  }
}
