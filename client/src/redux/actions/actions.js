import axios from "axios";
import { TYPES } from "./types";


const URL_USER="http://localhost:3001/api/";


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
  return { type: TYPES.ORDER_FUNKOS, payload: order };
};

export const createUser = (user,token, idUser) => {
  
  return {
    type:TYPES.CREATE_USER,
    payload:{user,token,idUser}
  }

};

//ACION PARA BUSCAR EL USER EN EL LOCAL STORAGE:
export const salveUser = () => {
  const user = window.localStorage.getItem("loggedUser");
  const token = window.localStorage.getItem("token");
  const idUser = window.localStorage.getItem("idUser");
 // console.log('se obtiene el usuario del local storage con la llamada del componente APP')

 
  if(user){

    //console.log('el usuario ya existia');

    return {
      type: TYPES.FIND_USER,
      payload: { user: user, token: token, idUser:idUser },
    };
  }
   // console.log("el usuario no existia");

  return {
    type:TYPES.FIND_USER,
    payload:{user:null,token:null,idUser:null}

  }

};

//PAra deslogearnos:

export const logoutUser = () => {
  return {
    type: TYPES.LOGOUT_USER,
    payload: { user: null, token: null },
  };
};

//ACTION PARA VERIFICAR SI EL USUARIO TIENE UNA CUENTA



export const findUser = (user, token,idUser) => {

  return {

    type:TYPES.GET_USER,
    payload:{user,token, idUser}
  }
}

export const getUsersAdmin = (payload) => {
  return {
    type: TYPES.GET_USERS_ADMIN,
    payload,
  }
}

/*
  Action para obtener todos los usuarios para el admin
*/




export const getDetails = (id) => {
  console.log(id);
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/api/product/${id}`
      );
      console.log(data);
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
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/api/license`);
      // console.log(data)
      dispatch({ type: TYPES.GET_LICENSE, payload: data });
    } catch (error) {
      dispatch({ type: TYPES.GET_LICENSE, payload: [] });
      console.log("error in action searchFunko", error);
      // console.log(error)
    }
  };
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

export const changePage = (number) => {
  return {
    type: TYPES.CHANGE_PAGE,
    payload: number,
  };
};

export const createFunko = (funko) => {
  return async (dispatch) => {
    try {
      const { data } = axios.post("http://localhost:3001/api/product", funko);
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

export const modifyFunko = (funko) => {
  return async (dispatch) => {
    try {
      const { data } = axios.put("http://localhost:3001/api/product", funko);
      dispatch({
        type: TYPES.MODIFY_FUNKO,
        payload: data,
      });
      console.log(data);
    } catch (e) {
      console.log("Error in modifyFunko");
      console.log(e);
    }
  };
};

export const deleteFunko = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(
        `http://localhost:3001/api/product/${id}`
      );
      dispatch({ type: TYPES.DELETE_FUNKO, payload: data });
    } catch (error) {
      console.log("error in deleteFunko", error);
    }
  };
};

export const getConfirm = (token) => {
  return async (dispatch) => {
    var json = await axios.get(
      `http://localhost:3001/api/user/confirm/${token}`
    );
    // console.log("TOKEN",token)
    return dispatch({
      type: TYPES.GET_CONFIRM,
      payload: json.data,
    });
  };
};

//    http://localhost:3001/api/user/newPassword

export const resetPassword = (email) => {
  return async (dispatch) => {
    try {
      const { data } = axios.post(
        "http://localhost:3001/api/user/newPassword",
        email
      );
      dispatch({
        type: TYPES.RESET_PASSWORD,
        payload: data.msg,
      });
     // console.log(data.msg);
    } catch (e) {
      console.log("Error in resetPassword");
    }
  };
};

export const ConfirmResetPassword = (token, newPassword) => {
  return async (dispatch) => {
    try {
      const { data } = axios.put(
        `http://localhost:3001/api/user/newPassword/confirm/${token}`,
        newPassword
      );
      dispatch({
        type: TYPES.CONFIRM_PASSWORD,
        payload: data.msg,
      });
      console.log("MENSAJEEEE",data.msg);
    } catch (e) {
      console.log("Error in ConfirmResetPassword");
    }
  };
};

