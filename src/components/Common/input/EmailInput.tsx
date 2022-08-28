import { useFormContext } from "react-hook-form";
import { Input, Label } from "../../Product/Review/ReviewForm";
import { InputBox } from "src/components/Auth/auth.style";
import { getValidationData } from "../../Checkout/form/shipping-form/getValidationData";
import FieldErr from "../../error/FieldErr";
import AuthBtn from "../../Auth/AuthBtn";
import ApiError from "../../error/ApiError";

const EmailInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <InputBox>
      <Label>Email</Label>
      <Input
        error={errors.email}
        {...register("email", getValidationData(["required", "email"]))}
      />
      <FieldErr errors={errors} field="email" />
      <ApiError />
      <AuthBtn btnText="Send" />
    </InputBox>
  );
};

export default EmailInput;
