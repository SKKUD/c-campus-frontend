import { FC, useState } from "react";
import { useNavigate } from "react-router";
import {
  AskLockButtonContainer,
  AskLockContent,
  AskLockContainer,
  AskLockWhiteBtn,
} from "./AskLock.styles";
import MakeQuiz from "../MakeQuiz/MakeQuiz.components";
import GreenBtn from "../../../common/Buttons/GreenBtn.components";

interface AskLockProps {
  handleModalClose: () => void;
}

const AskLock: FC<AskLockProps> = ({ handleModalClose }) => {
  const [IsMakingQuiz, setIsMakingQuiz] = useState(false);
  const navigate = useNavigate();
  return (
    <AskLockContainer>
      {!IsMakingQuiz ? (
        <>
          <AskLockContent>
            콩캠네컷을 <br /> 퀴즈로 잠글까요?
          </AskLockContent>
          <AskLockButtonContainer>
            <AskLockWhiteBtn onClick={() => navigate("/message/post")}>
              아니요
            </AskLockWhiteBtn>
            <GreenBtn
              content="퀴즈 넣기"
              onClick={() => setIsMakingQuiz(true)}
            />
          </AskLockButtonContainer>
        </>
      ) : (
        <MakeQuiz handleModalClose={handleModalClose} />
      )}
    </AskLockContainer>
  );
};

export default AskLock;
