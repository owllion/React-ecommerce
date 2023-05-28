import {
  IGetProductDetail,
  IGetProducts,
} from "./../interface/product.interface";

import instance from "./axios";

//ok
export const getProductListApi = (data: IGetProducts) =>
  instance.post("/products", data);

//ok
export const getBestSellerApi = () => instance.get("/products/best-seller");

//ok
export const getProductDetailApi = (data: IGetProductDetail) =>
  instance.get(`/product/${data.productId}`);
