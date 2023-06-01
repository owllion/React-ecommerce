import { ICartItem } from "../components/Checkout/Cart/DesktopCartItem";
import { IProduct } from "./product.interface";

// export interface IOrder {
//   id: string;
//   order_status: number;
//   receiver_name: string;
//   order_items: ICartItem[]; //可能會改，因為長得不太依樣
//   delivery_address: string;
//   total: number;
//   discount_total: number;
//   shipping: number;
//   created_at: number;
//   discount: number;
//   discount_code: string;
// }
export interface IOrderItem {
  product_id: string;
  qty: number;
  size: string;
  order_id: string;
  product_info: {
    thumbnail: string;
    product_name: string;
    price: number;
    id: string;
  };
}

interface PaymentUrl {
  url: string;
}

export interface IOrder {
  order_status: number;
  delivery_address: string;
  discount: number;
  discount_code: string;
  total: number;
  discount_total: number;
  shipping: number;
  receiver_name: string;
  payment_method: string;
  payment_status: number;
  id: string;
  order_items: IOrderItem[];
  payment_url: PaymentUrl;
  created_at: string;
  updated_at: string;
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
