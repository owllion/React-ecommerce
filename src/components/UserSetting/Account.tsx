import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { IoIosCamera } from "react-icons/io";

import { SingleInputBox } from "../Checkout/form/shipping-form/ShippingForm.style";
import SectionTitle from "./SectionTitle";
import SaveBtn from "./SaveBtn";
import avatar from "../../assets/avatar/avatar1.svg";
import FieldErr from "../../components/error/FieldErr";
import { Label, Input } from "../Auth/Registration";
import { getValidationData } from "../Checkout/form/shipping-form/getValidationData";
import { useAppSelector } from "src/store/hooks";

interface FormValue {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const Account = () => {
  const { email, firstName, lastName, phone } = useAppSelector(
    (state) => state.user
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    defaultValues: {
      firstName,
      lastName,
      email,
      phone,
    },
  });

  const onSubmit: SubmitHandler<FormValue> = (data) => console.log(data);
  console.log(errors);

  return (
    <Container>
      <SectionTitle title="Account" />
      <Wrapper>
        <LeftAvatar>
          <DropAvatarBox avatar={avatar}>
            <CameraIconBox>
              <IoIosCamera />
            </CameraIconBox>
          </DropAvatarBox>
        </LeftAvatar>

        <RightForm onSubmit={handleSubmit(onSubmit)}>
          <SingleInputBox>
            <Label error={errors.firstName}>First Name</Label>
            <Input
              error={errors.firstName}
              {...register(
                "firstName",
                getValidationData(["required", "maxLength", "alphabetical"])
              )}
            />
            <FieldErr errors={errors} field="firstName" />
          </SingleInputBox>
          <SingleInputBox>
            <Label error={errors.lastName}>Last Name</Label>
            <Input
              error={errors.lastName}
              {...register(
                "lastName",
                getValidationData(["required", "alphabetical"])
              )}
            />
            <FieldErr errors={errors} field="lastName" />
          </SingleInputBox>
          <SingleInputBox>
            <Label>Email</Label>
            <Input readOnly {...register("email")} />
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
        </RightForm>
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
const LeftAvatar = styled.div`
  width: 50%;
  @media (max-width: 700px) {
    width: 100%;
    padding-left: 0.8rem;
  }
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 5rem;
`;
const DropAvatarBox = styled.div<{ avatar: string }>`
  position: relative;
  cursor: pointer;
  width: 300px;
  height: 300px;
  @media (max-width: 400px) {
    width: 250px;
    height: 250px;
  }
  border-radius: 8px;
  background-image: ${(props) => `url(${props.avatar})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.6s;
  &:hover {
    transform: translateY(-5px);
  }
`;
const CameraIconBox = styled.div`
  position: absolute;
  top: 5px;
  left: 10px;
  font-size: 2rem;
`;
const RightForm = styled.form`
  width: 50%;
  padding: 2rem;
  @media (max-width: 700px) {
    width: 100%;
    padding: 0 0 4.5rem 0;
  }
`;

export default Account;
