import { IProduct } from "./product.interface";
import { ICoupon } from "./coupon.interface";
import { IReview } from "./review.interface";
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
      couponList: ICoupon[];
      cartList: IProduct[];
    };
  };
}
export interface IUser {
  firstName: string;
  lastName: string;
  fullName?: string;
  email: string;
  phone: string | null;
  avatarDefault: string;
  avatarUpload: string;
  favList: IProduct[];
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

export interface IUserInfoModify {
  firstName?: string;
  lastName?: string;
  phone?: string | null;
}
export interface IUserPasswordModify {
  password: string;
}

interface IBaseProductInfo {
  productId: string;
  qty: number;
  size: string;
  cartList: IProduct[];
}

export interface IAddToFav extends Pick<IBaseProductInfo, "productId"> {}
export interface IRemoveFromFav extends Pick<IBaseProductInfo, "productId"> {}

export interface IRemoveFromCart
  extends Pick<IBaseProductInfo, "productId" | "size"> {}
export interface IUpdateQty
  extends Pick<IBaseProductInfo, "productId" | "qty" | "size"> {
  type: string;
}
export interface IAddToCart
  extends Pick<IBaseProductInfo, "productId" | "qty" | "size"> {}

export interface IGetPopulatedList {
  type: "order" | "review" | "coupon";
}
export interface IGetNormalList {
  type: "cartList" | "favList" | "couponList";
}
export interface IModifyReview {
  reviewItem: {
    reviewId: string;
    comment: string;
  };
}
