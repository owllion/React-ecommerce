import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { Chip } from "../components/settings/OrderList";
import BackBtn from "../components/button/BackBtn";
import cl from "../constants/color/color";
import visa from "../assets/order/visa.png";
import OrderDetailSummary from "../components/settings/OrderDetailSummary";

const OrderDetail = () => {
  return (
    <Container>
      <Wrapper>
        <Main>
          <Top>
            <BackBtn />
            <TopDetailBox>
              <TopLeft>
                <span className="id">OrderID</span>
                <span>2206041AGQBVUG</span>
              </TopLeft>
              <TopRight>
                <OrderPlacedDate>27/06/2022</OrderPlacedDate>
                <OrderStatus>
                  <Chip>Completed</Chip>
                </OrderStatus>
              </TopRight>
            </TopDetailBox>
          </Top>
          <AddressAndPayment>
            <AddressDividerBox>
              <AddressDivider></AddressDivider>
            </AddressDividerBox>
            <ContentBox>
              <Left>
                <Title>Shipping Address</Title>
                <NameBox>
                  <FirstName>Zayn</FirstName>
                  <LastName>Malik</LastName>
                </NameBox>
                <AddressDetailBox>
                  <Address>
                    Taiwan Taouyan Longtang 32543 aouyan Longtang 32543 aouyan
                    Longtang 32543 aouyan Longtang 32543
                  </Address>
                </AddressDetailBox>
              </Left>
              <Right>
                <Title>Payment Method</Title>
                <FlexBox>
                  <ImgBox>
                    <Img src={visa} alt="visa" />
                  </ImgBox>
                  <CardNumber>**** 4242</CardNumber>
                </FlexBox>
              </Right>
            </ContentBox>
            <AddressDividerBox>
              <AddressDivider></AddressDivider>
            </AddressDividerBox>
          </AddressAndPayment>
          <OrderDetailSummary />
        </Main>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  padding: 9rem 2rem;
  @media (max-width: 767px) {
    padding: 4rem 0;
  }
`;
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1100px;
`;
const Main = styled.div``;
const Top = styled.div`
  padding: 20px 24px;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ContentBox = styled.div`
  display: flex;
  padding: 2rem 0;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 1;
  @media (min-width: 767px) {
    border-right: 1px solid ${cl.gray};
  }
  @media (max-width: 767px) {
    border-bottom: 1px solid ${cl.gray};
  }
`;
const Right = styled.div`
  flex: 1;
  @media (min-width: 767px) {
    padding-left: 2rem;
  }
  @media (max-width: 767px) {
    padding-top: 2rem;
  }
`;
const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;
const CardNumber = styled.span``;
const ImgBox = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 0.8rem;
`;
const Img = styled.img`
  width: 100%;
`;
const TopDetailBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 767px) {
    flex-direction: column;
  }
  margin-top: 2rem;
`;
const TopLeft = styled.div`
  padding: 1.2rem 0;
  .id {
    font-weight: 500;
    padding-right: 0.8rem;
  }
`;
const TopRight = styled.div`
  display: flex;
  align-items: center;
`;
const OrderPlacedDate = styled.span`
  margin-right: 0.5rem;
  border-right: 1px solid ${cl.textLightGray};
  padding-right: 0.8rem;
`;
const OrderStatus = styled.div`
  padding-left: 0.5rem;
`;
const AddressAndPayment = styled.section`
  padding: 0 1.2rem 1.2rem;
`;

const Title = styled.div`
  padding: 0 0 0.8rem;
  font-weight: 500;
  font-size: 1rem;
  padding-bottom: 1.5rem;
`;
const NameBox = styled.div`
  display: flex;
  margin-bottom: 0.2rem;
`;
const baseText = css`
  max-width: 100%;
  margin: 0 0 7px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(0, 0, 0, 0.8);
`;
const FirstName = styled.span`
  ${baseText}
  display: inline-block;
  margin-right: 0.5rem;
`;
const LastName = styled.span`
  ${baseText}
`;
const AddressDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;
const Address = styled.p`
  margin: 0;
  color: ${cl.textLightGray};
`;
const AddressDividerBox = styled.div`
  padding: 3px 0;
`;
const AddressDivider = styled.div`
  height: 0.1875rem;
  width: 100%;
  background-position-x: -1.875rem;
  background-size: 7.25rem 0.1875rem;
  background-image: repeating-linear-gradient(
    45deg,
    #6fa6d6,
    #ffc3ed 33px,
    transparent 0,
    transparent 41px,
    #f18d9b 0,
    #ff0024 74px,
    transparent 0,
    transparent 82px
  );
`;
export default OrderDetail;
