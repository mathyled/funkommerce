import axios from "axios";
import { TYPES } from "./types";

export const getFunkos = () => {
  return async (dispatch) => {
    var json = await axios.get(
      "https://the-funko-api.herokuapp.com/api/v1/items/?page=7"
    );
    // console.log("hola",json)
    return dispatch({
      type: TYPES.GET_FUNKOS,
      payload: json.data.data,
    });
  };
};

export const addToCart = (id) => {
  return {
    type: TYPES.ADD_TO_CART,
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
