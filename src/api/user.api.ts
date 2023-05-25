import instance from "./axios";
import * as UserInterface from "../interface/user.interface";
import { ICreateReview } from "../interface/review.interface";
import { ICreateOrder } from "../interface/order.interface";
import { IApplyCoupon } from "../interface/coupon.interface";
import { IGetOrderDetail } from "../interface/order.interface";

export const upload = (data: UserInterface.IUpload) =>
  instance.post("/upload-avatar", data);

export const forgotPassword = (data: UserInterface.IForgotPassword) =>
  instance.post("/forgot-password", data);

export const resetPassword = (data: UserInterface.IResetPassword) =>
  instance.post("/reset-password", data);

//modify info except pwd
export const userInfoModify = (data: UserInterface.IUserInfoModify) =>
  instance.patch("/user/info", data);
//pwd only
export const userPasswordModify = (data: UserInterface.IUserPasswordModify) =>
  instance.put("/user/password", data);

export const addToFavApi = (data: UserInterface.IAddToFav) =>
  instance.post("/user/fav/add", data);

export const removeFromFavApi = (data: UserInterface.IRemoveFromFav) =>
  instance.post("/user/fav/remove", data);

// export const getPopulatedList = (data: UserInterface.IGetPopulatedList) =>
//   instance.get(`/user/populate/${data.type}/list`);

// export const getNormalList = (data: UserInterface.IGetNormalList) =>
//   instance.get(`/user/${data.type}/list`);

//ok
export const addToCartApi = (data: UserInterface.IAddToCart) =>
  instance.post("/user/add-to-cart", data);
//ok
export const removeFromCartApi = (data: UserInterface.IRemoveFromCart) =>
  instance.post("user/remove-from-cart", data);
//ok
export const updateQty = (data: UserInterface.IUpdateQty) =>
  instance.post("/user/update-cart-item-qty", data);

// export const clearCart = () => instance.get("/clearCart");

//ok
export const createReview = (data: ICreateReview) =>
  instance.post("/review", data);

//ok
export const createOrder = (data: ICreateOrder) =>
  instance.post("/order", data);

//ok
export const applyCoupon = (data: IApplyCoupon) =>
  instance.post("/coupon/apply-coupon", data);

// export const getOrderDetail = (data: IGetOrderDetail) =>
//   instance.post("/order/detail", data);
//ok
export const getOrderDetail = (data: IGetOrderDetail) =>
  instance.post(`/order/${data.orderId}`);

//ok
export const modifyReview = (data: UserInterface.IModifyReview) =>
  instance.put("/review", data);
