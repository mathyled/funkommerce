import { TYPES } from "../actions/types";

const initialState = {
  funkos: [],
  cart: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
      
    case TYPES.GET_FUNKOS:
      
      return {
        ...state,
        funkos: action.payload,
      };

    case TYPES.ADD_TO_CART:
      let newItem = state.funkos.find(
        (product) => product.id === action.payload
      );

      let itemCart = state.cart.find((item) => item.id === newItem.id);

      return itemCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };

    case TYPES.REMOVE_ONE_FROM_CART:
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };

    case TYPES.REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }

    default:
      return { ...state };
  }
}
