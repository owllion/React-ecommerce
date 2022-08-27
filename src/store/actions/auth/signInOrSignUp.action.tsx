import { AxiosError } from "axios";
import toast from "react-hot-toast";

import { commonActions } from "../../slice/Common.slice";
import { AppThunk } from "../../store";
import { registerApi, loginApi } from "src/api/auth.api";
import { IUserInfo } from "src/interface/user.interface";
import { authRelatedAction } from "./authRelatedAction.action";
export interface IAuthResult {
  result: {
    token: string;
    refreshToken: string;
    user: IUserInfo;
  };
}

interface IProps extends Record<string, string> {}

const isLogin = (data: Record<string, string>) =>
  Object.keys(data).length === 2 ? true : false;

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

      if (isLogin(data)) {
        dispatch(
          authRelatedAction({
            user,
            token,
            refreshToken,
            cartLength: user.cartLength,
            type: "email",
          })
        );
        toast.success("You have signed in successfully!");
      }
      dispatch(commonActions.setLoading(false));
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
