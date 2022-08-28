import { useState } from "react";
import styled from "styled-components";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import cl from "src/constants/color/color";
import PwdRuleNumberItem from "./PwdRuleNumberItem";
import { pwdRules } from "../../../data/pwdRules";

const PwdRule = () => {
  const [showRules, setShowRules] = useState(false);
  const handleSetShowRules = () => {
    setShowRules(!showRules);
  };
  return (
    <>
      <ShowPwdRulesBtn onClick={() => handleSetShowRules()}>
        <AiOutlineQuestionCircle /> <span>Rules</span>
        {showRules ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </ShowPwdRulesBtn>

      {showRules && (
        <PwdRules>
          {pwdRules.map((rule, index) => (
            <Rule>
              <PwdRuleNumberItem num={index} />
              {rule}
            </Rule>
          ))}
        </PwdRules>
      )}
    </>
  );
};
const ShowPwdRulesBtn = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;
export const PwdRules = styled.div`
  margin-top: 1rem;
  color: ${cl.textLightGray};
`;

const Rule = styled.p``;
export default PwdRule;
