import axios, { AxiosError } from "axios";
import { getRefreshToken } from "./auth.api";
import toast from "react-hot-toast";

const token = localStorage.getItem("token") || "";
const refreshToken = localStorage.getItem("refreshToken") || "";
console.log({ token, refreshToken });

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: token,
  },
});

instance.interceptors.request.use(
  (config) => {
    if (token && config.headers) {
      config.headers["Authorization"] = token;
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
    console.log("originalConfig", err.config);
    if (err.response) {
      // Access Token was expired
      if (
        err.response.status === 401 &&
        err.config &&
        !err.config.__isRetryRequest &&
        err.config.url !== "/refresh-token"
      ) {
        try {
          const {
            data: { token, refreshToken: reToken },
          } = await getRefreshToken({ refresh: refreshToken });

          localStorage.setItem("token", token);
          localStorage.setItem("refreshToken", reToken);

          err.config.__isRetryRequest = true;
          err.config.headers["Authorization"] = "Bearer " + token;
          err.config.baseURL = undefined;

          return await instance(err.config);
        } catch (error) {
          const err = error as AxiosError;
          if (err.response && err.response.data) {
            // fail to update access_token (refreshToken is expired->cause 401 error)
            window.location.href = "/auth/welcome";
            toast.error(`${err.response.status}: Please login again`);
            return Promise.reject(err.response.data);
          }

          return Promise.reject(error);
        }
      }
    }
    return Promise.reject(err);
  }
);

export default instance;
