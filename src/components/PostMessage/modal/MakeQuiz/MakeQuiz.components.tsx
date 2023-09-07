import {
  MakeQuizContentContainer,
  MakeQuizContentLabel,
  MakeQuizContent,
  MakeQuizAnswerContainer,
  MakeQuizAnswerLabel,
  MakeQuizAnswer,
  MakeQuizButtonContainer,
  MakeQuizWhiteBtn,
} from "./MakeQuiz.styles";

import GreenBtn from "../../../common/Buttons/GreenBtn.components";
import { ChangeEvent, FC, useState } from "react";
import { useRecoilState } from "recoil";
import { QuizState } from "../../../../recoil/recoil";
import { useNavigate } from "react-router";
import { useExtractID } from "../../../../hooks/useExtractID";

interface MakeQuizProps {
  handleModalClose: () => void;
}

const MakeQuiz: FC<MakeQuizProps> = ({ handleModalClose }) => {
  const [Quiz, setQuiz] = useRecoilState(QuizState);
  const [quizContent, setQuizContent] = useState(Quiz.QuizContent);
  const [quizAnswer, setQuizAnswer] = useState(Quiz.QuizAnswer);

  const handleQuizContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setQuizContent(event.target.value);
  };

  const handleQuizAnswerChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuizAnswer(event.target.value);
  };
  const userid = useExtractID();
  const navigate = useNavigate();

  const handleQuizDelete = () => {
    setQuiz({ QuizGiven: false, QuizContent: "", QuizAnswer: "" });
    handleModalClose();
    navigate(`/message/post/${userid}`);
  };

  const handleQuizSubmit = () => {
    if (quizContent === "") {
      alert("퀴즈를 입력해주세요.");
    } else if (quizAnswer === "") {
      alert("정답을 입력해주세요.");
    } else {
      setQuiz({
        QuizGiven: true,
        QuizContent: quizContent,
        QuizAnswer: quizAnswer,
      });
      handleModalClose();
      navigate(`/message/post/${userid}`);
    }
  };
  return (
    <>
      <MakeQuizContentContainer>
        <MakeQuizContentLabel>문제</MakeQuizContentLabel>
        <MakeQuizContent
          maxLength={30}
          placeholder="30자까지 입력 가능합니다"
          value={quizContent}
          onChange={handleQuizContentChange}
        />
      </MakeQuizContentContainer>

      {/* answer */}
      <MakeQuizAnswerContainer>
        <MakeQuizAnswerLabel>정답</MakeQuizAnswerLabel>
        <MakeQuizAnswer
          maxLength={10}
          placeholder="정답은 10자까지 입력 가능합니다"
          value={quizAnswer}
          onChange={handleQuizAnswerChange}
        />
      </MakeQuizAnswerContainer>

      {/* button container */}
      <MakeQuizButtonContainer>
        <MakeQuizWhiteBtn onClick={handleQuizDelete}>삭제</MakeQuizWhiteBtn>
        <GreenBtn content="완료" onClick={handleQuizSubmit} />
      </MakeQuizButtonContainer>
    </>
  );
};

export default MakeQuiz;
