export interface ILogin {
  email: string;
  password: string;
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
