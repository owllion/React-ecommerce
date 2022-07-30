import { AxiosRequestConfig } from "axios";
import instance from "./axios";

export const getProductListApi = (config: AxiosRequestConfig) =>
  instance.get("/product-list", config);
