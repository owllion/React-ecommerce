import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../interface/product.interface";
import { IUser } from "../../interface/user.interface";
import { IUserInfo } from "../actions/auth/signInOrSignUp.action";

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
  phone: "",
  favList: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo(state, { payload }: PayloadAction<IUserInfo>) {
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.email = payload.email;
      state.phone = payload.phone;
      state.avatarUpload = payload.avatarUpload;
      state.avatarDefault = payload.avatarDefault;
      state.favList = payload.favList;
    },
    updateUserInfo(state, { payload }: PayloadAction<Partial<IUser>>) {
      state.phone = payload.phone;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
    },
    addToFav(state, { payload }: PayloadAction<IProduct>) {
      state.favList?.push(payload);
    },
    removeFromFav(state, { payload }: PayloadAction<IProduct>) {
      state.favList = state.favList?.filter(
        (item) => item?.productId !== payload.productId
      );
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
