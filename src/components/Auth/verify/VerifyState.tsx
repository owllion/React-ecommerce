import VerifySuccess from "src/assets/login/verify-success.png";
import TokenExpired from "src/assets/login/token-expired.png";
import AuthFormTemplate from "../AuthFormTemplate";
import VerifyStateTitle from "./VerifyStateTitle";
import VerifyStateForm from "./VerifyStateForm";

interface IProps {
  isVerified: boolean;
}
const VerifyState = ({ isVerified }: IProps) => {
  return (
    <AuthFormTemplate
      imgUrl={isVerified ? VerifySuccess : TokenExpired}
      alt="verifyImg"
    >
      <VerifyStateTitle isVerified={isVerified} />
      <VerifyStateForm isVerified={isVerified} />
    </AuthFormTemplate>
  );
};

export default VerifyState;
