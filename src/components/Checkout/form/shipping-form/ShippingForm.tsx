import React, { useState } from "react";

import { useForm, SubmitHandler, FieldError } from "react-hook-form";
import styled, { css } from "styled-components";

import cl from "src/constants/color/color";

import { SectionTitle } from "../payment-form/PaymentForm.style";
import { baseInput, baseLabel } from "src/components/Product/Review/ReviewForm";

import { countries } from "src/data/countries";
import { getValidationData } from "./getValidationData";

import Select from "src/components/Product/Select";
import FieldErr from "src/components/error/FieldErr";

interface FormValue {
  firstName: string;
  lastName: string;
  address: string;
  state: string;
  zip: number;
}

const ShippingForm = () => {
  const [selectedCountry, setSelectedCountry] = useState("Taiwan");
  const [active, setActive] = useState(false);
  const handleSetCountry = (params: { name: string; val?: string }) => {
    if (Object.keys(params).length) {
      setSelectedCountry(params.name);
      setActive(false);
      return;
    }
    setActive(!active);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();

  const onSubmit: SubmitHandler<FormValue> = (data) => console.log(data);
  console.log(errors);

  return (
    <ShippingContainer>
      <SectionTitle>SHIPPING ADDRESS</SectionTitle>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <RowFlexBox>
          <LeftInputBox>
            <Label error={errors.firstName}>First Name</Label>
            <Input
              error={errors.firstName}
              {...register(
                "firstName",
                getValidationData(["maxLength", "required", "alphabetical"])
              )}
            />
            <FieldErr errors={errors} field="firstName" />
          </LeftInputBox>

          <RightInputBox>
            <Label error={errors.lastName}>Last Name</Label>
            <Input
              error={errors.lastName}
              {...register(
                "lastName",
                getValidationData(["required", "alphabetical"])
              )}
            />
            <FieldErr errors={errors} field="lastName" />
          </RightInputBox>
        </RowFlexBox>

        <SingleInputBox>
          <Label>Country</Label>
          <Select
            fullWidth={true}
            listData={countries}
            handleSetSelected={handleSetCountry}
            selectedName={selectedCountry}
            active={active}
          />
        </SingleInputBox>

        <SingleInputBox>
          <Label>Address</Label>
          <Input
            error={errors.address}
            {...register("address", getValidationData(["required"]))}
          />
          <FieldErr errors={errors} field="address" />
        </SingleInputBox>

        <RowFlexBox>
          <LeftInputBox>
            <Label error={errors.state}>State/County</Label>
            <Input
              error={errors.state}
              {...register(
                "state",
                getValidationData(["required", "alphabetical"])
              )}
            />
            <FieldErr errors={errors} field="state" />
          </LeftInputBox>
          <RightInputBox>
            <Label error={errors.zip}>Zip code</Label>
            <Input
              error={errors.zip}
              {...register("zip", getValidationData(["required", "numeric"]))}
            />
            <FieldErr errors={errors} field="zip" />
          </RightInputBox>
        </RowFlexBox>

        <button type="submit">submit</button>
      </FormContainer>
    </ShippingContainer>
  );
};
const ShippingContainer = styled.div``;
const FormContainer = styled.form``;
const Label = styled.label<{ error?: FieldError }>`
  ${baseLabel}
  display:block;
  color: ${({ error }) => error && `${cl.red}`};
`;

export const RowFlexBox = styled.div`
  display: flex;
  margin-top: 1.2rem;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const baseInputBox = css`
  width: 50%;
  @media (max-width: 500px) {
    width: 100%;
    margin-right: 0;
    margin-top: 1.2rem;
  }
`;
export const LeftInputBox = styled.div`
  ${baseInputBox}
  margin-right: 2rem;
`;
export const RightInputBox = styled.div`
  ${baseInputBox}
`;
export const SingleInputBox = styled.div`
  width: 100%;
  margin-top: 1.2rem;
`;
const Input = styled.input<{ error?: FieldError }>`
  ${baseInput}
  border-color: ${({ error }) => (error ? `${cl.red}` : `${cl.gray}`)};
`;
export default ShippingForm;