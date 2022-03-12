import thunk from "redux-thunk";
import rootReducer from "../reducer/reducer";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// import cartReducer from "../reducer/cart.reducer";
// import userReducer from "../reducer/user.reducer";
// import reviewReducer from "../reducer/review.reducer";
// import totalToPayReducer from "../reducer/totalToPay.reducer";
// import getFiltersReducer from "../reducer/getFilters.reducer";
// import handleFunkosReducer from "../reducer/handleFunkos.reducer";

/*
const rootReducer = {
    cart : cartReducer,
    user: userReducer,
    review: reviewReducer,
    totalToPay: totalToPayReducer,
    getFilters: getFiltersReducer,
    handleFunkos: handleFunkosReducer,
}

const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(thunk) ) ) 
*/

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
