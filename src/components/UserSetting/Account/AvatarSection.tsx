import { ChangeEvent, useRef, useState } from "react";
import styled from "styled-components";
import { IoIosCamera } from "react-icons/io";
import { upload } from "src/api/user.api";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";

import { useAppSelector, useAppDispatch } from "src/store/hooks";
import { userActions } from "../../../store/slice/User.slice";
import ProgressBar from "../../Common/progressBar/ProgressBar";
import { Info as Backdrop } from "../../Product/SingleProduct";
import { commonActions } from "../../../store/slice/Common.slice";

const AvatarSection = () => {
  const { default_avatar, upload_avatar } = useAppSelector(
    (state) => state.user || {}
  );
  const { uploadImgLoading } = useAppSelector((state) => state.common || {});
  const dispatch = useAppDispatch();
  const [progress, setProgress] = useState<number>(0);
  const fileSelect = useRef<HTMLInputElement>(null);

  const handleImageUpload = () => {
    if (fileSelect) fileSelect.current?.click();
  };
  const checkIfFileExceedLimitation = (size: number) => size > 1500000;

  const uploadImage = async (url: string) => {
    try {
      await upload({ url });
      dispatch(userActions.updateAvatarUpload(url));
      dispatch(commonActions.setUploadImgLoading(false));
    } catch (error) {
      dispatch(commonActions.setUploadImgLoading(false));
      const err = ((error as AxiosError).response?.data as { msg: string }).msg;
      toast.error(err);
    }
  };
  const uploadImageHandler = async (event: ChangeEvent) => {
    setProgress(0);
    try {
      const formData = new FormData();
      const file = (event.target as HTMLInputElement)?.files?.[0] as File;
      formData.append("file", file);
      formData.append("upload_preset", "ec-upload");

      if (checkIfFileExceedLimitation(file.size)) {
        toast.error("File size must be smaller than 1MB");
        return;
      }

      const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUDNAME}/auto/upload`;
      dispatch(commonActions.setUploadImgLoading(true));
      const {
        data: { url },
      } = await axios.post(cloudinaryUrl, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress(e) {
          setProgress(Math.floor((e.loaded / e.total) * 100));
        },
      });
      await uploadImage(url);
    } catch (error) {
      dispatch(commonActions.setUploadImgLoading(false));
      const err = ((error as AxiosError).response?.data as { msg: string }).msg;
      toast.error(err);
    }
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

      <DropAvatarBox>
        <Avatar
          referrerPolicy="no-referrer"
          src={upload_avatar || default_avatar}
          alt="avatar"
        />
        <CameraIconBox>
          <IoIosCamera />
        </CameraIconBox>
        {uploadImgLoading && (
          <UploadLoadingBackdrop>
            <ProgressBar progress={progress} />
          </UploadLoadingBackdrop>
        )}
      </DropAvatarBox>
    </LeftAvatar>
  );
};
const LeftAvatar = styled.div`
  width: 50%;
  @media (max-width: 700px) {
    width: 100%;
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
const UploadLoadingBackdrop = styled(Backdrop)`
  opacity: 1;
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
