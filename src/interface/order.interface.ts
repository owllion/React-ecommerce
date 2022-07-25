import { IProduct } from "./product.interface";

export interface IOrder {
  orderItem: IProduct[];
  deliveryAddress: string;
  totalPrice: number;
  discount?: number;
  discountCode?: string;
}

export interface IGetOrderDetail {
  orderId: string;
}

export interface IUpdateOrder {
  orderItem: {
    orderId: string;
    deliveryAddress?: string;
    orderStatus?: number;
  };
}
