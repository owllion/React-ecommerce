import React from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import styled, { css } from "styled-components";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

import { FormContainer, PayBtn } from "../form/payment-form/PaymentForm.style";
import { baseInput, baseLabel } from "../../Product/Review/ReviewForm";
import { useOptions } from "src/hooks/useOptions";
import { SingleInputBox } from "../form/shipping-form/ShippingForm.style";
import { getValidationData } from "../form/shipping-form/getValidationData";

interface FormValue {
  number: number;
  expire: Date;
  cvc: number;
}

const SplitForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  // const paymentHandler = async (event) => {
  //   event.preventDefault();

  //   if (!stripe || !elements) return;

  //   const payload = await stripe.createPaymentMethod({
  //     type: "card",
  //     card: elements.getElement(CardNumberElement),
  //   });
  //   console.log("[PaymentMethod]", payload);
  // };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmit: SubmitHandler<FormValue> = (data) => console.log(data);
  console.log({ errors });
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <SingleInputBox>
        <Label>Card number</Label>

        <Controller
          name="number"
          control={control}
          rules={getValidationData(["required"])}
          render={({ field }) => <NumberInput {...field} />}
        />
      </SingleInputBox>
      <SingleInputBox>
        <Label>Expiration date</Label>

        <Controller
          name="expire"
          control={control}
          rules={getValidationData(["required"])}
          render={({ field }) => <ExpiryInput {...field} />}
        />
      </SingleInputBox>
      <SingleInputBox>
        <Label>CVC</Label>
        <Controller
          name="cvc"
          control={control}
          rules={getValidationData(["required"])}
          render={({ field }) => <CvcInput {...field} />}
        />
      </SingleInputBox>
      {/* <PayBtn type="submit">Pay</PayBtn> */}
    </FormContainer>
  );
};

const extraSpace = css`
  height: 48px;
  padding-top: 1rem;
`;
const Label = styled.label`
  ${baseLabel}
`;
const NumberInput = styled(CardNumberElement)`
  ${baseInput}
  ${extraSpace}
`;
const ExpiryInput = styled(CardExpiryElement)`
  ${baseInput}
  ${extraSpace}
`;
const CvcInput = styled(CardCvcElement)`
  ${baseInput}
  ${extraSpace}
`;
export default SplitForm;
