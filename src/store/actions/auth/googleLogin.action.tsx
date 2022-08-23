import { AxiosError } from "axios";
import toast from "react-hot-toast";

import { commonActions } from "../../slice/Common.slice";
import { AppThunk } from "../../store";
import { googleLoginApi } from "src/api/auth.api";
import { authActions } from "src/store/slice/Auth.slice";
import { cartActions } from "src/store/slice/Cart.slice";
import { userActions } from "src/store/slice/User.slice";
import localStorage from "redux-persist/es/storage";
import { IUserInfo } from "src/interface/user.interface";
interface IAuthResult {
  result: {
    token: string;
    refreshToken: string;
    user: IUserInfo;
  };
}

export const googleLogin = (code: string): AppThunk => {
  return async (dispatch) => {
    dispatch(commonActions.setLoading(true));
    try {
      const {
        data: {
          result: { token, refreshToken, user },
        },
      }: {
        data: IAuthResult;
      } = await googleLoginApi({ code });

      dispatch(authActions.setToken(token));
      dispatch(authActions.setRefreshToken(refreshToken));
      dispatch(cartActions.resetCartLength());
      dispatch(cartActions.setCartLength(user.cartLength));

      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("cartLength", String(user.cartLength));

      dispatch(userActions.setUserInfo({ ...user }));
      dispatch(commonActions.setLoading(false));

      toast.success("You have signed in successfully!");
    } catch (error) {
      dispatch(commonActions.setLoading(false));

      const err = ((error as AxiosError).response?.data as { msg: string }).msg;
      toast.error(err);
      throw new Error(err);
    }
  };
};
