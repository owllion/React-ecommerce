export interface ILogin {
  email: string;
  password: string;
}
export interface ISocialLogin {
  access_token: string;
}
export interface IRegister {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
export interface ICheckAccount extends Pick<IRegister, "email"> {}
export interface IGetRefreshToken {
  refresh: string;
}
export interface IVerifyToken {
  token: string;
}
export interface ICheckToken extends IVerifyToken {}
export interface ISendVerifyLink extends Pick<ILogin, "email"> {
  type: string;
}
