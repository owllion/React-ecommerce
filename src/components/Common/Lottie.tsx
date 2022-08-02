import React from "react";
import ReactLottie from "react-lottie";
import { motion } from "framer-motion";
import styled from "styled-components";

import { productListMotion } from "../../lib/motion";
import productNotFound from "../../assets/no-result/product-not-found.json";
import sleepingAnt from "../../assets/no-result/sleeping-ant.json";
import coupon from "../../assets/no-result/coupon.json";
import noData from "../../assets/no-result/no-data.json";
const Lottie = ({ jsonName, text }: { jsonName: string; text?: string }) => {
  const Json = {
    productNotFound,
    sleepingAnt,
    coupon,
    noData,
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
    <Container as={motion.div} {...productListMotion}>
      <ReactLottie
        options={options}
        height={220}
        width={220}
        isPaused={false}
        isStopped={false}
      />
      <Text>{text || "No data found"}</Text>
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
