import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interface/user.interface";

// export interface Data {
//   result: {
//     token: string;
//     user: {
//       name: string;
//       email: string;
//       avatarRnDefault: string;
//       favList: {
//         image: Array<string>;
//         productName: string;
//         price: number;
//         category: string;
//         description: string;
//         productId: string;
//         rating: number;
//       }[];
//       couponList: {
//         discount_type: string;
//         amount: number;
//         expiry_date: Date;
//         minimum_amount: number;
//         code: string;
//       }[];
//       cartList: {
//         image: Array<string>;
//         productName: string;
//         price: number;
//         category: string;
//         description: string;
//         productId: string;
//         rating: number;
//         qty: number;
//         isChecked: boolean;
//         stock: number;
//       }[];
//       county: string;
//       district: string;
//       road: string;
//     };
//   };
// }

// export interface Cart {
//   cartList: {
//     image: Array<string>;
//     productName: string;
//     price: number;
//     category: string;
//     description: string;
//     productId: string;
//     rating: number;
//     qty: number;
//     isChecked: boolean;
//     stock: number;
//   }[];
// }
// export interface CartLength {
//   length: number;
// }

// export interface CouponList {
//   couponList: {
//     discount_type: string;
//     amount: number;
//     expiry_date: Date;
//     minimum_amount: number;
//     code: string;
//   }[];
// }
// export interface FavProps {
//   favList: {
//     image: Array<string>;
//     productName: string;
//     price: number;
//     category: string;
//     description: string;
//     productId: string;
//     rating: number;
//     qty: number;
//     isChecked: boolean;
//     stock: number;
//   }[];
// }

const initialState: Partial<IUser> = {
  firstName: "",
  email: "",
  lastName: "",
  avatarUpload: "",
  avatarDefault: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo(state, { payload }: PayloadAction<IUser>) {
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.email = payload.email;
      state.avatarUpload = payload.avatarUpload;
      state.avatarDefault = payload.avatarDefault;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
