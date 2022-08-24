import { ChangeEvent, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import { IoIosCamera } from "react-icons/io";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";

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
import { upload } from "src/api/user.api";

interface FormValue {
  firstName: string;
  lastName: string;
  fullName: string;
  phone: string | null;
}

const Account = () => {
  const {
    email,
    firstName,
    lastName,
    fullName,
    phone,
    avatarDefault,
    avatarUpload,
  } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const fileSelect = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<File | undefined>();
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

  const handleImageUpload = () => {
    if (fileSelect) fileSelect.current?.click();
  };

  const checkIfFileExceedLimitation = (size: number) => size > 1000000;

  const uploadImage = async (url: string) => {
    try {
      await upload({ url });
      dispatch(userActions.updateAvatarUpload(url));
    } catch (error) {
      const err = ((error as AxiosError).response?.data as { msg: string }).msg;
      toast.error(err);
    }
  };
  const uploadImageHandler = async (event: ChangeEvent) => {
    const file = (event.target as HTMLInputElement)?.files?.[0] as File;

    const formData = new FormData();
    formData.append("file", file);

    if (checkIfFileExceedLimitation(file.size)) {
      toast.error("File size must be smaller than 1MB");
      return;
    }

    formData.append("upload_preset", "ec-upload");

    const {
      data: { url },
    } = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUDNAME}/auto/upload`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: function (e) {
          console.log(e.loaded / e.total);
        },
      }
    );
    // console.log(res.data);
    await uploadImage(url);
  };

  return (
    <Container>
      <SectionTitle title="Account" />
      <Wrapper>
        <LeftAvatar onClick={handleImageUpload}>
          <input
            ref={fileSelect}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => uploadImageHandler(e)}
          />
          <DropAvatarBox>
            <Avatar
              referrerPolicy="no-referrer"
              src={avatarUpload || avatarDefault}
              alt="avatar"
            />

            <CameraIconBox>
              <IoIosCamera />
            </CameraIconBox>
          </DropAvatarBox>
        </LeftAvatar>

        <RightForm onSubmit={handleSubmit(onSubmit)}>
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
            <Label>Email</Label>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 3.8rem;
`;
const DropAvatarBox = styled.div<{ avatar?: string | undefined }>`
  position: relative;
  margin-right: 1rem;
  cursor: pointer;
  width: 300px;
  height: 300px;
  @media (max-width: 400px) {
    width: 250px;
    height: 250px;
  }
  transition: all 0.6s;
  &:hover {
    transform: translateY(-5px);
  }
`;
const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
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
