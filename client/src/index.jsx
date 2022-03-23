import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "./translations/ES/global.json";
import global_en from "./translations/EN/global.json";
import { DarkModeContextProvider } from "./components/AdminPanel/PanelHome/DarkMode/context/darkModeContext";
import { ContextRouter } from "./components/AdminPanel/PanelHome/context/RoutesContext/routerContext";
import { Auth0Provider } from "@auth0/auth0-react";


i18next.init({
  interpolation: { escapeValue: false },
  lng:"en",
  resources:{
    en:{
      global: global_en
    },
    es:{
      global: global_es
    },
  }
  
})

const domain =  process.env.REACT_APP_AUTH0_DOMAIN
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
    >
    <I18nextProvider i18n={i18next} >
    <DarkModeContextProvider>
      <ContextRouter>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
      </ContextRouter>
      </DarkModeContextProvider>
    </I18nextProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
