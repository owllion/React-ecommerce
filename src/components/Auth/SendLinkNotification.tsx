import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import CheckEmailImg from "../../assets/login/check-email.png";
import AuthFormTemplate from "./AuthFormTemplate";

const SendLinkNotification = () => {
  const location = useLocation();
  const { type } = location.state as { type: string };

  return (
    <AuthFormTemplate
      mainTitle="Check your email"
      subTitle={`A ${type} link was sent,   Don't forget to check your spam box.`}
      imgUrl={CheckEmailImg}
      alt="checkEmailImg"
    ></AuthFormTemplate>
  );
};

export default SendLinkNotification;
