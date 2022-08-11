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

export interface IAddToFav {
  productId: string;
}
export interface IRemoveFromFav {
  productId: string;
  favList: IProduct[];
}

export interface IRemoveItemFromCart {
  productId: string;
  cartList: IProduct[];
}
export interface IUpdateQty {
  productId: string;
  cartList: IProduct[];
  qty: number;
}
export interface IAddToCart {
  productId: string;
  qty: number;
  size: string;
}
