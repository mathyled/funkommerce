import {
  TYPES
} from "../actions/types";

const initialState = {
  funkos: [],
  funkosBackUp: [],
  cart: JSON.parse(localStorage.getItem("funkosInCart")) === null ?
    [] :
    JSON.parse(localStorage.getItem("funkosInCart")),
  user: {}, //Usuario de la sesion
  detail: []
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
      return itemInCart ?
        {
          ...state,
          cart: state.cart.map((item) =>
            String(item.id) === String(newItem.id) ?
            {
              ...item,
              quantity: item.quantity + 1
            } :
            item
          ),
        } :
        {
          ...state,
          cart: [...state.cart, {
            ...newItem,
            quantity: 1
          }],
        };




    case TYPES.SUM_IN_CART:
      let itemInCart2 = state.cart.find( (item) => String(item.id) === String(action.payload) );
      return itemInCart2 ?
        {
          ...state,
          cart: state.cart.map((item) =>
            String(item.id) === String(itemInCart2.id) ?
            {
              ...item,
              quantity: item.quantity + 1
            } :
            item
          ),
        } :
        {
          ...state,
          cart: [...state.cart, {
            ...itemInCart2,
            quantity: 1
          }],
        };





    case TYPES.REMOVE_ONE_FROM_CART:
      let itemToDelete = state.cart.find(
        (item) => String(item.id) === String(action.payload)
      );
      //console.log(itemToDelete, "itemToDelete");
      return itemToDelete.quantity > 1 ?
        {
          ...state,
          cart: state.cart.map((item) =>
            String(item.id) === String(action.payload) ?
            {
              ...item,
              quantity: item.quantity - 1
            } :
            item
          ),
        } :
        {
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
        })
      }
      if (action.payload === "ZtoA") {
        funkoSort = state.funkos.sort((a, b) => {
          if (a.title > b.title) return -1;
          if (a.title < b.title) return 1;
          else return 0;
        })
      }
      if (action.payload === "HighPrice") {
        //console.log(action.payload)
        funkoSort = state.funkos.sort((a, b) => {
          if (a.price > b.price) return -1;
          if (a.price < b.price) return 1;
          else return 0;
        }) 
      }
      if (action.payload === "LowPrice") {
        funkoSort = state.funkos.sort((a, b) => {
          if (a.price > b.price) return 1;
          if (a.price < b.price) return -1;
          else return 0;
        }) 
      }
      console.log("hola",funkoSort)
      return {
        ...state,
        funkos: [...funkoSort]
      }
    }

    case TYPES.GET_FUNKO_DETAIL:
      let detail= state.funkos.find( f => String(f.id) === action.id)
      return {
        ...state,
        detail:[detail]
      };

      //FILTRADO
    case TYPES.HANDLE_CATEGORIES:
      const allFunkos1 = state.funkos;
      let categoryFilter = action.payload === 'ALL' ? state.funkos : allFunkos1.filter((i) => i.attributes.category.includes(action.payload));
      return {
        ...state,
        funkos: categoryFilter
      }

      case TYPES.HANDLE_BRANDS:
        const allFunkos2 = state.funkos;

        let brandFilter = action.payload === 'ALL' ? state.funkos : allFunkos2.filter((i) => i.attributes.brand.includes(action.payload));
        return {
          ...state,
          funkos: brandFilter
        }

        case TYPES.HANDLE_LICENSE:
          const allFunkos3 = state.funkos;

          // eslint-disable-next-line array-callback-return
        let licenseFilter = action.payload === 'ALL' ? state.funkos : allFunkos3.filter((i) => ( i.attributes.license && i.attributes.license?.includes(action.payload)
          ))
          console.log(licenseFilter)
          return {
            ...state,
            funkos: licenseFilter
          }


          default:
            return {
              ...state
            };
  }
}