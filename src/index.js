import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { createRoot } from "react-dom/client";
import userReducer from "./reducer/user_slice"


//old store
import old_store from "./user_reducer/user_store"

//redux inports
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import  settingSlice  from "./reducer/setting_slice";

const store = configureStore({
  reducer: {
    user : userReducer,
    setting :settingSlice

  },
});
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
) ;
