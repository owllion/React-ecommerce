import React from "react";
import {
  SectionTitle,
  SectionTitleBox,
  PaymentFormContainer,
} from "./PaymentForm.style";

import SplitFrom from "../SplitForm";

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
