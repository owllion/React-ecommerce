import { useAppSelector } from "./../store/hooks";
import axios, { AxiosError } from "axios";
import { getRefreshToken } from "./auth.api";
const token = useAppSelector((state) => state.auth.token);
const refreshToken = useAppSelector((state) => state.auth.refreshToken);

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: token,
  },
});

instance.interceptors.request.use(
  (config) => {
    if (token && config.headers) {
      config.headers["Authorization"] = !!token;
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
    console.log("originalConfig印出", err.config);
    if (err.response) {
      // Access Token was expired
      if (
        err.response.status === 401 &&
        !err.config &&
        !err.config.__isRetryRequest
      ) {
        try {
          const token = await getRefreshToken({ refresh: refreshToken });

          err.config.__isRetryRequest = true;
          err.config.headers["Authorization"] = "Bearer " + token;
          err.config.baseURL = undefined;

          return await instance(err.config);
        } catch (error) {
          const err = error as AxiosError;

          if (err.response && err.response.data) {
            return Promise.reject(err.response.data);
          }
          return Promise.reject(error);
        }
      }
      if (err.response.status === 403 && err.response.data) {
        return Promise.reject(err.response.data);
      }
    }
    return Promise.reject(err);
  }
);

export default instance;
