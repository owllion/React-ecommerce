import React from "react";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import {
  SectionTitle,
  SectionTitleBox,
  PaymentFormContainer,
  FormContainer,
  CardElementBox,
} from "./style/PaymentForm.style";

import SplitFrom from "../split-form/SplitForm";

const PaymentForm = () => {
  return (
    <PaymentFormContainer>
      <SectionTitleBox>
        <SectionTitle>Payment Info</SectionTitle>
      </SectionTitleBox>
      <FormContainer>
        <SplitFrom />
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
