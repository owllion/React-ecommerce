import { IProduct } from "./product.interface";
import { ICoupon } from "./coupon.interface";
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
  email: string;
  phone: string | null;
  avatarDefault: string;
  avatarUpload: string;
  favList: IProduct[];
  couponList: ICoupon[];
  cartList: IProduct[];
}
export interface IUpload {
  file: string | Blob | Buffer;
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

export interface IRemoveItemFromCart
  extends Pick<IBaseProductInfo, "productId" | "cartList"> {}
export interface IUpdateQty
  extends Pick<IBaseProductInfo, "productId" | "qty" | "cartList"> {}
export interface IAddToCart
  extends Pick<IBaseProductInfo, "productId" | "qty" | "size"> {}
