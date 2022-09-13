import instance from "./axios";
import * as UserInterface from "../interface/user.interface";
import { ICreateReview } from "../interface/review.interface";
import { ICreateOrder } from "../interface/order.interface";
import { IApplyCoupon } from "../interface/coupon.interface";
import { IGetOrderDetail } from "../interface/order.interface";

export const upload = (data: UserInterface.IUpload) =>
  instance.post("/user/upload", data);

export const forgotPassword = (data: UserInterface.IForgotPassword) =>
  instance.post("/forgot-password", data);

export const resetPassword = (data: UserInterface.IResetPassword) =>
  instance.post("/reset-password", data);

export const userInfoModify = (data: UserInterface.IUserInfoModify) =>
  instance.patch("/user/info", data);

export const userPasswordModify = (data: UserInterface.IUserPasswordModify) =>
  instance.put("/user/password", data);

export const addToFavApi = (data: UserInterface.IAddToFav) =>
  instance.post("/user/fav/add", data);

export const removeFromFavApi = (data: UserInterface.IRemoveFromFav) =>
  instance.post("/user/fav/remove", data);

export const getPopulatedList = (data: UserInterface.IGetPopulatedList) =>
  instance.get(`/user/populate/${data.type}/list`);

export const getNormalList = (data: UserInterface.IGetNormalList) =>
  instance.get(`/user/${data.type}/list`);

export const addToCartApi = (data: UserInterface.IAddToCart) =>
  instance.post("/user/cart/add", data);

export const removeFromCartApi = (data: UserInterface.IRemoveFromCart) =>
  instance.post("user/cart/remove", data);

export const updateQty = (data: UserInterface.IUpdateQty) =>
  instance.post("/user/cart/update-qty", data);

export const clearCart = () => instance.get("/clearCart");

export const createReview = (data: ICreateReview) =>
  instance.post("/review", data);

export const createOrder = (data: ICreateOrder) =>
  instance.post("/order", data);

export const applyCoupon = (data: IApplyCoupon) =>
  instance.post("/coupon/apply", data);

export const getOrderDetail = (data: IGetOrderDetail) =>
  instance.post("/order/detail", data);

export const modifyReview = (data: UserInterface.IModifyReview) =>
  instance.patch("/review", data);
