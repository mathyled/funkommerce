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

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next} >
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </I18nextProvider>

  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
