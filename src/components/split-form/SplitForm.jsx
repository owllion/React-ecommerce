import React from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import styled, { css } from "styled-components";

import { FormContainer, PayBtn } from "../payment-form/style/PaymentForm.style";
import { baseInput, baseLabel } from "../ReviewForm";
import { useOptions } from "./hooks/useOptions";
import { SingleInputBox } from "../shipping-form/ShippingForm";

const SplitForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const paymentHandler = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    console.log("[PaymentMethod]", payload);
  };

  return (
    <FormContainer onSubmit={paymentHandler}>
      <SingleInputBox>
        <Label>Card number</Label>
        <NumberInput
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={(event) => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </SingleInputBox>

      <SingleInputBox>
        <Label>Expiration date</Label>
        <ExpiryInput
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={(event) => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </SingleInputBox>

      <SingleInputBox>
        <Label>CVC</Label>
        <CvcInput
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={(event) => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </SingleInputBox>

      <PayBtn type="submit" disabled={!stripe || !elements}>
        Pay
      </PayBtn>
    </FormContainer>
  );
};

const Label = styled.label`
  ${baseLabel}
`;
const NumberInput = styled(CardNumberElement)`
  ${baseInput}
`;
const ExpiryInput = styled(CardExpiryElement)`
  ${baseInput}
`;
const CvcInput = styled(CardCvcElement)`
  ${baseInput}
`;
export default SplitForm;
