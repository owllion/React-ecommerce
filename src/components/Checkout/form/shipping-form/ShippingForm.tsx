import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { SectionTitle } from "../payment-form/PaymentForm.style";

import { countries } from "src/data/countries";
import { getValidationData } from "./getValidationData";

import Select from "src/components/Product/Select";
import FieldErr from "src/components/error/FieldErr";

import * as SC from "./ShippingForm.style";

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
    <SC.ShippingContainer>
      <SectionTitle>SHIPPING ADDRESS</SectionTitle>
      <SC.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <SC.RowFlexBox>
          <SC.LeftInputBox>
            <SC.Label error={errors.firstName}>First Name</SC.Label>
            <SC.Input
              error={errors.firstName}
              {...register(
                "firstName",
                getValidationData(["maxLength", "required", "alphabetical"])
              )}
            />
            <FieldErr errors={errors} field="firstName" />
          </SC.LeftInputBox>

          <SC.RightInputBox>
            <SC.Label error={errors.lastName}>Last Name</SC.Label>
            <SC.Input
              error={errors.lastName}
              {...register(
                "lastName",
                getValidationData(["required", "alphabetical"])
              )}
            />
            <FieldErr errors={errors} field="lastName" />
          </SC.RightInputBox>
        </SC.RowFlexBox>

        <SC.SingleInputBox>
          <SC.Label>Country</SC.Label>
          <Select
            fullWidth={true}
            listData={countries}
            handleSetSelected={handleSetCountry}
            selectedName={selectedCountry}
            active={active}
          />
        </SC.SingleInputBox>

        <SC.SingleInputBox>
          <SC.Label>Address</SC.Label>
          <SC.Input
            error={errors.address}
            {...register("address", getValidationData(["required"]))}
          />
          <FieldErr errors={errors} field="address" />
        </SC.SingleInputBox>

        <SC.RowFlexBox>
          <SC.LeftInputBox>
            <SC.Label error={errors.state}>State/County</SC.Label>
            <SC.Input
              error={errors.state}
              {...register(
                "state",
                getValidationData(["required", "alphabetical"])
              )}
            />
            <FieldErr errors={errors} field="state" />
          </SC.LeftInputBox>
          <SC.RightInputBox>
            <SC.Label error={errors.zip}>Zip code</SC.Label>
            <SC.Input
              error={errors.zip}
              {...register("zip", getValidationData(["required", "numeric"]))}
            />
            <FieldErr errors={errors} field="zip" />
          </SC.RightInputBox>
        </SC.RowFlexBox>

        <button>submit</button>
      </SC.FormContainer>
    </SC.ShippingContainer>
  );
};

export default ShippingForm;
