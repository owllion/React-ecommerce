import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import cl from "../constants/color/color";
import DesktopCartItem from "../components/Checkout/Cart/DesktopCartItem";
import TabletCartItem from "../components/Checkout/Cart/TabletCartItem";
import { getNormalList } from "../api/user.api";
import { IProduct } from "../interface/product.interface";

interface IResult {
  data: { cartList: IProduct[] };
}

const Cart = () => {
  const [cartList, setCartList] = useState<IProduct[]>([]);
  const getCartList = async () => {
    try {
      const {
        data: { cartList },
      }: IResult = await getNormalList({ type: "cartList" });
      console.log({ cartList });
      setCartList(cartList);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCartList();
  }, []);
  return (
    <Container>
      <Wrapper>
        <CartContent>
          <Title>Cart</Title>
          <CartTableContainer>
            <CartTableHeader>
              <HeaderItem>Product</HeaderItem>
              <Item2>Price</Item2>
              <Item3>Quantity</Item3>
              <Item4>Subtotal</Item4>
              <Item5>Remove</Item5>
            </CartTableHeader>
            <SingleItemContainer>
              <DesktopCartItem cartList={cartList} />
              <TabletCartItem cartList={cartList} />
            </SingleItemContainer>
          </CartTableContainer>

          <CheckInfoContainer>
            <TotalBox>
              <p>
                Total
                <span className="symbol">
                  $ <span className="price">285.00</span>
                </span>
              </p>
            </TotalBox>
          </CheckInfoContainer>

          <BtnSetBox>
            <BtnSetInnerBox>
              <ContinueShoppingBtn to={"/product-list"}>
                Back to shopping
              </ContinueShoppingBtn>
              <CheckoutBtn to={"/checkout/ship-and-pay"}>Checkout </CheckoutBtn>
            </BtnSetInnerBox>
          </BtnSetBox>
        </CartContent>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div``;
const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  padding: 2rem 5rem 4rem;
  @media (max-width: 768px) {
    padding: 2rem 0.9rem 4rem;
  }
  @media (max-width: 1330px) {
    padding: 2rem 1rem 4rem;
  }
  flex-direction: column;
`;
const CartContent = styled.div``;
export const Title = styled.h2`
  margin: 2rem 0;
  font-size: 2.4rem;
  @media (max-width: 1024px) {
    padding: 0 0 1.8rem;
    border-bottom: 5px solid #eaeaea;
    margin-bottom: 0;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: 1.2rem;
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
  font-size: 1rem;
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
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
  @media (max-width: 600x) {
    width: 50%;
  }
`;
const ContinueShoppingBtn = styled(Link)`
  ${baseBtn};
  border: 1px solid ${cl.dark};
  margin-right: 1.2rem;
  @media (max-width: 400px) {
    font-size: 0.8rem;
  }
`;
const CheckoutBtn = styled(Link)`
  ${baseBtn};
  color: ${cl.white};
  background: ${cl.dark};
`;
export default Cart;
