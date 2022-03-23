
import { createContext,useState } from "react";
// import routerReducer from "./routerReducer";

const INITIAL_STATE = {
  viewPage: '',
};

export const RouterContext = createContext(INITIAL_STATE);

export const ContextRouter = ({ children }) => {
  // const [state, dispatch] = useReducer(routerReducer, INITIAL_STATE);
  const [state,setState]=useState(INITIAL_STATE);

  const changePage=(value)=>{
    setState({
      ...state,
      viewPage: value
    })

  }

  return (
    <RouterContext.Provider value={{ viewPage: state.viewPage, changePage }}>
      {children}
    </RouterContext.Provider>
  );
};
