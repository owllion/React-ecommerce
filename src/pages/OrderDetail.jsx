import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import cl from "../constants/color/color";
import visa from "../assets/order/visa.png";

const OrderDetail = () => {
  return (
    <Container>
      <Wrapper>
        <Main>
          <Top>
            <BackBtnBox> 回上一頁</BackBtnBox>
            <IdAndStatusBox>
              <span>ORDER ID 2206041AGQBVUG</span>
              <span>|</span>
              <span>Completed</span>
            </IdAndStatusBox>
          </Top>
          <AddressAndPayment>
            <ContentBox>
              <Left>
                <Title>Shipping Address</Title>
                <NameBox>
                  <FirstName>Zayn</FirstName>
                  <LastName>Malik</LastName>
                </NameBox>
                <AddressDetailBox>
                  <Address>Taiwan Taouyan Longtang 32543</Address>
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
        </Main>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  padding: 10rem 2rem;
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
  justify-content: space-between;
  align-items: center;
`;
const ContentBox = styled.div`
  display: flex;
  padding-bottom: 1rem;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 1;
  border-right: 1px solid ${cl.gray};
`;
const Right = styled.div`
  flex: 1;
  padding-left: 2rem;
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
const BackBtnBox = styled.div``;
const IdAndStatusBox = styled.div`
  display: flex;
  font-size: 0.9rem;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
const AddressAndPayment = styled.section`
  padding: 20px 24px 24px;
`;

const Title = styled.div`
  padding: 0 0 0.8rem;
  font-weight: 500;
  font-size: 1.3rem;
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
    #6fa6d6 33px,
    transparent 0,
    transparent 41px,
    #f18d9b 0,
    #f18d9b 74px,
    transparent 0,
    transparent 82px
  );
`;
export default OrderDetail;
