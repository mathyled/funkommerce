import { TYPES } from "../actions/types";

const initialState = {
  funkos: [],
  funkosBackUp: [],
  cart:
    JSON.parse(localStorage.getItem("funkosInCart")) === null
      ? []
      : JSON.parse(localStorage.getItem("funkosInCart")),
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.GET_FUNKOS:
      return {
        ...state,
        funkos: action.payload,
        funkosBackUp: action.payload,
      };

    case TYPES.SUM_IN_CART:
      let itemInCart2 = state.cart.find(
        (item) => String(item.id) === String(action.payload)
      );
      return itemInCart2
        ? {
            ...state,
            cart: state.cart.map((item) =>
              String(item.id) === String(itemInCart2.id)
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item
            ),
          }
        : {
            ...state,
            cart: [
              ...state.cart,
              {
                ...itemInCart2,
                quantity: 1,
              },
            ],
          };

    case TYPES.REMOVE_ONE_FROM_CART:
      let itemToDelete = state.cart.find(
        (item) => String(item.id) === String(action.payload)
      );

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              String(item.id) === String(action.payload)
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter(
              (item) => String(item.id) !== String(action.payload)
            ),
          };

    case TYPES.REMOVE_ALL_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (item) => String(item.id) !== String(action.payload)
        ),
      };

    case TYPES.CLEAR_CART:
      localStorage.clear();
      return {
        ...state,
        cart: [],
      };

    default:
      return {
        ...state,
      };
  }
}
