import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DisProps {
  finalPrice: number;
  discount: number;
}

interface GameListProps {
  gameList: {
    image: Array<string>;
    productName: string;
    price: number;
    category: string;
    description: string;
    productId: string;
  }[];
}

interface DetailProps {
  orderDetail: {
    total_price: number;
    discount: number;
    discount_code: string;
    payment_method: string;
    delivery_address: string;
    order_item: {
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
  };
}

const orderSlice = createSlice({
  name: "order",
  initialState: {
    finalPrice: 0,
    discount: 0,
    detail: {},
    gameList: [],
  },
  reducers: {
    setDisAndPrice(state, { payload }: PayloadAction<DisProps>) {
      state.finalPrice = payload.finalPrice;
      state.discount = payload.discount;
    },
    clearDisAndPrice(state) {
      state.finalPrice = 0;
      state.discount = 0;
    },
    setOrderDetail(state, { payload }: PayloadAction<DetailProps>) {
      state.detail = payload.orderDetail;
    },
    setGameList(state, { payload }: PayloadAction<GameListProps>) {
      state.gameList = payload.gameList;
    },
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice;
