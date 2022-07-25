import { IProduct } from "../interface/product.interface";
export interface CreateReviewInterface {
  comment: string;
  rating: number;
  user: string;
  product: IProduct;
}
