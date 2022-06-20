import React from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import styled, { css } from "styled-components";
import { useForm, Controller } from "react-hook-form";

import { FormContainer, PayBtn } from "../payment-form/style/PaymentForm.style";
import { baseInput, baseLabel } from "../ReviewForm";
import { useOptions } from "./hooks/useOptions";
import { SingleInputBox } from "../shipping-form/ShippingForm";
import { getValidationData } from "../shipping-form/getValidationData";

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
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log({ errors });
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <SingleInputBox>
        <Label>Card number</Label>
        {/* <NumberInput
          options={options}
          error={errors.number}
          {...register("number", getValidationData(["required"]))}
        /> */}
        <Controller
          name="number"
          defaultValue=""
          control={control}
          rules={getValidationData(["required"])}
          render={({ field }) => <NumberInput {...field} />}
        />
      </SingleInputBox>
      <SingleInputBox>
        <Label>Expiration date</Label>
        {/* <ExpiryInput
          options={options}
          onChange={(event) => {
            console.log("ex", event);
          }}
        /> */}
        <Controller
          name="expire"
          defaultValue=""
          control={control}
          rules={getValidationData(["required"])}
          render={({ field }) => <ExpiryInput {...field} />}
        />
      </SingleInputBox>
      <SingleInputBox>
        <Label>CVC</Label>
        <Controller
          name="cvc"
          defaultValue=""
          control={control}
          rules={getValidationData(["required"])}
          render={({ field }) => <CvcInput {...field} />}
        />
        {/* <CvcInput
          options={options}
          onChange={(event) => {
            console.log("cvc", event);
          }}
        /> */}
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
