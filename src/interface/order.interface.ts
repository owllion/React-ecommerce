import { IProduct } from "./product.interface";

export interface IOrder {
  orderId: string;
  orderStatus: number;
  receiverName: string;
  orderItem: IProduct[];
  deliveryAddress: string;
  total: number;
  discountTotal: number;
  shipping: number;
  createdAt: number;
  discount: number;
  discountCode: string;
}
export interface ICreateOrder {
  orderItem: IProduct[];
  total: number;
  discount_total: number;
  shipping: number;
  delivery_address: string;
  receiver_name: string;
  discount: number;
  discount_code: string;
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
