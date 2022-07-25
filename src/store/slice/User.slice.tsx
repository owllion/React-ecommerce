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

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    name: "",
    email: "",
    avatar: "",
    cartList: [{}],
    couponList: [{}],
    cartListLength: 0,
    favList: [{}],
    county: "",
    district: "",
    road: "",
    errorMsg: "",
    loading: false,
  },
  reducers: {
    signup(state, { payload }: PayloadAction<Data>) {
      state.token = payload.result.token;
      state.name = payload.result.user.name;
      state.email = payload.result.user.email;
      state.avatar = payload.result.user.avatarRnDefault;
      state.cartList = payload.result.user.cartList;
      state.couponList = payload.result.user.couponList;
      state.favList = payload.result.user.favList;
      state.county = payload.result.user.county;
      state.district = payload.result.user.district;
      state.road = payload.result.user.road;
    },
    signin(state, { payload }: PayloadAction<Data>) {
      state.token = payload.result.token;
      state.name = payload.result.user.name;
      state.email = payload.result.user.email;
      state.avatar = payload.result.user.avatarRnDefault;
      state.cartList = payload.result.user.cartList;
      state.favList = payload.result.user.favList;
      state.couponList = payload.result.user.couponList;
      state.county = payload.result.user.county;
      state.district = payload.result.user.district;
      state.road = payload.result.user.road;
    },
    setCouponList(state, { payload }: PayloadAction<CouponList>) {
      state.couponList = payload.couponList;
    },
    signout(state) {
      state.token = "";
    },
    setError(state, { payload }: PayloadAction<Error>) {
      state.errorMsg = payload.message;
    },
    setErrorClear(state) {
      state.errorMsg = "";
    },
    setLoading(state, { payload }: PayloadAction<Loading>) {
      state.loading = payload.isLoading;
    },
    setCart(state, { payload }: PayloadAction<Cart>) {
      state.cartList = payload.cartList;
    },
    setCartLength(state, { payload }: PayloadAction<CartLength>) {
      state.cartListLength = payload.length;
    },
    setCartItemQty(state, { payload }: PayloadAction<Props>) {
      payload.type === "add"
        ? state.cartList[payload.index].qty++
        : state.cartList[payload.index].qty--;
    },
    setFavList(state, { payload }: PayloadAction<FavProps>) {
      state.favList = payload.favList;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
