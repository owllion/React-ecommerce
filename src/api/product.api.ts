import { IGetProductDetail } from "./../interface/product.interface";
import { AxiosRequestConfig } from "axios";
import instance from "./axios";

export const getProductListApi = (config: AxiosRequestConfig) =>
  instance.get("/product-list", config);

export const getBestSellerApi = () => instance.get("/best-seller-list");

export const getProductDetailApi = (data: IGetProductDetail) =>
  instance.post("/product/detail", data);
