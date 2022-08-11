import React from "react";
import styled from "styled-components";
import { AxiosError } from "axios";
import { FiHeart } from "react-icons/fi";
import { IoIosHeart } from "react-icons/io";

import { useAppDispatch } from "../../store/hooks";
import { Icon } from "./SingleProduct";
import { useAppSelector } from "../../store/hooks";
import { addToFavApi, removeFromFavApi } from "src/api/user.api";
import toast from "react-hot-toast";
import { IProduct } from "../../interface/product.interface";
import { userActions } from "../../store/slice/User.slice";
import { commonActions } from "../../store/slice/Common.slice";

const Heart = ({ item }: { item: IProduct }) => {
  const dispatch = useAppDispatch();
  const { favList } = useAppSelector((state) => state.user);
  const { isLoading } = useAppSelector((state) => state.common);

  const getToken = () => localStorage.getItem("token");
  const isInList = () => {
    return favList?.find((fav) => fav?.productId === item.productId);
  };
  const addToFav = async () => {
    if (!getToken()) return toast.error("You need to login");
    try {
      dispatch(commonActions.setLoading(true));
      await addToFavApi({ productId: item.productId });
      dispatch(userActions.addToFav(item));
      toast.success("Add to Fav");
      dispatch(commonActions.setLoading(false));
    } catch (error) {
      dispatch(commonActions.setLoading(false));
      const errMsg = ((error as AxiosError).response?.data as { msg: string })
        .msg;
      toast.error(errMsg);
    }
  };

  const removeFromFav = async () => {
    if (!getToken()) return toast.error("You need to login");
    try {
      dispatch(commonActions.setLoading(true));
      await removeFromFavApi({ productId: item.productId });
      dispatch(userActions.removeFromFav(item));
      toast.success("Remove From Fav");
      dispatch(commonActions.setLoading(false));
    } catch (error) {
      dispatch(commonActions.setLoading(false));
      const errMsg = ((error as AxiosError).response?.data as { msg: string })
        .msg;
      toast.error(errMsg);
    }
  };
  return (
    <>
      <Icon
        onClick={() => (isInList() ? removeFromFav() : addToFav())}
        disabled={isLoading}
      >
        {isInList() ? <IoIosHeart /> : <FiHeart />}
      </Icon>
    </>
  );
};

export default Heart;
