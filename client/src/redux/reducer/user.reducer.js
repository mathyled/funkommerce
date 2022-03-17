import { TYPES } from "../actions/types";

const initialState = {
  user: null, //Usuario de la sesion
  confirm:[]
};


export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.GET_USER:
      Storage.set("user", action.paylaod);

      return {
        ...state,
        user: action.payload,
      };

    case TYPES.CREATE_USER:
      Storage.set("user", action.paylaod);

      return {
        ...state,
        user: action.payload,
      };

      case TYPES.GET_CONFIRM : 
      return{
        ...state,
        confirm: [...state.confirm,action.payload]

      };
    default:
      return {
        ...state,
      };
  }
}
