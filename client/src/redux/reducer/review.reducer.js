import { TYPES } from "../actions/types";

const initialState = {
  reviews: [],
};

export default function reviewReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
