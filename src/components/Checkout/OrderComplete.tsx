import React from "react";
import { useLottie } from "lottie-react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import cl from "../../constants/color/color";
import done from "../../assets/order/done.json";
import { ApplyBtn } from "../Checkout/CheckoutItemList";

const OrderComplete = () => {
  const navigate = useNavigate();
  const options = {
    animationData: done,
    loop: false,
    autoplay: true,
  };
  const { View } = useLottie(options);
  return (
    <Container>
      <Wrapper>
        <ImgBox>{View}</ImgBox>
        <RightBox>
          <Msg>
            Thank you for your purchase. We love having customers like you.
          </Msg>
          <RouteBtn onClick={() => navigate("/settings/order-list")}>
            Check My Order
          </RouteBtn>
        </RightBox>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem 0;
  margin-top: 2.5rem;
  @media (max-width: 767px) {
    padding: 2rem 1rem;
  }
`;
const Wrapper = styled.div`
  max-width: 800px;
  min-height: 50vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 5rem 4rem;
  @media (max-width: 768px) {
    padding: 2rem 0.9rem 4rem;
    flex-direction: column;
  }
  @media (max-width: 1330px) {
    padding: 2rem 1rem 4rem;
  }
`;
const ImgBox = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
  }
  svg {
    width: 100%;
    object-fit: contain;
  }
`;
const Msg = styled.p`
  font-weight: 800;
  font-size: 2rem;
  color: ${cl.green};
  text-align: center;
  margin: 1rem 0 4rem 0;
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;
const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const RouteBtn = styled(ApplyBtn)`
  width: 235px;
`;

export default OrderComplete;
