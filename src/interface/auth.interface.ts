export interface ILogin {
  email: string;
  password: string;
}
export interface ISocialLogin {
  reqUrl: string;
}
export interface IGoogleLogin {
  access_token: string;
}

export interface IRegister {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}
export interface ICheckAccount extends Pick<IRegister, "email"> {}

export interface IVerifyToken {
  token: string;
}
export interface IGetRefreshToken extends IVerifyToken {}
export interface ICheckToken extends IVerifyToken {}
export interface ISendVerifyLink extends Pick<ILogin, "email"> {
  type: string;
}
