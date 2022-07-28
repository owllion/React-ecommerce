import React from "react";
import styled from "styled-components";

import { PayBtn } from "../Checkout/form/payment-form/PaymentForm.style";

const SaveBtn = () => {
  return <Save>SAVE</Save>;
};
export const Save = styled(PayBtn)`
  &:not([disabled]):active {
    transform: translate(2px, 2px);
  }
`;
export default SaveBtn;
