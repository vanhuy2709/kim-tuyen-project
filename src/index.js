import React from "react";
import ReactDOM from "react-dom/client";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";
import "./styles/global.scss";
import { BrowserRouter } from "react-router-dom";
// import Login from "./components/Admin/Login/Login";
// import Blog from "./components/Admin/BlogPage/Blog";
import ScrollToTop from "./utils/ScrollToTop";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./store/reducers";

const store = createStore(rootReducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
