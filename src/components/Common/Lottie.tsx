import React from "react";
import ReactLottie from "react-lottie";

import styled from "styled-components";
import productNotFound from "../../assets/no-result/product-not-found.json";
import sleepingAnt from "../../assets/no-result/sleeping-ant.json";
import coupon from "../../assets/no-result/coupon.json";

const Lottie = ({ jsonName }: { jsonName: string }) => {
  const Json = {
    productNotFound,
    sleepingAnt,
    coupon,
  };
  const options = {
    loop: true,
    autoplay: true,
    animationData: Json[jsonName as keyof typeof Json],
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Container>
      <ReactLottie
        options={options}
        height={220}
        width={220}
        isPaused={false}
        isStopped={false}
      />
      <Text>No Data Found</Text>
    </Container>
  );
};

export default Lottie;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 4rem;
`;
const Text = styled.p`
  margin: 2rem 0;
  padding: 1rem;
  font-weight: 800;
`;