export const addCartDb = (obj, funkoAAgregar) => {
  
  
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`http://localhost:3001/api/order`, obj);
      dispatch({
        type: TYPES.ADD_TO_CART_DB,
        payload: funkoAAgregar,
      });
    } catch (e) {
      console.error("Error in addCartDb",e);
    }
  };
} 

export const getCartDb = (obj) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/api/order/incart", obj )
      //console.log("jorge",data)
      dispatch({
        type: TYPES.GET_CART_DB,
        payload: data.Order_detail,
      });
    } catch (e) {
      console.log("Error in ConfirmResetPassword");

    }}  }

export const getOrders = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/api/order");
      dispatch({ type: TYPES.GET_ORDERS, payload: data });
    }
    catch (e) {
    console.log("Error in getOrders", e);
    }
  }
};

export const changeStatus = (status) => {
  return async (dispatch) => {
    try {
      const { data } = axios.put("http://localhost:3001/api/order/setstatus", status);
      dispatch({
        type: TYPES.CHANGE_STATUS,
        payload: data,
      });
      console.log(data);
    } catch (e) {
      console.log("Error in changeStatus");
      console.log(e);
    }
  };
};

export const updateQuantityInCartDb = (obj) => {
  //console.log("111",obj)
  return async (dispatch) => {
    try {
      const { data } = axios.put("http://localhost:3001/api/order/updataquantity", obj);
      dispatch({
        type: TYPES.UPDATE_QUANTITY_TO_CART_DB,
        payload: data,
      });
    } catch (e) {
      console.log("Error in updateQuantityInCartDb");
    }
  };
} 

export const setPost = () => {
  
  return {
    type: TYPES.SET_POST
   };
} 
export const restartingPost = () => {
  
  return {
    type: TYPES.RESTARTING_POST
   };
} 


export const setItemsQuantity = (funkoAAgregar) => {
  //console.log("fffffffffff",funkoAAgregar)
  return {
    type: TYPES.SET_ITEMS_QUANTITY,
    payload:funkoAAgregar
   };
} 

export const filterStatus = (status) => {
  return async (dispatch) => {
    try {
      var {data} = await axios.get(`http://localhost:3001/api/order/setstatusfilter/${status}`);
      return dispatch({
        type: TYPES.FILTER_STATUS,
        payload: data,
      });
    }
    catch {
      return dispatch({
        type: TYPES.FILTER_STATUS,
        payload: [],
      });
    }
  };
};


///////////////////////////////  FAVORITE  ///////////////////////////////////////////

export const addFavoritePost = (favoritePost) => {
  return (dispatch) => {
      dispatch({ type: TYPES.ADD_FAVORITE_POST, payload: favoritePost })
      let favoritos = window.localStorage.getItem('favs')
      let listFavorite = JSON.parse(favoritos)
      window.localStorage.setItem("favs", JSON.stringify([...listFavorite, favoritePost]))
  };
}
export const favoritePostList = () => {
  return (dispatch) => {
      let favoritos = window.localStorage.getItem('favs')
      let listFavorite = JSON.parse(favoritos)
      if (listFavorite?.length !== 0) {
          window.localStorage.setItem("favs", JSON.stringify(listFavorite))
      }
  };
}
export const getFavoritePostList = () => {
  return (dispatch) => {
      let favoritos = window.localStorage.getItem('favs')
      let listFavorite = JSON.parse(favoritos)
      if (!listFavorite) {
          dispatch({ type: TYPES.GET_FAVORITE_POST, payload: [] })
      } else {

          dispatch({ type: TYPES.GET_FAVORITE_POST, payload: listFavorite })
      }
  };
}

export const deleteFavoritePost = (id) => {
  return (dispatch) => {
      dispatch({ type: TYPES.REMOVE_FAVORITE_POST, payload: id })
      let favoritos = window.localStorage.getItem('favs')
      let listFavorite = JSON.parse(favoritos)
      if (listFavorite) {
          let deletefav = listFavorite.filter((e) => e.id !== id)
          window.localStorage.setItem("favs", JSON.stringify(deletefav))
      }

  };
}

export const modifiedCartDb = () => {
 return {
      type: TYPES.MODIFIED_CART_DB,
    };
  
};

export const resetCounter = () => {
  return {
       type: TYPES.RESET_COUNTER
     };
   
 };
  


export const getUserGoogle = (response) => {
  return {
       type: TYPES.USER_GOOGLE,
       payload:response
     };
   
 };

