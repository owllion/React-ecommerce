import instance from "./axios";
import * as UserInterface from "../interface/user.interface";
import { ICreateReview } from "../interface/review.interface";

export const upload = (data: UserInterface.IUpload) =>
  instance.post("/user/upload", data);

// export const deleteAvatar = (data) => instance.delete("/user/upload", data);

// export const userInfo = () => instance.get("/user/:id");

export const forgotPassword = (data: UserInterface.IForgotPassword) =>
  instance.post("/forgot-password", data);

export const resetPassword = (data: UserInterface.IResetPassword) =>
  instance.post("/reset-password", data);

export const userInfoModify = (data: UserInterface.IUserInfoModify) =>
  instance.patch("/user/info", data);

export const userPasswordModify = (data: UserInterface.IUserPasswordModify) =>
  instance.put("/user/password-modify", data);

export const addToFav = (data: UserInterface.IAddToFav) =>
  instance.post("/user/fav/add", data);

export const removeFromFav = (data: UserInterface.IRemoveFromFav) =>
  instance.post("/user/fav/remove", data);

export const getCart = () => instance.get("/cartList");

export const addToCart = (data: UserInterface.IAddToCart) =>
  instance.post("/user/cart/add", data);

export const removeItemInCart = (data: UserInterface.IRemoveItemFromCart) =>
  instance.post("/cart/remove", data);

export const updateQty = (data: UserInterface.IUpdateQty) =>
  instance.post("/cart/update-qty", data);

export const clearCart = () => instance.get("/clearCart");

export const createReview = (data: ICreateReview) =>
  instance.post("/review", data);
