export interface ILogin {
  email: string;
  password: string;
}
export interface IGoogleLogin {
  code: string;
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
export interface IVerifyUserEmail {
  token: string;
}
export interface ICheckToken extends IVerifyUserEmail {}
export interface ISendVerifyLink extends Pick<ILogin, "email"> {
  type: string;
}
