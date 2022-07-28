import { IProduct } from "./product.interface";
import { ICoupon } from "./coupon.interface";
export interface ILogin {
  email: string;
  password: string;
}
export interface ILogin2 {
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
}
export interface ICheckAccount {
  email: string;
}

export interface IGoogleLogin {
  email: string;
}

export interface IGetRefreshToken {
  refresh: string;
}
export interface IRegister {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}
