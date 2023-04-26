import { AxiosError } from "axios";
import toast from "react-hot-toast";

import { commonActions } from "../../slice/Common.slice";
import { AppThunk } from "../../store";
import { googleLoginApi } from "src/api/auth.api";
import { IUserInfo } from "src/interface/user.interface";
import { authRelatedAction } from "./authRelatedAction.action";
interface IAuthResult {
  result: {
    token: string;
    refreshToken: string;
    user: IUserInfo;
  };
}

// export const googleLogin = (code: string): AppThunk => {
export const googleLogin = (access_token: string): AppThunk => {
  return async (dispatch) => {
    dispatch(commonActions.setLoading(true));
    try {
      const {
        data: {
          result: { token, refreshToken, user },
        },
      }: {
        data: IAuthResult;
      } = await googleLoginApi({ access_token });

      dispatch(
        authRelatedAction({
          user,
          token,
          refreshToken,
          cartLength: user.cartLength,
          type: "google",
        })
      );

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
