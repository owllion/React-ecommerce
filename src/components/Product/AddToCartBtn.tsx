import styled from "styled-components";
import { AnyAction } from "@reduxjs/toolkit";

import addToCart from "../../store/actions/product/addToCart.action";
import { useAppDispatch } from "../../store/hooks";

interface IProps {
  productId: string;
  size: string;
}
const AddToCartBtn = ({ productId, size }: IProps) => {
  const dispatch = useAppDispatch();
  const handleAddToCart = async () => {
    try {
      await dispatch(
        addToCart({ productId, addOne: false, size }) as unknown as AnyAction
      );
    } catch (error) {
      console.log(error);
    }
  };
  return <Container onClick={() => handleAddToCart()}>Add To Cart</Container>;
};

const Container = styled.button`
  all: unset;
  width: 100px;
  height: 30px;
  font-size: 16px;
  background: transparent;
  border: none;
  position: relative;
  color: #f0f0f0;
  cursor: pointer;
  z-index: 1;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &::after,
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -99999;
    transition: all 0.4s;
  }

  &::before {
    transform: translate(0%, 0%);
    width: 100%;
    height: 100%;
    background: #28282d;
    border-radius: 10px;
  }

  &::after {
    transform: translate(10px, 10px);
    width: 35px;
    height: 35px;
    background: #ffffff15;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 50px;
  }

  &:hover::before {
    transform: translate(5%, 20%);
    width: 110%;
    height: 110%;
  }

  &:hover::after {
    border-radius: 10px;
    transform: translate(0, 0);
    width: 100%;
    height: 100%;
  }

  &:active::after {
    transition: 0s;
    transform: translate(0, 5%);
  }
`;

export default AddToCartBtn;
