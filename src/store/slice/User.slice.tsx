import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface Data {
  result: {
    token: string;
    user: {
      name: string;
      email: string;
      avatarRnDefault: string;
      favList: {
        image: Array<string>;
        productName: string;
        price: number;
        category: string;
        description: string;
        productId: string;
        rating: number;
      }[];
      couponList: {
        discount_type: string;
        amount: number;
        expiry_date: Date;
        minimum_amount: number;
        code: string;
      }[];
      cartList: {
        image: Array<string>;
        productName: string;
        price: number;
        category: string;
        description: string;
        productId: string;
        rating: number;
        qty: number;
        isChecked: boolean;
        stock: number;
      }[];
      county: string;
      district: string;
      road: string;
    };
  };
}
export interface Error {
  message: string;
}
export interface Loading {
  isLoading: boolean;
}
export interface Cart {
  cartList: {
    image: Array<string>;
    productName: string;
    price: number;
    category: string;
    description: string;
    productId: string;
    rating: number;
    qty: number;
    isChecked: boolean;
    stock: number;
  }[];
}
export interface CartLength {
  length: number;
}

export interface Props {
  index: number;
  type: string;
}
export interface CouponList {
  couponList: {
    discount_type: string;
    amount: number;
    expiry_date: Date;
    minimum_amount: number;
    code: string;
  }[];
}
export interface FavProps {
  favList: {
    image: Array<string>;
    productName: string;
    price: number;
    category: string;
    description: string;
    productId: string;
    rating: number;
    qty: number;
    isChecked: boolean;
    stock: number;
  }[];
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    avatar: "",
    cartList: [{}],
    couponList: [{}],
    cartListLength: 0,
    favList: [{}],
  },
  reducers: {
    setCouponList(state, { payload }: PayloadAction<CouponList>) {
      state.couponList = payload.couponList;
    },
    setCart(state, { payload }: PayloadAction<Cart>) {
      state.cartList = payload.cartList;
    },
    setCartLength(state, { payload }: PayloadAction<CartLength>) {
      state.cartListLength = payload.length;
    },
    // setCartItemQty(state, { payload }: PayloadAction<Props>) {
    //   payload.type === "add"
    //     ? state.cartList[payload.index].qty++
    //     : state.cartList[payload.index].qty--;
    // },
    setFavList(state, { payload }: PayloadAction<FavProps>) {
      state.favList = payload.favList;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
