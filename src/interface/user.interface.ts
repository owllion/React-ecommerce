import { IProduct } from "./product.interface";
import { ICoupon } from "./coupon.interface";
export interface Data {
  result: {
    token: string;
    refreshToken: string;
    user: {
      name: string;
      email: string;
      avatarRnDefault: string;
      favList: IProduct[];
      couponList: ICoupon[];
      cartList: IProduct[];
    };
  };
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
  phone?: string;
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
}
