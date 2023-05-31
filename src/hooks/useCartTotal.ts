import { useEffect, useState } from "react";
import { IProduct } from "./../interface/product.interface";
import { ICartItem } from "../components/Checkout/Cart/DesktopCartItem";

export const useCartTotal = (cartList: ICartItem[]) => {
  const [cartTotal, setCartTotal] = useState(0);
  const res = cartList.reduce(
    (total, cur) => total + cur.qty! * cur.product.price,
    0
  );
  useEffect(() => {
    setCartTotal(res);
  }, []);

  return cartTotal;
};
