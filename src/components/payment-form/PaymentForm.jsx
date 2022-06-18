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
  PayBtn,
  PaymentFormContainer,
  FormContainer,
  CardElementBox,
} from "./style/PaymentForm.style";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (event) => {
    event.preventDefault();

    if (elements === null) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    console.log(paymentMethod, "method");
  };

  return (
    <PaymentFormContainer>
      <SectionTitleBox>
        <SectionTitle>Payment Info</SectionTitle>
      </SectionTitleBox>
      <FormContainer onSubmit={paymentHandler}>
        <CardElementBox>
          <CardElement />
        </CardElementBox>
        <PayBtn type="submit" disabled={!stripe || !elements}>
          Pay
        </PayBtn>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
