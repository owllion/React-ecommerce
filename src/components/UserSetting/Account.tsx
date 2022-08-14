import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { IoIosCamera } from "react-icons/io";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

import { SingleInputBox } from "../Checkout/form/shipping-form/ShippingForm.style";
import { userInfoModify } from "../../api/user.api";
import SectionTitle from "./SectionTitle";
import SaveBtn from "./SaveBtn";
import FieldErr from "../../components/error/FieldErr";
import { Label, Input } from "../Auth/Registration";
import { getValidationData } from "../Checkout/form/shipping-form/getValidationData";
import { useAppSelector, useAppDispatch } from "src/store/hooks";
import { userActions } from "../../store/slice/User.slice";
import { commonActions } from "../../store/slice/Common.slice";

interface FormValue {
  firstName: string;
  lastName: string;
  phone: string | null;
}

const Account = () => {
  const { email, firstName, lastName, phone, avatarDefault, avatarUpload } =
    useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    defaultValues: {
      firstName,
      lastName,
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
        <LeftAvatar>
          <DropAvatarBox avatar={avatarUpload || avatarDefault}>
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
            {/* <Input readOnly {...register("email")} /> */}
            <Input value={email} disabled />
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
    /* padding-left: 0.8rem; */
  }
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 5rem;
`;
const DropAvatarBox = styled.div<{ avatar: string | undefined }>`
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
