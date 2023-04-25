import {
  IGetProductDetail,
  IGetProducts,
} from "./../interface/product.interface";

import instance from "./axios";

export const getProductListApi = (data: IGetProducts) =>
  instance.post("/products", data);

export const getBestSellerApi = () => instance.get("/best-seller-list");

export const getProductDetailApi = (data: IGetProductDetail) =>
  instance.post("/product/detail", data);
