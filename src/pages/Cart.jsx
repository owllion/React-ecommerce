import React from "react";

import { IoMdTrash } from "react-icons/io";

import styled, { css } from "styled-components";
import cl from "../constants/color/color";

import PlusMinusBtn from "../components/PlusMinusBtn";

const Cart = () => {
  return (
    <Container>
      <Wrapper>
        <CartContent>
          <Title>Cart</Title>
          <CartTableContainer>
            <CartTableHeader>
              <HeaderItem>Shopping List</HeaderItem>
            </CartTableHeader>
            <SingleItemContainer>
              <DesktopSingleItemContainer>
                <ItemInfoContainer>
                  <ItemInfo>
                    <ItemInfoImgBox>
                      <ItemImg src={require(`../assets/category/cat1.jpg`)} />
                    </ItemInfoImgBox>
                    <ItemInfoTextBox>
                      <h3>raven cool Jacket</h3>
                      <ItemInfoColor>Black</ItemInfoColor>
                      <ItemInfoSize>Xl</ItemInfoSize>
                    </ItemInfoTextBox>
                    <ItemInfoCounterBox>
                      <PlusMinusBtn />
                    </ItemInfoCounterBox>
                    <ItemDeleteBox>
                      <IoMdTrash />
                    </ItemDeleteBox>
                  </ItemInfo>
                </ItemInfoContainer>
              </DesktopSingleItemContainer>

              <TabletSingleItemContainer></TabletSingleItemContainer>
            </SingleItemContainer>
          </CartTableContainer>

          <CheckInfoContainer>
            <TotalBox>
              <p>
                Total{" "}
                <span className="symbol">
                  $ <span className="price">285.00</span>{" "}
                </span>
              </p>
            </TotalBox>
          </CheckInfoContainer>

          <BtnSetBox>
            <BtnSetInnerBox>
              <ContinueShoppingBtn>Back to shopping</ContinueShoppingBtn>
              <CheckoutBtn>Checkout</CheckoutBtn>
            </BtnSetInnerBox>
          </BtnSetBox>
        </CartContent>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  @media (min-width: 1000px) {
    padding: 10rem 5rem;
  }
  padding: 5rem 1rem;
`;
const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  /* background-color: coral; */
  display: flex;
  padding: 30px 80px 60px;
  flex-direction: column;
`;
const CartContent = styled.div``;
const Title = styled.h2`
  margin: 2rem 0;
  font-size: 2.4rem;
  @media (max-width: 1024px) {
    padding: 0 0 1.8rem;
    border-bottom: 5px solid #eaeaea;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
const CartTableContainer = styled.div``;
const CartTableHeader = styled.div`
  height: 60px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  background: ${cl.lightGray};
  @media (max-width: 1024px) {
    display: none;
  }
`;
const HeaderItem = styled.div`
  padding: 0 2.5rem 0 1.2rem; //20px、兌換品項
  min-width: 500px;
  max-width: 500px;
  font-size: 1.6rem;
  font-weight: 600;
`;
const Item2 = styled.div`
  width: 15%; //點數
  min-width: 140px;
  flex-grow: 1;
  padding-right: 1.2rem; //20px
`;
const Item3 = styled.div`
  width: 15%; //數量
  min-width: 120px;
  flex-grow: 1;
  padding-right: 1.2rem; //20px
`;
const Item4 = styled.div`
  width: 15%; //小計
  min-width: 120px;
  flex-grow: 1;
  padding-right: 1.2rem; //20px
`;
const Item5 = styled.div`
  width: 10%; //刪除
  min-width: 65px;
  flex-grow: 1;
  padding-right: 1.2rem; //20px
  /* text-align: center; */
`;
const SingleItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid #d8d8d8;
`;
const DesktopSingleItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const ItemInfoContainer = styled.div`
  max-width: 500px;
  min-width: 500px;
  padding-right: 2.7rem;
`;
const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const ItemInfoImgBox = styled.div`
  max-width: 120px;
  min-width: 120px;
  height: 120px;
  margin-right: 1rem;
  /* position: relative; */
`;
const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;
const ItemInfoTextBox = styled.div`
  margin-right: 1.8rem;
  h3 {
    font-size: 1.6rem;
    /* margin: 0; */
    line-height: 1.3;
    margin-bottom: 0.9rem;
  }
`;
const basePTagStyle = css`
  line-height: 1.4;
  color: #515151;
  font-size: 1.3rem;
`;
const ItemInfoColor = styled.p`
  ${basePTagStyle};
  margin-bottom: 0.7rem; //10px
`;
const ItemInfoSize = styled.p`
  ${basePTagStyle}
`;
const ItemInfoCounterBox = styled.div`
  /* width: 20%; */
  min-width: 120px;
  flex-grow: 1;
  padding-right: 1.2rem; //20px 數量小記一樣!
`;
const ItemDeleteBox = styled.div`
  padding-right: 1.2rem;
  width: 10%;
  min-width: 65px;
  flex-grow: 1;
  text-align: center; //基本和header都一樣
  /* font-size:1.6rem */
`;
const TabletSingleItemContainer = styled.div`
  width: 100%;
  display: none;
  @media (max-width: 1024px) {
    display: block;
  }
`;

const CheckInfoContainer = styled.div`
  margin-top: 1.8rem;
`;
const TotalBox = styled.div`
  p {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 1.3rem;
    font-weight: bold;
    /* @media (max-width: 1024px) {
      font-size: 1.6rem;
    } */
    .symbol {
      padding-left: 1.2rem;
      font-size: 1rem;
      .price {
        font-size: 1.3rem;
      }
    }
  }
`;
const BtnSetBox = styled.div`
  margin-top: 1.2rem;
  @media (max-width: 1024px) {
    width: 100%;
    padding: 1.2rem 0.9rem;
    box-shadow: 0 0 8px 0 rgb(0 0 0 / 30%);
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    background: ${cl.white};
  }
`;
const BtnSetInnerBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const baseBtn = css`
  display: block;
  width: 200px;
  height: 50px;
  font-weight: 600;
  /* text-align: center; */
  cursor: pointer;
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 50%;
  }
`;
const ContinueShoppingBtn = styled.button`
  ${baseBtn};
  border: 1px solid ${cl.dark};
  margin-right: 1.2rem;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
const CheckoutBtn = styled.button`
  ${baseBtn};
  color: ${cl.white};
  background: ${cl.dark};
`;
export default Cart;
