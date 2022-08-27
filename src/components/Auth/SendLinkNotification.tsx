import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import CheckEmailImg from "../../assets/login/check-email.png";
import AuthFormTemplate from "./AuthFormTemplate";
import AuthBtn from "./AuthBtn";

const SendLinkNotification = () => {
  const location = useLocation();
  const { email, type } = location.state as { email: string; type: string };

  return (
    <AuthFormTemplate
      mainTitle="Check your email"
      subTitle={`A ${type} link was sent,   Don't forget to check your spam box.`}
      imgUrl={CheckEmailImg}
      alt="checkEmailImg"
    >
      {/* <Link to={"/auth/user-login"} state={{ email }}>
        <AuthBtn btnText="Back To Login" />
      </Link> */}
    </AuthFormTemplate>
  );
};

export default SendLinkNotification;
