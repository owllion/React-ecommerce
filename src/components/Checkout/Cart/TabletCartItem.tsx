import React from "react";
import { IoMdTrash } from "react-icons/io";

import PlusMinusBtn from "../../Common/PlusMinusBtn";
import styled, { css } from "styled-components";
import { IProps } from "./DesktopCartItem";
const TabletCartItem = ({ cartList }: IProps) => {
  return (
    <TabletSingleItemContainer>
      {cartList.map((item) => (
        <>
          <ItemInfo key={item.productId}>
            <ItemInfoBox>
              <ItemInfoImgBox>
                <ItemImg src={item.imageList[0]} />
              </ItemInfoImgBox>
              <ItemInfoTextBox>
                <h3>{item.productName}</h3>
              </ItemInfoTextBox>
            </ItemInfoBox>
            <ItemDeleteBox>
              <IoMdTrash />
            </ItemDeleteBox>
          </ItemInfo>
          <ItemInfoTextBox>
            <ItemInfoColor>Black</ItemInfoColor>
            <ItemInfoSize>{item.size}</ItemInfoSize>
          </ItemInfoTextBox>

          <ItemInfoPriceBox>
            <ItemInfoPrice>${item.price}</ItemInfoPrice>
            <CounterAndSubtotalBox>
              <ItemInfoCounterBox>
                <PlusMinusBtn />
              </ItemInfoCounterBox>
              <ItemInfoSubTotalBox>
                <ItemInfoSubTotal>${item.price * item.qty!}</ItemInfoSubTotal>
              </ItemInfoSubTotalBox>
            </CounterAndSubtotalBox>
          </ItemInfoPriceBox>
        </>
      ))}
    </TabletSingleItemContainer>
  );
};
const TabletSingleItemContainer = styled.div`
  width: 100%;
  display: none;
  @media (max-width: 1024px) {
    display: block;
  }
`;

export const ItemInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem; //25px
`;
export const ItemInfoBox = styled.div`
  display: flex;
  width: 100%;
`;
export const ItemInfoImgBox = styled.div`
  width: 27.5vw;
  max-width: 120px;
  min-width: 7rem;
  height: 120px;
  min-height: 5rem;
  flex-grow: 1;
  margin-right: 1.2rem; //20px
`;
export const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;
export const ItemInfoTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  h3 {
    @media (min-width: 900px) {
      font-size: 1.2rem;
      margin-right: 1.8rem;
    }
    margin: 0;
    line-height: 1.3;
    font-size: 0.9rem;
  }
`;
const basePTagStyle = css`
  line-height: 1.4;
  color: #515151;
  font-size: 0.9rem;
  margin: 0;
`;
export const ItemInfoColor = styled.p`
  ${basePTagStyle};
`;
export const ItemInfoSize = styled.p`
  ${basePTagStyle}
`;
const ItemDeleteBox = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2%;
  cursor: pointer;
`;

const ItemInfoPriceBox = styled.div`
  width: 15%;
  min-width: 140px;
  flex-grow: 1;
  padding-right: 1.2rem;
`;
const ItemInfoPrice = styled.p``;

const CounterAndSubtotalBox = styled.div`
  display: flex;
  align-items: center;
  /*justify-content: center; */
  width: 100%;
`;
const ItemInfoSubTotalBox = styled.div`
  width: 15%;
  min-width: 120px;
  flex-grow: 1;
  padding-right: 1.2rem;
`;
const ItemInfoSubTotal = styled.p`
  @media (max-width: 600px) {
    padding-top: 0.5rem;
  }
`;
const ItemInfoCounterBox = styled.div`
  width: 15%;
  min-width: 120px;
  flex-grow: 1;
  padding-right: 1.2rem; //20px 數量小記一樣!
  padding-bottom: 0.8rem;
`;
// const ItemDeleteBox = styled.div`
//   padding-right: 3rem;
//   width: 10%;
//   min-width: 65px;
//   flex-grow: 1;
//   text-align: center; //基本和header都一樣
//   font-size: 2rem;
// `;
export default TabletCartItem;
