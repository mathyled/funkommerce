import axios from "axios";
import { TYPES } from "./types";

export const getFunkos = () => {
  return async (dispatch) => {
    var json = await axios.get(
      "https://the-funko-api.herokuapp.com/api/v1/items/?page=10"
    );
    // console.log("hola",json)
    return dispatch({
      type: TYPES.GET_FUNKOS,
      payload: json.data.data,
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
  console.log('action',id)
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