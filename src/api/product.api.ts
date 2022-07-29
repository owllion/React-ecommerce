import instance from "./axios";

export const getProductList = (config: any) =>
  instance.post("/product-list", config);
