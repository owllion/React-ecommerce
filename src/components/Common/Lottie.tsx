import ReactLottie from "react-lottie";
import { motion } from "framer-motion";
import styled from "styled-components";

import { useMatchMedia } from "../../hooks/useMatchMedia";
import { productListMotion } from "../../lib/motion";
import noResult from "../../assets/no-result/no-result.json";
import sleepingAnt from "../../assets/no-result/sleeping-ant.json";
import sleep from "../../assets/no-result/sleep.json";
import coupon from "../../assets/no-result/coupon.json";
import noData from "../../assets/no-result/no-data.json";
import loading from "../../assets/loading/loading.json";
import loadingV2 from "../../assets/loading/loadingV2.json";
import productNotFound from "../../assets/no-result/product-not-found.json";
import productListLoading from "../../assets/loading/productListLoading.json";

const Lottie = ({ jsonName, text }: { jsonName: string; text?: string }) => {
  const Json = {
    productNotFound,
    noResult,
    sleepingAnt,
    sleep,
    coupon,
    noData,
    loading,
    loadingV2,
    productListLoading,
  };
  const options = {
    loop: true,
    autoplay: true,
    animationData: Json[jsonName as keyof typeof Json],
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const isTargetWidth = useMatchMedia("500px");
  return (
    <Container as={motion.div} {...productListMotion}>
      <ReactLottie
        options={options}
        height={isTargetWidth ? 180 : 220}
        width={isTargetWidth ? 180 : 220}
        isPaused={false}
        isStopped={false}
      />
      {text !== "noText" && <Text>{text || "No data found"}</Text>}
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
  margin: 0;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 800;
  text-align: center;
`;
