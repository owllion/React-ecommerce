import React from "react";
import {
  SectionTitle,
  SectionTitleBox,
  PaymentFormContainer,
} from "./style/PaymentForm.style";

import SplitFrom from "../split-form/SplitForm";

const PaymentForm = () => {
  return (
    <PaymentFormContainer>
      <SectionTitleBox>
        <SectionTitle>Payment Info</SectionTitle>
      </SectionTitleBox>
      <SplitFrom />
    </PaymentFormContainer>
  );
};

export default PaymentForm;
