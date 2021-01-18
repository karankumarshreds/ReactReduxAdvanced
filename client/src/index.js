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

const store = createStore(
  reducers,
  {
    cartState: {
      cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    },
  },
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
