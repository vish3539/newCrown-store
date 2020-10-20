import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from './redux/store'
// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    {/* Provider is a component that is the parent of everything inside our application */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
