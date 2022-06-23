import React from "react";
import styled from "styled-components";

import { PayBtn } from "../payment-form/style/PaymentForm.style";

const SaveBtn = ({ handleGetValues }) => {
  return <Save onClick={handleGetValues}>SAVE</Save>;
};
export const Save = styled(PayBtn)`
  &:not([disabled]):active {
    transform: translate(2px, 2px);
  }
`;
export default SaveBtn;
