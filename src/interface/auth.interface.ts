export interface ILogin {
  email: string;
  password: string;
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
