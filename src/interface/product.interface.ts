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
}

export interface getProductDetail {
  productId: string;
}
