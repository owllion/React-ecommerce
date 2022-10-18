import { IReview } from "./review.interface";

export interface IProduct {
  _id: string;
  productId: string;
  productName: string;
  imageList: Array<string>;
  price: number;
  salePrice?: number;
  brand: string;
  category: string;
  description: string;
  stock: number;
  availability: boolean;
  sales: number;
  size: string;
  color: string;
  qty?: number;
  reviews: IReview[];
  thumbnail: string;
  thumbnailList: string[];
}
export interface IProductList {
  data: {
    productList: [
      { count: [{ totalDoc: number }]; list: (IProduct | Partial<IProduct>)[] }
    ];
  };
}
export interface IGetProductDetail {
  productId: string | undefined;
}
