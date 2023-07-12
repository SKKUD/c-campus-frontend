import { ChangeEvent, useState, useEffect } from "react";

// import styles
import { 
  QuizBoxContainer,
  QuizBoxQuitButtonContainer,
  QuizBoxQuitButton,
  QuizBoxTextAreaContainer,
  QuizBoxInformation,
  QuizBoxQuizContent,
  QuizBoxCheckButtonContainer,
} from "./QuizBox.styles";

import "./QuizBox.styles.css";

interface IQuizBox {
  Quiz: string,
  Answer: string
}

const RED_COLOR = "#ED5959";
const GREY_COLOR = "#808080";

const QuizBox = ({Quiz, Answer}: IQuizBox) => {
  const [wrongCount, SetWrongCount] = useState<number>(3);
  const [isHint, SetIsHint] = useState<boolean>(false);
  const [information, SetInformation] = useState<string>('');
  const [textArea, SetTextArea] = useState<string>(''); // 유저가 정답 적는 곳

  // textArea 바뀔 때,
  const onAnswerChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();

    // set the searchField value
    SetTextArea(searchFieldString);
  }

  // 확인버튼 눌렸을 때
  const onClickHandler = () => {
    console.log(textArea);

    // 정답
    if (Answer === textArea) {
      console.log("정답");

    } 
    // 정답 아님
    else {
      // wrongCount 하나 줄이기
      if (wrongCount > 0) {
        SetWrongCount(wrongCount - 1);
      }

      else if (wrongCount <= 0 ) { // 힌트 나오기 시작
        SetIsHint(true);
      }
    }

  };

  return (
    <QuizBoxContainer>
      <QuizBoxQuitButtonContainer>
        <QuizBoxQuitButton>X</QuizBoxQuitButton>
      </QuizBoxQuitButtonContainer>

      <QuizBoxQuizContent>{Quiz}</QuizBoxQuizContent>

      <QuizBoxTextAreaContainer>
        <input 
          className="QuixBoxAnswer"
          type="search"
          placeholder="정답"
          onChange={onAnswerChange}
        />
      </QuizBoxTextAreaContainer>
      
      <QuizBoxInformation color={RED_COLOR}></QuizBoxInformation>
      <QuizBoxCheckButtonContainer>
        <button 
          className="QuizBoxCheckButton"
          onClick={onClickHandler}
        >
          확인
        </button>
      </QuizBoxCheckButtonContainer>
      
    </QuizBoxContainer>
  )
};

export default QuizBox;