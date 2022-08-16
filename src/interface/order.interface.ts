import { IProduct } from "./product.interface";

export interface IOrder {
  orderId: string;
  orderStatus: number;
  receiverName: string;
  orderItem: IProduct[];
  deliveryAddress: string;
  totalPrice: number;
  createdAt: number;
  discount?: number;
  discountCode?: string;
}
export interface ICreateOrder {
  orderItem: IProduct[];
  totalPrice: number;
  deliveryAddress: string;
  receiverName: string;
  discount: number;
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
