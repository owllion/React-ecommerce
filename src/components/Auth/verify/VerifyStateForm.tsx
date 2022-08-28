import { useState } from "react";

import { Link } from "react-router-dom";
import EmailInput from "../../Common/input/EmailInput";
import AuthBtn from "../AuthBtn";

interface IProps {
  isVerified: boolean;
}
const VerifyStateForm = ({ isVerified }: IProps) => {
  const [showInput, setShowInput] = useState(false);
  const handleShowInput = () => setShowInput(true);

  return (
    <>
      {isVerified ? (
        <Link to={"/settings/account"}>
          <AuthBtn btnText="Go To Profile" />
        </Link>
      ) : (
        <div onClick={() => handleShowInput()} style={{ marginBottom: "1rem" }}>
          <AuthBtn btnText="Send me the link again" type="button" />
        </div>
      )}
      {showInput && <EmailInput />}
    </>
  );
};

export default VerifyStateForm;
