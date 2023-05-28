import instance from "./axios";
import * as UserInterface from "../interface/user.interface";
import { ICreateReview } from "../interface/review.interface";
import { ICreateOrder } from "../interface/order.interface";
import { IApplyCoupon } from "../interface/coupon.interface";
import { IGetOrderDetail } from "../interface/order.interface";

//ok
export const upload = (data: UserInterface.IUpload) =>
  instance.post("/upload-avatar", data);
//ok
export const forgotPassword = (data: UserInterface.IForgotPassword) =>
  instance.post("/forgot-password", data);

//ok
export const resetPassword = (data: UserInterface.IResetPassword) =>
  instance.post("/reset-password", data);

//ok
export const userInfoModify = (data: UserInterface.IUserInfoModify) =>
  instance.patch("/user/update", data);

//ok
export const userPasswordModify = (data: UserInterface.IUserPasswordModify) =>
  instance.put("/user/modify-password", data);

//ok
export const ToggleFavApi = (data: UserInterface.IAddToFav) =>
  instance.post("/user-favorite/", data);

// export const removeFromFavApi = (data: UserInterface.IRemoveFromFav) =>
//   instance.post("/user/fav/remove", data);

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

//ok
export const getOrderDetail = (data: IGetOrderDetail) =>
  instance.post(`/order/${data.orderId}`);

//ok
export const modifyReview = (data: UserInterface.IModifyReview) =>
  instance.put("/review", data);
