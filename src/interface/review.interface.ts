import { IProduct } from "../interface/product.interface";
import { IUser } from "./user.interface";
export interface CreateReviewInterface {
  comment: string;
  rating: number;
  user: string;
  product: IProduct;
}

export interface IReview {
  rating: number;
  reviewId: string;
  comment: string;
  user: IUser;
  createdAt: string;
}
