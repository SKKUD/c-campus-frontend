import { ChangeEvent, useState, useEffect } from "react";

// import styles
import {
  QuizBoxContainer,
  QuizBoxQuitButtonContainer,
  QuizBoxQuitButton,
  QuizBoxTextAreaContainer,
  QuizBoxTextArea,
  QuizBoxInformation,
  QuizBoxQuizContent,
  QuizBoxCheckButtonContainer,
} from "./QuizBox.styles";

// import components
import CloseIcon from "@mui/icons-material/Close";
import GreenBtn from "../common/Buttons/GreenBtn.components";

// QuizBox interface
interface IQuizBox {
  Quiz: string;
  Answer: string;
  handleClose: () => void;
}

// information 색깔 코드
const RED_COLOR = "#ED5959";
const GREEN_COLOR = "#8DC63F";
const GREY_COLOR = "#808080";

// Quiz와 Answer을 props로 받음
const QuizBox = ({ Quiz, Answer, handleClose }: IQuizBox) => {
  const [color, SetColor] = useState<string>(""); // information color 색깔 변수
  const [wrongCount, SetWrongCount] = useState<number>(3); // 틀린 횟수 저장하는 변수
  const [isHint, SetIsHint] = useState<boolean>(false); // 힌트가 나오기 시작하는지 저장하는 변수
  const [information, SetInformation] = useState<string>(""); // information을 저장하는 변수 (몇 번 틀렸는지, 힌트가 뭔지)
  const [textArea, SetTextArea] = useState<string>(""); // 유저가 정답 적는 곳
  const [hintCount, SetHintCount] = useState<number>(1); // hint가 얼마나 나왔는지 저장하는 변수, (한 글자씩 공개해야 하므로)

  // textArea 바뀔 때, textArea 값을 useState textArea로 넣어줌
  const onAnswerChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();

    // set the searchField value
    SetTextArea(searchFieldString);
  };

  // hint 만드는 함수 (ex) 수 _ _을 return
  const makeHint = () => {
    // hintCount 값이 정답보다 길면 그냥 정답을 return
    if (hintCount >= Answer.length) {
      return Answer;
    }
    // 그렇지 않으면 hintCount만큼 힌트를 만들어 줌
    else {
      // 공개된 힌트
      var sliceString = Answer.slice(0, hintCount);

      // 미공개된 힌트로 남은 글자 수 만큼 _로 채워줌
      for (let i = 0; i < Answer.length - hintCount; i++) {
        sliceString = sliceString + " _";
      }

      return sliceString;
    }
  };

  // 확인버튼 눌렸을 때, props로 들어온 Answer과 일치하는지 비교
  const onClickHandler = () => {
    // 정답일 떄,
    if (Answer === textArea) {
      // 정답 처리
      SetColor(GREEN_COLOR);
      SetInformation(`정답입니다!`);

      // 변수 초기화 필요하면,,, 아마 다른 컴포넌트로 넘어갈 것 같아서 일단 주석처리
      // SetWrongCount(3);
      // SetIsHint(false);
      // SetHintCount(1);
    }

    // 정답이 아닐 때,
    else {
      // wrongCount 하나 줄이기
      if (wrongCount > 1) {
        SetWrongCount(wrongCount - 1);
      }

      // 힌트 나오기 시작
      else if (wrongCount <= 1) {
        SetIsHint(true);
        SetColor(GREY_COLOR);
        SetInformation("힌트: " + makeHint());

        // hintCount 늘리기
        if (hintCount < Answer.length) {
          SetHintCount(hintCount + 1);
        }
      }
    }
  };

  // 정답이 아닐 때 wrongCount 값이 변하면, information 알림 수정
  useEffect(() => {
    if (!isHint) {
      // 힌트가 나오는게 아닐 때, -> 몇 번 틀렸는지 말해주는 것 일 때
      SetColor(RED_COLOR);
      SetInformation(
        `틀렸습니다! ${wrongCount}번의 시도 후에 힌트가 공개됩니다.`
      );
    }
  }, [wrongCount]);

  return (
    <QuizBoxContainer>
      <QuizBoxQuitButtonContainer>
        <QuizBoxQuitButton onClick={handleClose}>
          <CloseIcon />
        </QuizBoxQuitButton>
      </QuizBoxQuitButtonContainer>

      <QuizBoxQuizContent>{Quiz}</QuizBoxQuizContent>

      <QuizBoxTextAreaContainer>
        <QuizBoxTextArea
          type="search"
          placeholder="정답"
          onChange={onAnswerChange}
        />
      </QuizBoxTextAreaContainer>
      {wrongCount < 3 ? (
        <QuizBoxInformation color={color}>{information}</QuizBoxInformation>
      ) : (
        ""
      )}
      <QuizBoxCheckButtonContainer>
        <GreenBtn content="확인" onClick={onClickHandler}/>
      </QuizBoxCheckButtonContainer>
      {/* <QuizBoxCheckButton variant="contained" onClick={onClickHandler}>
        확인
      </QuizBoxCheckButton> */}
    </QuizBoxContainer>
  );
};

export default QuizBox;
