import { useEffect, useState } from "react";
import { IProduct } from "./../interface/product.interface";

export const useCartTotal = (cartList: IProduct[]) => {
  const [cartTotal, setCartTotal] = useState(0);
  const res = cartList.reduce((total, cur) => total + cur.qty! * cur.price, 0);
  useEffect(() => {
    setCartTotal(res);
  }, []);

  return cartTotal;
};
