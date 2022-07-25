import logger from "redux-logger";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authSlice from "./slice/User.slice";
import orderSlice from "./slice/OrderSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  auth: authSlice.reducer,
  order: orderSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);
//persistedReducer, which is an enhanced reducer with configuration to persist the userReducer state to local storage.

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk, logger],
});

export default store;
