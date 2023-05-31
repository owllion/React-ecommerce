import { IProduct } from "./product.interface";
import { ICoupon } from "./coupon.interface";
import { IReview, IUserReview } from "./review.interface";
export interface Data {
  result: {
    token: string;
    refreshToken: string;
    user: {
      name: string;
      email: string;
      avatarDefault: string;
      avatarUpload: string;
      favList: IProduct[];
      // couponList: ICoupon[];
      // cartList: IProduct[];
    };
  };
}
export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  fullName?: string;
  email: string;
  phone: string | null;
  default_avatar: string;
  upload_avatar: string;
  favorites: IProduct[];
  userReviews: IUserReview[];
  couponList: ICoupon[];
  cartList: IProduct[];
  reviewList: IReview[];
  locale?: string;
}
export interface IUserInfo extends Omit<IUser, "couponList" | "cartList"> {
  cartLength: number;
}

export interface IUpload {
  url: string;
}

export interface IForgotPassword {
  email: string;
}

export interface IResetPassword {
  token: string;
  password: string;
}
export interface IUserPasswordModify {
  password: string;
}
export interface IUserInfoModify {
  first_name?: string;
  last_name?: string;
  phone?: string | null;
  verified?: number;
}

interface IBaseProductInfo {
  id: string;
  qty: number;
  size: string;
  cartList: IProduct[];
}

export interface IAddToFav {
  product_id: string;
}
export interface IRemoveFromFav {
  product_id: string;
}

export interface IRemoveFromCart extends Pick<IBaseProductInfo, "size"> {
  product_id: string;
}
export interface IUpdateQty extends Pick<IBaseProductInfo, "qty" | "size"> {
  operation_type: string;
  product_id: string;
}
export interface IAddToCart extends Pick<IBaseProductInfo, "qty" | "size"> {
  product_id: string;
}
export interface IModifyReview {
  id: string;
  comment: string;
}

export interface IUserId {
  userId: string;
}
