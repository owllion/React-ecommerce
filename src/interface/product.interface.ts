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
  reviews: IReview[];
}

export interface IGetProductDetail {
  productId: string | undefined;
}
