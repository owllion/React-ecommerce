import instance from "./axios";
import * as UserInterface from "../interface/user.interface";
import { ICreateReview } from "../interface/review.interface";
import { ICreateOrder } from "../interface/order.interface";
import { IApplyCoupon } from "../interface/coupon.interface";
import { IGetOrderDetail } from "../interface/order.interface";

//ok
export const upload = (data: UserInterface.IUpload) =>
  instance.post("/user/upload-avatar", data);
//ok
export const forgotPassword = (data: UserInterface.IForgotPassword) =>
  instance.post("/user/forgot-password", data);

//ok
export const resetPassword = (data: UserInterface.IResetPassword) =>
  instance.post("/user/reset-password", data);

//ok
export const userInfoModify = (data: UserInterface.IUserInfoModify) =>
  instance.put("/user/update", data);

//ok
export const userPasswordModify = (data: UserInterface.IUserPasswordModify) =>
  instance.put("/user/modify-password", data);

//ok
export const toggleFavApi = (data: UserInterface.IAddToFav) =>
  instance.post("/user-favorite/", data);

//ok
export const addToCartApi = (data: UserInterface.IAddToCart) =>
  instance.post("/user/add-to-cart", data);
//ok
export const removeFromCartApi = (data: UserInterface.IRemoveFromCart) =>
  instance.post("user/remove-from-cart", data);
//ok
export const updateQty = (data: UserInterface.IUpdateQty) =>
  instance.post("/user/update-cart-item-qty", data);

//ok
export const createReview = (data: ICreateReview) =>
  instance.post("/review", data);

//ok
export const payWithCreditCard = (data: ICreateOrder) =>
  instance.post("/order", data);
//line-pay
export const payWithLinePay = (data: ICreateOrder) =>
  instance.post("/line-pay/request-payment", data);

//ok
export const applyCoupon = (data: IApplyCoupon) =>
  instance.post("/coupon/apply-coupon", data);

//ok
export const getOrderDetail = (data: IGetOrderDetail) =>
  instance.get(`/order/${data.orderId}`);

//ok
export const modifyReview = (data: UserInterface.IModifyReview) =>
  instance.put("/review", data);

//ok
export const getCouponListApi = (data: UserInterface.IUserId) =>
  instance.get(`/coupons/user/${data.userId}`);
export const getFavListApi = () => instance.get("/user-favorites");
export const getCartListApi = () => instance.get("user/cart");
export const getOrderListApi = (data: UserInterface.IUserId) =>
  instance.get(`orders/user/${data.userId}`);
export const getReviewListApi = (data: UserInterface.IUserId) =>
  instance.get(`reviews/user/${data.userId}`);
