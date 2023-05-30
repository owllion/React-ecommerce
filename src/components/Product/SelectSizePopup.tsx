import React, { useState } from "react";
import styled from "styled-components";
import { AnyAction } from "@reduxjs/toolkit";

import cl from "../../constants/color/color";
import { ClearBtn } from "./Filter";
import { Backdrop } from "../Common/SideNav";
import SizeSelect from "./SizeSelect";
import { commonActions } from "../../store/slice/Common.slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import addToCart from "../../store/actions/product/addToCart.action";

const sizeList = ["XS", "S", "M", "L", "XL"];

const Popup = () => {
  const dispatch = useAppDispatch();
  const { currentProductId } = useAppSelector((state) => state.common || {});
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);

  const setSizeHandler = (index: number) => {
    setSelectedSizeIndex(index);
  };

  const handleShowPopup = (event: React.MouseEvent) => {
    (event.target as HTMLDivElement)?.id === "container" &&
      dispatch(commonActions.setShowPopup(false));
  };
  const handleAddToCart = async () => {
    try {
      await dispatch(
        addToCart({
          id: currentProductId,
          addOne: true,
          size: sizeList[selectedSizeIndex],
        }) as unknown as AnyAction
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Backdrop />
      <Container onClick={(e) => handleShowPopup(e)} id="container">
        <Wrapper>
          <Title>Please select your size</Title>
          <SizeSelect
            isPopup={true}
            setSizeHandler={setSizeHandler}
            selectedSizeIndex={selectedSizeIndex}
          />
          <CheckBtn onClick={() => handleAddToCart()}>Add To Cart</CheckBtn>
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 90%;
  @media (min-width: 500px) {
    width: 500px;
  }
  border: 1px solid ${cl.lightGray};
  padding: 0.3rem 1.5rem;
  background: ${cl.white};
  border-radius: 10px;
`;
const Title = styled.h2`
  text-align: center;
  margin: 1.2rem;
`;
const CheckBtn = styled(ClearBtn)`
  margin: 1rem 0;
  cursor: pointer;
`;

export default Popup;
