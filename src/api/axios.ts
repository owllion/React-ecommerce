import axios, { AxiosError } from "axios";
import { getRefreshToken } from "./auth.api";
import toast from "react-hot-toast";
import store from "../store/store";
import { authActions } from "../store/slice/Auth.slice";

const getToken = () => {
  const token = localStorage.getItem("token") || "";
  const refreshToken = localStorage.getItem("refreshToken") || "";
  return { token, refreshToken };
};
const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: getToken().token,
  },
});

instance.interceptors.request.use(
  (config) => {
    if (getToken().token && config.headers) {
      config.headers["Authorization"] = getToken().token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    console.log("originalConfig", err.config.url);
    if (err.response) {
      // Access Token was expired
      if (
        err.response.status === 401 &&
        err.config &&
        !err.config.__isRetryRequest &&
        err.config.url !== "/auth/verify-user"
      ) {
        try {
          const {
            data: { token: newToken, refreshToken: reToken },
          } = await getRefreshToken({ token: getToken().refreshToken });

          localStorage.setItem("token", newToken);
          localStorage.setItem("refreshToken", reToken);

          err.config.__isRetryRequest = true;
          err.config.headers["Authorization"] = "Bearer " + newToken;
          err.config.baseURL = undefined;

          return await instance(err.config);
        } catch (error) {
          const err = error as AxiosError;
          if (err.response && err.response.data) {
            // fail to update access_token (refreshToken is expired->cause 401 error)
            const errMsg = (err.response?.data as { msg: string }).msg;

            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("cartLength");
            localStorage.removeItem("loginType");
            store.dispatch(authActions.clearToken);

            toast.error(
              `${err.response.status}: ${errMsg},please login again.`
            );
            window.location.href = "/auth/welcome";
            return Promise.reject(err.response.data);
          }

          return Promise.reject(err);
        }
      }
    }
    return Promise.reject(err);
  }
);

export default instance;
