import { TYPES } from "../actions/types";

const initialState = {
  totalToPay: 0,
};

export default function totalToPayReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.MODIFIED_TOTAL:
      let sum = 0;
      for (let i = 0; i < state.cart.length; i++) {
        sum += state.cart[i].price * state.cart[i].quantity;
      }
      return {
        ...state,
        totalToPay: sum,
      };
    default:
      return {
        ...state,
      };
  }
}
