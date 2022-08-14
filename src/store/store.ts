import logger from "redux-logger";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

import authSlice from "./slice/Auth.slice";
import orderSlice from "./slice/Order.slice";
import userSlice from "./slice/User.slice";
import productSlice from "./slice/Product.slice";
import commonSlice from "./slice/Common.slice";
import cartSlice from "./slice/Cart.slice";
import checkoutSlice from "./slice/Checkout.slice";

const reducers = combineReducers({
  auth: authSlice.reducer,
  order: orderSlice.reducer,
  user: userSlice.reducer,
  common: commonSlice.reducer,
  product: productSlice.reducer,
  cart: cartSlice.reducer,
  checkout: checkoutSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["common"],
};

const persistedReducer = persistReducer(persistConfig, reducers);
//persistedReducer, which is an enhanced reducer with configuration to persist the userReducer state to local storage.

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk, logger],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

//Redux Thunk type
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
export default store;
