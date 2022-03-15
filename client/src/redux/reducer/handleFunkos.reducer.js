import { TYPES } from "../actions/types";

const initialState = {
  funkos: [],
  funkosBackUp: [],
  detail: [],
};

export default function handleFunkosReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.GET_FUNKOS:
      return {
        ...state,
        funkos: action.payload,
        funkosBackUp: action.payload,
      };
    case TYPES.GET_FUNKO_DETAIL:
      let detail = state.funkos.find((f) => String(f.id) === action.id);
      return {
        ...state,
        detail: [detail],
      };
    case TYPES.SEARCH_FUNKOS: {
      return {
        ...state,
        funkos: action.payload,
      };
    }
    case TYPES.ADD_TO_CART:
      let newItem = state.funkos.find(
        (product) => String(product.id) === String(action.payload)
      );

      let itemInCart = state.cart.find(
        (item) => String(item.id) === String(newItem.id)
      );

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

    case TYPES.ORDER_FUNKOS: {
      let funkoSort;

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

    case TYPES.HANDLE_CATEGORIES:
      const allFunkos1 = state.funkosBackUp;

      let categoryFilter =
        action.payload === "ALL"
          ? state.funkos
          : allFunkos1.filter((e) => e.Category.name.includes(action.payload));

      return {
        ...state,
        funkos: categoryFilter,
      };

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

      let licenseFilter =
        action.payload === "ALL"
          ? state.funkos
          : allFunkos3.filter(
              (e) => e.license && e.license?.includes(action.payload)
            );

      return {
        ...state,
        funkos: licenseFilter,
      };

    default:
      return {
        ...state,
      };
  }
}
