import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../interface/product.interface";
import { IUser } from "../../interface/user.interface";
import { IUserInfo } from "../actions/auth/signInOrSignUp.action";

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
    setFavList(state, { payload }: PayloadAction<IProduct[]>) {
      state.favList = payload;
    },
    updateFavListLength(state, { payload }: PayloadAction<number>) {
      console.log({ payload });
      const array = [...Array(payload)];
      console.log([...Array(1)], "這是array");
      array.forEach((_) => array.push({ name: "rr" }));
      state.favList = state.favList?.concat(array);
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
