import { 
  AskLockButtonContainer,
  AskLockContent,
  AskLockQuitButton,
  AskLockQuitButtonContainer,
  AskLockContainer,
} from "./AskLock.styles";

import GreenBtn from "../../../../components/common/Buttons/GreenBtn.components";
import SmallWhiteBtn from "../../../../components/common/Buttons/SmallWhiteBtn.compoentns";

const AskLock = () => {
  return (
    <AskLockContainer>
      <AskLockQuitButtonContainer><AskLockQuitButton /></AskLockQuitButtonContainer>
      <AskLockContent>콩캠네컷을 <br/> 퀴즈로 잠글까요?</AskLockContent>
      <AskLockButtonContainer>
        <SmallWhiteBtn content="아니요"/>
        <GreenBtn content="퀴즈 넣기"/>
      </AskLockButtonContainer>
    </AskLockContainer>
  );
};

export default AskLock;
