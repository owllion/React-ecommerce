import { ChangeEvent, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";

import { SingleInputBox } from "../../Checkout/form/shipping-form/ShippingForm.style";
import { userInfoModify } from "../../../api/user.api";
import SectionTitle from "../SectionTitle";
import SaveBtn from "../SaveBtn";
import FieldErr from "../../error/FieldErr";
import { Label, Input } from "../../Auth/Registration";
import { getValidationData } from "../../Checkout/form/shipping-form/getValidationData";
import { useAppSelector, useAppDispatch } from "src/store/hooks";
import { userActions } from "../../../store/slice/User.slice";
import { commonActions } from "../../../store/slice/Common.slice";
import AvatarSection from "./AvatarSection";

interface FormValue {
  firstName: string;
  lastName: string;
  fullName: string;
  phone: string | null;
}

const Account = () => {
  const { email, firstName, lastName, fullName, phone } = useAppSelector(
    (state) => state.user || {}
  );
  const dispatch = useAppDispatch();

  const loginType = localStorage.getItem("loginType");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    defaultValues: {
      firstName,
      lastName,
      fullName,
      phone,
    },
  });

  const onSubmit: SubmitHandler<FormValue> = async (data) => {
    try {
      dispatch(commonActions.setLoading(true));
      const params = { ...data, phone: data.phone ? data.phone : null };

      await userInfoModify(params);
      dispatch(userActions.updateUserInfo(params));
      dispatch(commonActions.setLoading(false));
      toast.success("Profile updated successfully");
    } catch (error) {
      dispatch(commonActions.setLoading(false));

      const err = error as AxiosError;
      if (err.response && err.response.data) {
        const errMsg = (err.response?.data as { msg: string }).msg;
        toast.error(errMsg);
      }
    }
  };
  console.log(errors);

  return (
    <Container>
      <SectionTitle title="Account" />
      <Wrapper>
        <AvatarSection />
        <FormSection onSubmit={handleSubmit(onSubmit)}>
          {loginType === "email" ? (
            <>
              <SingleInputBox>
                <Label error={errors.firstName}>First Name</Label>
                <Input
                  error={errors.firstName}
                  {...register(
                    "firstName",
                    getValidationData(["required", "maxLength"])
                  )}
                />
                <FieldErr errors={errors} field="firstName" />
              </SingleInputBox>
              <SingleInputBox>
                <Label error={errors.lastName}>Last Name</Label>
                <Input
                  error={errors.lastName}
                  {...register("lastName", getValidationData(["required"]))}
                />
                <FieldErr errors={errors} field="lastName" />
              </SingleInputBox>
            </>
          ) : (
            <SingleInputBox>
              <Label error={errors.fullName}>Full Name</Label>
              <Input
                error={errors.fullName}
                {...register("fullName", getValidationData(["required"]))}
              />
              <FieldErr errors={errors} field="fullName" />
            </SingleInputBox>
          )}
          <SingleInputBox>
            <Label htmlFor="email">Email</Label>
            <Input value={email} disabled id="email" />
          </SingleInputBox>
          <SingleInputBox>
            <Label error={errors.phone}>Phone</Label>
            <Input
              error={errors.phone}
              {...register("phone", getValidationData(["phone"]))}
            />
            <FieldErr errors={errors} field="phone" />
          </SingleInputBox>
          <SaveBtn />
        </FormSection>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
    padding: 0;
  }
`;
const FormSection = styled.form`
  width: 50%;
  padding: 2rem;
  @media (max-width: 700px) {
    width: 100%;
    padding: 0 0 4.5rem 0;
  }
`;

export default Account;
