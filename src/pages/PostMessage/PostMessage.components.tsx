import { 
  PostMessageContainer,
  PostMessageColors,
  PostMessageColor1,
  PostMessageColor2,
  PostMessageColor3,
  PostMessageColor4,
  PostMessageColor5,
  PostMessageColorCheck,
  PostMessageRandomSubjectContainer,
  PostMessageRandomSubject,
  PostMessageUpdateButton,
  PostMessageRandomSubjectContent,
  PostMessageContentContainer,
  PostMessageContentTo,
  PostMessageContentFrame,
  PostMessageContentText,
  PostMessageWriterContainer,
  PostMessageWriter,
  PostMessageWriterContent,
} from "./PostMessage.styles";

import GreenBtn from "../../components/common/Buttons/GreenBtn.components";
import recycleIcon from "../../assets/images/randomUpdate.svg";
import colorCheck from "../../assets/images/colorCheck.svg";
import defaultFrameIcon from "../../assets/images/defaultFourcut.png";

import { useEffect, useState } from "react";

// 질문 데이터
const SubjectData = [
  "우리가 먹었던 최고의 학식 메뉴",
  "우리가 처음 만난 날",
  "학교 다니면서 있었던 재밌었던 일",
  "꼭 해주고 싶은 말",
  "과거로 간다면 같이 하고 싶은 것",
];

const backgroundColor = [
  "#D6EABA",
  "#D9E1CE",
  "#C1D3A7",
  "#DAEFAE",
  "#BFD8BA",
]

const PostMessage = () => {
  // state
  const [currentSubject, SetCurrentSubject] = useState<string>(SubjectData[0]);
  const [currentSubjectNumber, SetCurrentSubjectNumber] = useState<number>(0);
  const [nameText, SetNameText] = useState<string>("");
  const [nameCount, SetNameCount] = useState<number>(0);
  const [contentText, SetContentText] = useState<string>("");
  const [contentCount, SetContentCount] = useState<number>(0);
  const [currentColorHex, SetCurrentColorHex] = useState<string>("");
  const [currentColor, SetCurrentColor] = useState<number>(0);
  
  // subject update button
  const updateButtonHandler = () => {
    // 처음 나왔던게 다시 안 나오게 하기
    var randomNumber: number;
    while (true) {
      randomNumber = Math.floor(Math.random() * (SubjectData.length - 0)) + 0;

      if (currentSubjectNumber !== randomNumber) { break; }
    }
    SetCurrentSubject(SubjectData[randomNumber]);
    SetCurrentSubjectNumber(randomNumber);
  };

  // content event handler
  const contentInputHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    SetContentText(event.target.value);
    SetContentCount(event.target.value.length);
  }

  // name event handler
  const nameInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetNameText(event.target.value);
    SetNameCount(event.target.value.length);
  };

  const color1Handler = () => {
    SetCurrentColor(0);
    SetCurrentColorHex(backgroundColor[0]);
  };

  const color2Handler = () => {
    SetCurrentColor(1);
    SetCurrentColorHex(backgroundColor[1]);
  };

  const color3Handler = () => {
    SetCurrentColor(2);
    SetCurrentColorHex(backgroundColor[2]);
  };

  const color4Handler = () => {
    SetCurrentColor(3);
    SetCurrentColorHex(backgroundColor[3]);
  };

  const color5Handler = () => {
    SetCurrentColor(4);
    SetCurrentColorHex(backgroundColor[4]);
  };
  // return
  return (
    <PostMessageContainer backgroundColor={currentColorHex}>
      {/* color */}
      <PostMessageColors>
        <PostMessageColor1 onClick={color1Handler}>
          {(currentColor === 0) ? <PostMessageColorCheck src={colorCheck}/> : <></>}
        </PostMessageColor1>
        <PostMessageColor2 onClick={color2Handler}>
          {(currentColor === 1) ? <PostMessageColorCheck src={colorCheck}/> : <></>}
        </PostMessageColor2>
        <PostMessageColor3 onClick={color3Handler}>
          {(currentColor === 2) ? <PostMessageColorCheck src={colorCheck}/> : <></>}
        </PostMessageColor3>
        <PostMessageColor4 onClick={color4Handler}>
          {(currentColor === 3) ? <PostMessageColorCheck src={colorCheck}/> : <></>}
        </PostMessageColor4>
        <PostMessageColor5 onClick={color5Handler}>
          {(currentColor === 4) ? <PostMessageColorCheck src={colorCheck}/> : <></>}
        </PostMessageColor5>
      </PostMessageColors>
      
      {/* subject */}
      <PostMessageRandomSubjectContainer>
        <PostMessageRandomSubject>랜덤 주제</PostMessageRandomSubject>
        <PostMessageRandomSubjectContent>
          {currentSubject}
          <PostMessageUpdateButton src={recycleIcon} onClick={updateButtonHandler}/>
        </PostMessageRandomSubjectContent>
      </PostMessageRandomSubjectContainer>

      <PostMessageContentTo>
        <p className="PostMessageTo">To. </p>
        <p className="PostMessageReceiver">명륜 귀요미</p>
      </PostMessageContentTo>

      {/* content */}
      <PostMessageContentContainer>
        <PostMessageContentFrame src={defaultFrameIcon}/>
        <PostMessageContentText onChange={contentInputHandler} maxLength={240} placeholder="240글자까지만 입력됩니다"/>
      </PostMessageContentContainer>

      {/* writer */}
      <PostMessageWriterContainer>
        <PostMessageWriter>From. </PostMessageWriter>
        <PostMessageWriterContent onChange={nameInputHandler} maxLength={10} placeholder="10글자까지만 입력됩니다"/>
      </PostMessageWriterContainer>

      {/* Button */}
      <GreenBtn content="작성 완료"/>
    </PostMessageContainer>
  );
};

export default PostMessage;
