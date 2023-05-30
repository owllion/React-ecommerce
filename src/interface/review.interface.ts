import { IProduct } from "../interface/product.interface";
import { IUser } from "./user.interface";
// export interface ICreateReview {
//   comment: string;
//   rating: number;
//   product: string;
// }
export interface ICreateReview {
  comment: string;
  rating: number;
  product_id: string;
  user_id: string;
}

export interface IReview {
  rating: number;
  id?: string;
  comment: string;
  user: IUser;
  createdAt: number | Date;
  product: IProduct;
}
