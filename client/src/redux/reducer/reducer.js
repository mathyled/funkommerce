// import { Storage } from "../../helpers/salveStorage";

import { TYPES } from "../actions/types";

const initialState = {
  funkos: [],
  funkosBackUp: [],
  cart:
    JSON.parse(localStorage.getItem("funkosInCart")) === null
      ? []
      : JSON.parse(localStorage.getItem("funkosInCart")),

  user: null, //Usuario de la sesion
  token:null,
  admin:{
    users:[]
  },
  msg:null,

  detail: [],
  categories: [],
  license: [],
  brand: [],
  reviews: [],
  totalToPay: 0,
  actualPage: 1,
  confirm: {},
  orders: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.GET_FUNKOS:
      return {
        ...state,
        funkos: action.payload,
        funkosBackUp: action.payload,
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
              String(item.id) === String(newItem.id)
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
                ...newItem,
                quantity: 1,
              },
            ],
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
      //console.log(itemToDelete, "itemToDelete");
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
      //storage.removeItem(keyName);
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
        funkos: action.payload,
      };
    }

    case TYPES.ORDER_FUNKOS: {
      let funkoSort;
      // console.log("hello",action.payload)
      if (action.payload === "AtoZ") {
        funkoSort = state.funkos.sort((a, b) => {
          if (a.title > b.title) return 1;
          if (a.title < b.title) return -1;
          else return 0;
        });
      }
      if (action.payload === "ZtoA") {
        funkoSort = state.funkos.sort((a, b) => {
          if (a.title > b.title) return -1;
          if (a.title < b.title) return 1;
          else return 0;
        });
      }
      if (action.payload === "HighPrice") {
        //console.log(action.payload)
        funkoSort = state.funkos.sort((a, b) => {
          if (a.price > b.price) return -1;
          if (a.price < b.price) return 1;
          else return 0;
        });
      }
      if (action.payload === "LowPrice") {
        funkoSort = state.funkos.sort((a, b) => {
          if (a.price > b.price) return 1;
          if (a.price < b.price) return -1;
          else return 0;
        });
      }

      return {
        ...state,
        funkos: [...funkoSort],
      };
    }

    case TYPES.GET_FUNKO_DETAIL:
      // let detail = state.funkos.find((f) => String(f.id) === action.id);
      return {
        ...state,
        detail: [action.payload],
      };

    //FILTRADO

    case TYPES.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case TYPES.GET_LICENSE:
      return {
        ...state,
        license: action.payload,
      };
    case TYPES.GET_BRANDS:
      return {
        ...state,
        brand: action.payload,
      };

    case TYPES.HANDLE_CATEGORIES:
      const allFunkos1 = state.funkosBackUp;
      // console.log("categories",action.payload)
      let categoryFilter =
        action.payload === "ALL"
          ? state.funkos
          : allFunkos1.filter((e) => e.Category.name.includes(action.payload));
      //console.log(categoryFilter);
      return {
        ...state,
        funkos: categoryFilter,
      };

    // case TYPES.HANDLE_LICENSE:
    //     const allFunkos3 = state.funkos;

    //     // eslint-disable-next-line array-callback-return
    //   let licenseFilter = action.payload === 'ALL' ? state.funkos : allFunkos3.filter((i) => ( i.license && i.attributes.license?.includes(action.payload)
    //     ))
    //     console.log(licenseFilter)
    //     return {
    //       ...state,
    //       funkos: licenseFilter
    //    }

    case TYPES.HANDLE_BRANDS:
      const allFunkos2 = state.funkosBackUp;

      let brandFilter =
        action.payload === "ALL"
          ? state.funkos
          : allFunkos2.filter((e) => e.Brand.name.includes(action.payload));
      return {
        ...state,
        funkos: brandFilter,
      };

    case TYPES.HANDLE_LICENSE:
      let allFunkos3 = state.funkosBackUp;

      // eslint-disable-next-line array-callback-return
      //console.log(action.payload);
      let licenseFilter =
        action.payload === "ALL"
          ? state.funkos
          : allFunkos3.filter(
              (e) => e.license && e.license?.includes(action.payload)
            );
      // console.log(licenseFilter);
      return {
        ...state,
        funkos: licenseFilter,
      };

    case TYPES.GET_USER:
      localStorage.setItem("loggedUser", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));

      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };

    case TYPES.CREATE_USER:
      localStorage.setItem("loggedUser", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));

      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };

    case TYPES.FIND_USER:
      if(action.payload===null) return state;
      localStorage.setItem("loggedUser", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));

      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };

    case TYPES.LOGOUT_USER:
      localStorage.removeItem("loggedUser");
      localStorage.removeItem("token");

      return {
        ...state,
        user: null,
        token: null,
      };

    case TYPES.GET_USERS_ADMIN:

      return {
        ...state,
        admin:{
          ...state.admin,
          users:action.payload
        }
      }

    case TYPES.GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };

    case TYPES.MODIFIED_TOTAL:
      let sum = 0;
      for (let i = 0; i < state.cart.length; i++) {
        sum += state.cart[i].price * state.cart[i].quantity;
      }
      return {
        ...state,
        totalToPay: sum,
      };

    case TYPES.CHANGE_PAGE:
      return {
        ...state,
        actualPage: action.payload,
      };

    case TYPES.CREATE_FUNKO:
      return {
        ...state,
      };

    case TYPES.MODIFY_FUNKO:
      return {
        ...state,
      };

    case TYPES.DELETE_FUNKO:
      return {
        ...state,
      };

    case TYPES.GET_CONFIRM:
      return {
        ...state,
        confirm: action.payload,
      };

    case TYPES.RESET_PASSWORD:
      return {
        ...state,
        msg: action.payload,
      };

    case TYPES.GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };

    case TYPES.CHANGE_STATUS:
      return {
        ...state,
      };

    case TYPES.FILTER_STATUS:
      return {
        ...state,
        orders: action.payload,
        };

    default:
      return {
        ...state,
      };
  }
}
