import logger from "redux-logger";
import thunk from "redux-thunk";

import { configureStore } from "@reduxjs/toolkit";

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// import authSlice from "./slice/Auth";
// import orderSlice from "./slice/OrderSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage: localStorage,
};
// const reducers = combineReducers({
//   auth: authSlice.reducer,
//   order: orderSlice.reducer,
// });

// const persistedReducer = persistReducer(persistConfig, reducers);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: [thunk, logger],
// });

// export default store;
