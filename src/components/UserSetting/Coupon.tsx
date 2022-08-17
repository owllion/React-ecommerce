import React from "react";
import styled from "styled-components";

const Coupon = () => {
  return <CouponItem />;
};

const CouponItem = styled.div`
  -webkit-mask-image: radial-gradient(
      circle at 143px 10px,
      transparent 10px,
      red 10.5px
    ),
    radial-gradient(closest-side circle at 50%, red 99%, transparent 100%);
  -webkit-mask-size: 100%, 4px 10px;
  -webkit-mask-repeat: repeat, repeat-y;
  -webkit-mask-position: 0 -10px, 141px;
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
`;
export default Coupon;
