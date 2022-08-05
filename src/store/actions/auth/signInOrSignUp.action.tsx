import { AxiosError } from "axios";
import toast from "react-hot-toast";

import { AppThunk } from "../../store";
import { commonActions } from "../../slice/Common.slice";
import { IUser } from "../../../interface/user.interface";
import { registerApi, loginApi } from "src/api/auth.api";
import { authActions } from "src/store/slice/Auth.slice";
import { cartActions } from "src/store/slice/Cart.slice";
import { userActions } from "src/store/slice/User.slice";

interface IUserInfo extends IUser {
  cartLength: number;
}
interface IAuthResult {
  token: string;
  refreshToken: string;
  result: IUserInfo;
}

const isLogin = (data: Record<string, string>) =>
  Object.keys(data).length === 2 ? true : false;

interface IProps extends Record<string, string> {}
const signInOrSignUp = (data: IProps): AppThunk => {
  return async (dispatch) => {
    dispatch(commonActions.setLoading(true));
    try {
      const {
        data: {
          token,
          refreshToken,
          result: {
            cartLength,
            avatarUpload,
            avatarDefault,
            email,
            firstName,
            lastName,
          },
        },
      }: {
        data: IAuthResult;
      } = isLogin(data)
        ? await loginApi({
            email: data.email,
            password: data.password,
          })
        : await registerApi({
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            password: data.password,
          });
      dispatch(authActions.setToken(token));
      dispatch(authActions.setRefreshToken(refreshToken));
      dispatch(cartActions.setCartLength(cartLength));
      dispatch(
        userActions.setUserInfo({
          firstName,
          lastName,
          email,
          avatarUpload,
          avatarDefault,
        } as IUser)
      );
      dispatch(commonActions.setLoading(false));
      toast.success("Success!");
    } catch (error) {
      const err = error as AxiosError;

      dispatch(commonActions.setLoading(false));

      if (err.response && err.response.data) {
        const errMsg = (err.response?.data as { msg: string }).msg;
        toast.error(errMsg);
        throw new Error(errMsg);
      }
    }
  };
};

export default signInOrSignUp;
