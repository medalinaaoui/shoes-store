import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./App/Store.js";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster position="top-center" reverseOrder={true} />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
