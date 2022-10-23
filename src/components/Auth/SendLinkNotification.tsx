import { useLocation } from "react-router-dom";
import { authImgList } from "../../assets/authImg";
import AuthFormTemplate from "./AuthFormTemplate";

const SendLinkNotification = () => {
  const location = useLocation();
  const { type } = location.state as { type: string };

  return (
    <AuthFormTemplate
      mainTitle="Check your email"
      subTitle={`A ${type} link was sent,Don't forget to check your spam box.`}
      imgUrl={authImgList.check_email}
      alt="checkEmailImg"
    ></AuthFormTemplate>
  );
};

export default SendLinkNotification;
