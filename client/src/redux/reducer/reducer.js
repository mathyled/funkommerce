import { TYPES } from "../actions/types";

const initialState = {
  funkos: [],
  funkosBackUp: [],
  cart:
    JSON.parse(localStorage.getItem("funkosInCart")) === null
      ? []
      : JSON.parse(localStorage.getItem("funkosInCart")),
  cart: [],

  user:{},//Usuario de la sesion
  detail:[]
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
            String(item.id)=== String(newItem.id)
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };




          case TYPES.SUM_IN_CART:
            let addItem = state.funkos.find(
              (product) => String(product.id) === String(action.payload)
            );
            //console.log('newItem',newItem)
            let itemInCart2 = state.cart.find(
              (item) => String(item.id) === String(addItem.id)
            );
            //console.log('itemInCart',itemInCart)
            return itemInCart2
              ? {
                  ...state,
                  cart: state.cart.map((item) =>
                  String(item.id)=== String(addItem.id)
                      ? { ...item, quantity: item.quantity + 1 }
                      : item
                  ),
                }
              : {
                  ...state,
                  cart: [...state.cart, { ...addItem, quantity: 1 }],
                };





    case TYPES.REMOVE_ONE_FROM_CART:
      let itemToDelete = state.cart.find(
        (item) => String(item.id) === String(action.payload)
      );
      //console.log(itemToDelete, "itemToDelete");
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
      localStorage.clear();
      return {
        ...state,
        cart: [],
      };

    // case TYPES.CHANGE_TEXT_BUTTON:
    //   let changeText = state.funkos.find(
    //     (item) => String(item.id) === String(action.payload[1])
    //   );
    //   console.log(changeText)
    //   return {
    //     ...state,
    //     funkos:state.funkos.map((item) => String(item.id) === String(changeText.id) ? { ...item, text: action.payload[0] }: item
    //   )
    //   };

    case TYPES.SEARCH_FUNKOS: {
      return {
        ...state,
        funkos: [action.payload],
      };
    }



    case TYPES.ORDER_FUNKOS: {
      let funkoSort;
      if(action.payload === "AtoZ") {
        funkoSort = state.funkos.sort((a, b) => {
          if(a.name > b.name) return 1;
          if(a.name < b.name) return -1;
          else return 0;
        })
      }
      if(action.payload === "ZtoA") {
        funkoSort = state.funkos.sort((a, b) => {
          if(a.name > b.name) return -1;
          if(a.name < b.name) return 1;
          else return 0;
        })
      }
      if(action.payload === "PriceHigh") {
        funkoSort = state.funkos.sort((a, b) => {
          return b.price - a.price
        })
      }
      if(action.payload === "PriceLow") {
        funkoSort = state.funkos.sort((a, b) => {
          return a.price - b.price
        })
      }
      return {
        ...state,
        funkos: funkoSort
      }
    }

    case TYPES.GET_FUNKO_DETAIL:
      return {
        ...state,
        detail: [action.payload],
      };


    default:
      return { ...state };
  }
}
