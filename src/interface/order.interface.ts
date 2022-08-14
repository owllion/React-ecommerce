import { IProduct } from "./product.interface";

export interface IOrder {
  orderItem: IProduct[];
  deliveryAddress: string;
  totalPrice: number;
  discount?: number;
  discountCode?: string;
}
export interface ICreateOrder {
  orderItem: IProduct[];
  totalPrice: number;
  deliveryAddress: string;
  receiverName: string;
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
