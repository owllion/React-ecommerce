import React, { useState } from "react";
import styled from "styled-components";

import { Title } from "./Cart";
import CheckoutItemList from "../components/Checkout/CheckoutItemList";
import PaymentForm from "../components/Checkout/form/payment-form/PaymentForm2";
import ShippingForm from "../components/Checkout/form/shipping-form/ShippingForm";

const ShipAndPay = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Checkout</Title>
        <ContentContainer>
          <LeftContentContainer>
            <ShippingForm />
            {/* <PaymentForm /> */}
          </LeftContentContainer>
          <RightContentContainer>
            <CheckoutItemList />
          </RightContentContainer>
        </ContentContainer>
      </Wrapper>
    </Container>
  );
};
const Container = styled.div`
  /* padding: 7rem 0; */
`;
const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  /* background-color: coral; */
  display: flex;
  /* padding: 2rem 5rem 4rem;
  @media (max-width: 768px) {
    padding: 2rem 0.9rem 4rem;
  }
  @media (max-width: 1330px) {
    padding: 2rem 1rem 4rem;
  } */
  padding: 0 5rem;
  @media (max-width: 1330px) {
    padding: 0 2rem;
  }
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
  flex-direction: column;
`;
const ContentContainer = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
const LeftContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  @media (min-width: 1024px) {
    margin-right: 2rem;
  }
  @media (max-width: 1024px) {
    order: 2;
  }
`;
const RightContentContainer = styled.div`
  flex-basis: 50%;
  padding-left: 3rem;
  @media (max-width: 1024px) {
    padding-left: 0;
    /* order: 1; */
  }
`;
export default ShipAndPay;
