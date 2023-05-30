import { IReview } from "./review.interface";
type Image = {
  url: string;
};

export interface IProduct {
  id: string;
  // productId: string;
  product_name: string;
  images: Image[];
  price: number;
  // salePrice?: number;
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
  thumbnails: string[];
}
export interface IProductList {
  data: {
    list: (IProduct | Partial<IProduct>)[];
    total: number;
  };
}
export interface IGetProductDetail {
  productId: string | undefined;
}

export interface IGetProducts {
  page: number;
  keyword: string;
  price: string;
  brands: Array<String> | string;
  categories: Array<String> | string;
  sortBy: string;
  orderBy: string;
}
