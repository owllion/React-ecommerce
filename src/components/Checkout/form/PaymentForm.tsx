import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";

import { SingleInputBox } from "./shipping-form/ShippingForm.style";
import { getValidationData } from "./shipping-form/getValidationData";
import FieldErr from "src/components/error/FieldErr";
import { Label, Input } from "./shipping-form/ShippingForm.style";

const PaymentForm = () => {
  const [keyDown, setKeyDown] = useState(false);
  const downHandler = ({ key }: { key: string }) => {
    if (key === "Backspace") setKeyDown(true);
    else setKeyDown(false);
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, []);

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const handleInsertSpace = (event: React.ChangeEvent<HTMLInputElement>) => {
    // d: all digits
    // g: all matched pairs
    // .{4} : 4 chr one pair($1-> make group)
    event.target.value = event.target.value
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };

  const handleInsertSlash = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!keyDown) {
      if (event.target.value.length === 2)
        event.target.value = event.target.value + "/";
      else if (
        event.target.value.length === 3 &&
        event.target.value.charAt(2) === "/"
      )
        event.target.value = event.target.value.replace("/", "");
    }
  };

  return (
    <>
      <SingleInputBox>
        <Label error={errors.number}>Card number</Label>
        <Input
          placeholder="4242 4242 4242 4242"
          maxLength={19}
          error={errors.number}
          {...register("number", {
            onChange: (e) => handleInsertSpace(e),
            ...getValidationData(["required", "cardNumber"]),
          })}
        />

        <FieldErr errors={errors} field="number" />
      </SingleInputBox>
      <SingleInputBox>
        <Label error={errors.expire}>Expiration date</Label>
        <Input
          placeholder="12/21"
          maxLength={5}
          error={errors.expire}
          {...register("expire", {
            onChange: (e) => handleInsertSlash(e),
            ...getValidationData(["required", "cardExpiration"]),
          })}
        />
        <FieldErr errors={errors} field="expire" />
      </SingleInputBox>
      <SingleInputBox>
        <Label>CVC</Label>
        <Input
          placeholder="321"
          maxLength={3}
          error={errors.cvc}
          {...register("cvc", {
            ...getValidationData(["required", "numeric"]),
          })}
        />
        <FieldErr errors={errors} field="cvc" />
      </SingleInputBox>
    </>
  );
};

export default PaymentForm;
