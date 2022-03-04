import { TYPES } from "../actions/types";

const initialState = {
  funkos: [],
  funkosBackUp: [],
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
        (product) => String(product.id) === String(action.payload)
      );
      //console.log('newItem',newItem)
      let itemInCart = state.cart.find(
        (item) => String(item.id) === String(newItem.id)
      );
      //console.log('itemInCart',itemInCart)
      return itemInCart
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
      let itemToDelete = state.cart.find(
        (item) => String(item.id) === String(action.payload)
      );
      console.log(itemToDelete, "itemToDelete");
      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              String(item.id) === String(action.payload)
                ? { ...item, quantity: item.quantity - 1 }
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
      return initialState;
      
    case TYPES.SEARCH_FUNKOS: {
      console.log(action.payload)
      return {
        ...state,
        funkos: [action.payload]
      }
    }


    default:
      return { ...state };
  }
}
