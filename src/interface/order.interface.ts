import { ICartItem } from "../components/Checkout/Cart/DesktopCartItem";
import { IProduct } from "./product.interface";

export interface IOrder {
  id: string;
  order_status: number;
  receiver_name: string;
  order_items: ICartItem[]; //可能會改，因為長得不太依樣
  delivery_address: string;
  total: number;
  discount_total: number;
  shipping: number;
  created_at: number;
  discount: number;
  discount_code: string;
}

export interface IOrderInList {
  total: number;
  created_at: Date;
  id: string;
  order_status: number;
}
export interface ICreateOrder {
  order_items: ICartItem[];
  total: number;
  discount_total: number;
  shipping: number;
  delivery_address: string;
  receiver_name: string;
  discount: number;
  discount_code: string;
  owner_id: string;
  cart_id: string;
}

export interface IGetOrderDetail {
  orderId: string;
}

export interface IUpdateOrder {
  order_Id: string;
  delivery_address?: string;
  order_status?: number;
}
