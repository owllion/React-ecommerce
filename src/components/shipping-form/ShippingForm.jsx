import React, { useState } from "react";

import { useForm } from "react-hook-form";
import styled, { css } from "styled-components";

import cl from "../../constants/color/color";

import { SectionTitle } from "../payment-form/style/PaymentForm.style";
import { baseInput, baseLabel } from "../ReviewForm";

import { countries } from "../../data/countries";
import { getValidationData } from "./getValidationData";

import Select from "../Select";
import FieldErr from "../Error/FieldErr";

const ShippingForm = () => {
  const [selectedCountry, setSelectedCountry] = useState("Taiwan");
  const [active, setActive] = useState(false);
  const handleSetCountry = (params) => {
    if (params) {
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
  } = useForm();

  const onSubmit = (data) => console.log(data);
  // console.log(errors);
  // console.log(getValidationData(["maxLength", "required", "alphabetical"]));

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
            w_full={true}
            listData={countries}
            handleActive={handleSetCountry}
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
const Label = styled.label`
  ${baseLabel}
  display:block;
  color: ${({ error }) => error && `${cl.red}`};
`;

const RowFlexBox = styled.div`
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
const LeftInputBox = styled.div`
  ${baseInputBox}
  margin-right: 2rem;
`;
const RightInputBox = styled.div`
  ${baseInputBox}
`;
export const SingleInputBox = styled.div`
  width: 100%;
  margin-top: 1.2rem;
`;
const Input = styled.input`
  ${baseInput}
  border-color: ${({ error }) => (error ? `${cl.red}` : `${cl.gray}`)};
`;
export default ShippingForm;
