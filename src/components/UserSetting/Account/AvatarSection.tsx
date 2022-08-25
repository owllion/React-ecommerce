import { ChangeEvent, useRef, useState } from "react";
import styled from "styled-components";
import { IoIosCamera } from "react-icons/io";
import { upload } from "src/api/user.api";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";

import { useAppSelector, useAppDispatch } from "src/store/hooks";
import { userActions } from "../../../store/slice/User.slice";
import ProgressBar from "../../Common/ProgressBar";

const AvatarSection = () => {
  const { avatarDefault, avatarUpload } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [progress, setProgress] = useState<number>(0);
  const fileSelect = useRef<HTMLInputElement>(null);

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
    const formData = new FormData();
    const file = (event.target as HTMLInputElement)?.files?.[0] as File;
    formData.append("file", file);
    formData.append("upload_preset", "ec-upload");

    if (checkIfFileExceedLimitation(file.size)) {
      toast.error("File size must be smaller than 1MB");
      return;
    }

    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUDNAME}/auto/upload`;

    const {
      data: { url },
    } = await axios.post(cloudinaryUrl, formData, {
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress(e) {
        console.log(e.loaded / e.total);
        setProgress(Math.floor((e.loaded / e.total) * 100));
      },
    });
    await uploadImage(url);
  };

  return (
    <LeftAvatar onClick={handleImageUpload}>
      <input
        ref={fileSelect}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={(e) => uploadImageHandler(e)}
      />
      <ProgressBar progress={progress} />
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
  );
};
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
export default AvatarSection;
