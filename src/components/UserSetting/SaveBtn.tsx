import React from "react";
import styled from "styled-components";

import { PayBtn } from "../Checkout/form/payment-form/PaymentForm.style";
import { useAppSelector } from "src/store/hooks";

const SaveBtn = () => {
  const { isLoading } = useAppSelector((state) => state.common);

  return <Save disabled={isLoading}>{isLoading ? "loading" : "SAVE"}</Save>;
};
export const Save = styled(PayBtn)`
  &:not([disabled]):active {
    transform: translate(2px, 2px);
  }
`;
export default SaveBtn;
