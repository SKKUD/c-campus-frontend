import {
  MakeQuizContainer,
  MakeQuizQuitButtonContainer,
  MakeQuizQuitButton,
  MakeQuizContentContainer,
  MakeQuizContentLabel,
  MakeQuizContent,
  MakeQuizAnswerContainer,
  MakeQuizAnswerLabel,
  MakeQuizAnswer,
  MakeQuizButtonContainer,
} from "./MakeQuiz.styles";

import GreenBtn from "../../../../components/common/Buttons/GreenBtn.components";
import SmallWhiteBtn from "../../../../components/common/Buttons/SmallWhiteBtn.compoentns";

const MakeQuiz = () => {
  return (
    <MakeQuizContainer>
      {/* quit button */}
      <MakeQuizQuitButtonContainer>
        <MakeQuizQuitButton />
      </MakeQuizQuitButtonContainer>

      {/* quiz content */}
      <MakeQuizContentContainer>
        <MakeQuizContentLabel>문제</MakeQuizContentLabel>
        <MakeQuizContent maxLength={30} placeholder="30자까지 입력 가능합니다"/>
      </MakeQuizContentContainer>

      {/* answer */}
      <MakeQuizAnswerContainer>
        <MakeQuizAnswerLabel>정답</MakeQuizAnswerLabel>
        <MakeQuizAnswer maxLength={10} placeholder="닉네임은 10자까지 입력 가능합니다"/>
      </MakeQuizAnswerContainer>

      {/* button container */}
      <MakeQuizButtonContainer>
        <SmallWhiteBtn content="삭제"/>
        <GreenBtn content="완료"/>
      </MakeQuizButtonContainer>
    </MakeQuizContainer>
  );
};

export default MakeQuiz;
