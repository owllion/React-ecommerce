import { AxiosError } from "axios";
import toast from "react-hot-toast";

import { commonActions } from "../../slice/Common.slice";
import { IUser } from "../../../interface/user.interface";
import { AppThunk } from "../../store";
import { registerApi, loginApi } from "src/api/auth.api";
import { authActions } from "src/store/slice/Auth.slice";
import { cartActions } from "src/store/slice/Cart.slice";
import { userActions } from "src/store/slice/User.slice";
import localStorage from "redux-persist/es/storage";

export interface IUserInfo extends Omit<IUser, "couponList" | "cartList"> {
  cartLength: number;
}
interface IAuthResult {
  result: {
    token: string;
    refreshToken: string;
    user: IUserInfo;
  };
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
          result: { token, refreshToken, user },
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
      dispatch(cartActions.setCartLength(user.cartLength));

      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("cartLength", String(user.cartLength));

      dispatch(userActions.setUserInfo({ ...user }));
      dispatch(commonActions.setLoading(false));

      toast.success("You have signed in successfully!");
    } catch (error) {
      const err = error as AxiosError;

      dispatch(commonActions.setLoading(false));

      if (err.response && err.response.data) {
        const errMsg = (err.response?.data as { msg: string }).msg;

        dispatch(commonActions.setError(errMsg));
        toast.error(errMsg);
        throw new Error(errMsg);
      }
    }
  };
};

export default signInOrSignUp;
