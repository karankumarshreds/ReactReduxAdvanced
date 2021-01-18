import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./theme.css";
import App from "./components/App";

//redux
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducers from "./reducers";

const INITIAL_STATE = {
  // set the cartItems value in case its saved in the browser
  cartState: {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  },
};
const store = createStore(
  reducers,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
