import { IProduct } from "./product.interface";
import { ICoupon } from "./coupon.interface";
export interface ILogin {
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
