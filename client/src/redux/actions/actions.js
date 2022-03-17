import axios from "axios";
import { TYPES } from "./types";


export const getFunkos = () => {
  return async (dispatch) => {
    var json = await axios.get("http://localhost:3001/api/product");
    // console.log("hola",json)
    return dispatch({
      type: TYPES.GET_FUNKOS,
      payload: json.data,
    }); 
  };
};

export const addToCart = (id) => {
  
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

export const clearCart = () => (dispatch) => {
  dispatch({ type: TYPES.CLEAR_CART });
};

export const searchFunkos = (name) => {
  return async (dispatch) => { 
    try {
      const { data } = await axios.get(
        `http://localhost:3001/api/product/s?name=${name}`
      );
      dispatch({ type: TYPES.SEARCH_FUNKOS, payload: data });
    } catch (error) {
      dispatch({ type: TYPES.SEARCH_FUNKOS, payload: [] });
      console.log("error in action searchFunko");
      console.log(error);
    }
  };
};

export const orderFunkos = (order) => {

  return {type: TYPES.ORDER_FUNKOS, payload: order}
}


//ACTIONS FOR CREATE USER
export const createUser = ({name, lastName, email, password}) => {
  return async (dispatch) => {

    const user = {
      name,
      lastName,
      email,
      password,
    };




    try {
      //Espera por crear un ususario
      const response = await axios.post(
        "http://localhost:3001/api/user/signUp",
        user
      );
//console.log(response)
      if (response.data) {
        dispatch({
          type: TYPES.CREATE_USER,
          payload: {user:response.data.user,token:response.data.token},
        });
        //console.log(response)
        alert(response.data.msg)

        
      } else {
        alert("User not found");
      }
    } catch (error) {
      console.log("CREATEUSER__ACTION: ", error);
    }
  };
};

//ACION PARA BUSCAR EL USER EN EL LOCAL STORAGE:
export const salveUser = () => {

  const user = window.localStorage.getItem("loggedUser");
  const token = window.localStorage.getItem("token");
 
  if(user){

    return {
      type: TYPES.FIND_USER,
      payload: { user: user, token: token },
    };
  }

  return {
    type:TYPES.FIND_USER,
    payload:{user:null,token:null}
  }
};

//PAra deslogearnos:

export const logoutUser=()=>{

  return {
    type:TYPES.LOGOUT_USER,
    payload:{user:null,token:null}
  }
}




//ACTION PARA VERIFICAR SI EL USUARIO TIENE UNA CUENTA


export const findUser = ({email, password}) => {

  console.log(email,password)
  return async (dispatch) => {


    try {

      const config={
        email:email,
        password:password
      }
     // console.log('118- ',config)

      const { data } = await axios.post(
        "http://localhost:3001/api/user/signIn",
        config
      );
      

      if (data) { 
        dispatch({
          type: TYPES.GET_USER,
          payload: {user:data.user,token:data.token},
        });
        alert(data.msg);
        console.log(data)
      } else {
        alert("algo paso");
      }
    } catch (error) {
      console.log("FINDUSER_ACTION: ", error);
    }
  };
};

// export const logOutUser = function () =>{
//   return {
//     type: 
//   }
// }


export const getDetails = (id) => {
  console.log(id)
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/api/product/${id}`);
      console.log(data)
      dispatch({ type: TYPES.GET_FUNKO_DETAIL, payload: data });
    } catch (error) {
      dispatch({ type: TYPES.GET_CATEGORIES, payload: [] });
      console.log("error in action getDetails", error);
    }
  };
};
// ACTION PARA FILTRADO
export const getCategories = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/api/category`);
      //  console.log(data)
      dispatch({ type: TYPES.GET_CATEGORIES, payload: data });
    } catch (error) {
      dispatch({ type: TYPES.GET_CATEGORIES, payload: [] });
      console.log("error in action searchFunko");
      console.log(error);
    }
  };
};

//LICENCIA INVALIDA DE MOMENTO
export const getLicense = () => {
  // return {
  //   type: TYPES.GET_LICENSE,
  // };
  return async ( dispatch )=> {
    try {
      const {data} = await axios.get(`http://localhost:3001/api/license`);
     // console.log(data)
      dispatch({type: TYPES.GET_LICENSE, payload: data})
    }
    catch(error) {
      dispatch({type: TYPES.GET_LICENSE, payload: []})
      console.log("error in action searchFunko",error)
      // console.log(error)
    }
  }
};

export const getBrand = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/api/brand`);
      //  console.log(data)
      dispatch({ type: TYPES.GET_BRANDS, payload: data });
    } catch (error) {
      dispatch({ type: TYPES.GET_BRANDS, payload: [] });
      console.log("error in action searchFunko");
      console.log(error);
    }
  };
};

export const filterCategories = (payload) => {
 // console.log("pp", payload);
  return {
    type: TYPES.HANDLE_CATEGORIES,
    payload,
  };
};

export const filterBrands = (payload) => {
  //console.log("pp",payload)
  return {
    type: TYPES.HANDLE_BRANDS,
    payload,
  };
};

export const filterLicense = (payload) => {
  return {
    type: TYPES.HANDLE_LICENSE,
    payload,
  };
};

export const getReviews = (payload) => {
  return {
    type: TYPES.GET_REVIEWS,
    payload,
  };
};

export const modifiedTotal = () => {
  return {
    type: TYPES.MODIFIED_TOTAL,
  };
};
 
export const changePage = (number) =>{
  return{
    type: TYPES.CHANGE_PAGE,
    payload: number
  }
}

export const createFunko = (funko) => {
  return async (dispatch) => {
    try {
      const { data } = axios.post("http://localhost:3001/", funko);
      dispatch({
        type: TYPES.CREATE_FUNKO,
        payload: data,
      });
      console.log(data);
    } catch (e) {
      console.log("Error in createFunko");
      console.log(e);
    }
  };
};

export const createLicense = (license) => {
  return async (dispatch) => {
    try {
      const { data } = axios.post("http://localhost:3001/", license);
      dispatch({
        type: TYPES.CREATE_LICENSE,
        payload: data,
      });
      console.log(data);
    } catch (e) {
      console.log("Error in createLicense");
      console.log(e);
    }
  };
};

export const createBrand = (brand) => {
  return async (dispatch) => {
    try {
      const { data } = axios.post("http://localhost:3001/", brand);
      dispatch({
        type: TYPES.CREATE_BRAND,
        payload: data,
      });
      console.log(data);
    } catch (e) {
      console.log("Error in createBrand");
      console.log(e);
    }
  };
};

export const createCategory = (category) => {
  return async (dispatch) => {
    try {
      const { data } = axios.post("http://localhost:3001/", category);
      dispatch({
        type: TYPES.CREATE_CATEGORY,
        payload: data,
      });
      console.log(data);
    } catch (e) {
      console.log("Error in createCategory");
      console.log(e);
    }
  };
};



export const getConfirm = (token) => {
  return async (dispatch) => {
    var json = await axios.get(`http://localhost:3001/api/user/confirm/${token}`);
    // console.log("TOKEN",token)
    return dispatch({
      type: TYPES.GET_CONFIRM,
      payload: json.data,
    }); 
  };
};