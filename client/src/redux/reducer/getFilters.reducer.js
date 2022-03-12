import { TYPES } from "../actions/types";

const initialState = {
  brand: [],
  license: [],
  categories: [],
};

export default function getFiltersReducer(state = initialState, action) {
  switch (action.type) {
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
    default:
      return {
        ...state,
      };
  }
}
