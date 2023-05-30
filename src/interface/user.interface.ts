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
  id: string;
  first_name: string;
  last_name: string;
  fullName?: string;
  email: string;
  phone: string | null;
  default_avatar: string;
  upload_avatar: string;
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

export interface IAddToFav extends Pick<IBaseProductInfo, "id"> {}
export interface IRemoveFromFav extends Pick<IBaseProductInfo, "id"> {}

export interface IRemoveFromCart
  extends Pick<IBaseProductInfo, "id" | "size"> {}
export interface IUpdateQty
  extends Pick<IBaseProductInfo, "id" | "qty" | "size"> {
  operation_type: string;
}
export interface IAddToCart
  extends Pick<IBaseProductInfo, "id" | "qty" | "size"> {}

export interface IGetPopulatedList {
  type: "order" | "review";
}
export interface IGetNormalList {
  type: "cartList" | "favList" | "couponList";
}
export interface IModifyReview {
  reviewItem: {
    id: string;
    comment: string;
  };
}

export interface IUserId {
  userId: string;
}
