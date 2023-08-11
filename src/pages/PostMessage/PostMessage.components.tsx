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
  PostMessageFieldContainer,
  PostMessageWebFourcutContaner,
  ButtonWrapper,
  PostMessageContentFrameContainer,
  TakePicIcon,
} from "./PostMessage.styles";

import GreenBtn from "../../components/common/Buttons/GreenBtn.components";
import recycleIcon from "../../assets/images/randomUpdate.svg";
import colorCheck from "../../assets/images/colorCheck.svg";
import defaultFrameIcon from "../../assets/images/defaultFourcut.png";
import lockedFrameIcon from "../../assets/images/4cut_lock.png";
import takepicIcon from "../../assets/images/takepic_mobile_icon.png";
import AskLock from "../../components/PostMessage/modal/AskLock/AskLock.components";
import MakeQuiz from "../../components/PostMessage/modal/MakeQuiz/MakeQuiz.components";
import SendMessage from "../../components/PostMessage/modal/SendMessage/SendMessage.components";

import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  IsWritingMessage,
  MessageState,
  PhotoState,
  QuizState,
} from "../../recoil/recoil";
import { useNavigate } from "react-router";
import WhiteBtn from "../../components/common/Buttons/WhiteBtn.components";
import ModalLayout from "../../components/PostMessage/ModalLayout/ModalLayout.components";
import AskPhotopost from "../../components/PostMessage/modal/AskPhotopost/AskPhotopost.components";
import { useMediaQuery } from "@mui/material";

// 질문 데이터
const SubjectData = [
  "우리가 먹었던 최고의 학식 메뉴",
  "우리가 처음 만난 날",
  "학교 다니면서 있었던 재밌었던 일",
  "꼭 해주고 싶은 말",
  "과거로 간다면 같이 하고 싶은 것",
];

const backgroundColor = ["#D6EABA", "#D9E1CE", "#C1D3A7", "#DAEFAE", "#BFD8BA"];

const PostMessage = () => {
  const match1024 = useMediaQuery("(min-width:1024px)");
  // state
  const [Message, setMessage] = useRecoilState(MessageState);
  const setIsWriting = useSetRecoilState(IsWritingMessage);
  const Quiz = useRecoilValue(QuizState);
  const Photo = useRecoilValue(PhotoState);
  const [currentSubject, SetCurrentSubject] = useState<string>(SubjectData[0]);
  const [currentSubjectNumber, SetCurrentSubjectNumber] = useState<number>(0);
  const [nameText, SetNameText] = useState<string>(Message.name);
  const [nameCount, SetNameCount] = useState<number>(0);
  const [contentText, SetContentText] = useState<string>(Message.content);
  const [contentCount, SetContentCount] = useState<number>(0);
  const [currentColorHex, SetCurrentColorHex] = useState<string>("");
  const [currentColor, SetCurrentColor] = useState<number>(0);
  const [done, setDone] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>("");

  // subject update button
  const updateButtonHandler = () => {
    // 처음 나왔던게 다시 안 나오게 하기
    var randomNumber: number;
    while (true) {
      randomNumber = Math.floor(Math.random() * (SubjectData.length - 0)) + 0;

      if (currentSubjectNumber !== randomNumber) {
        break;
      }
    }
    SetCurrentSubject(SubjectData[randomNumber]);
    SetCurrentSubjectNumber(randomNumber);
  };

  // content event handler
  const contentInputHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    SetContentText(event.target.value);
    SetContentCount(event.target.value.length);
  };

  // name event handler
  const nameInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetNameText(event.target.value);
    SetNameCount(event.target.value.length);
  };

  // color button handler
  const colorHandler = (num: number) => {
    SetCurrentColor(num - 1);
    SetCurrentColorHex(backgroundColor[num - 1]);
  };

  // click photo handler
  const navigate = useNavigate();
  const PostPhotoHandler = () => {
    setIsWriting(true);
    setMessage({ name: nameText, content: contentText });
    navigate("/photo/post");
  };

  const ChangeQuizHandler = () => {
    setModalContent("ChangeQuiz");
    handleModalOpen();
  };

  const ChangePhotoHandler = () => {
    if (window.confirm("콩캠네컷을 다시 찍으시겠어요?")) {
      PostPhotoHandler();
    }
  };

  // submit handler
  const submitHandler = () => {
    handleModalClose();
    console.log(modalContent);
    if (nameText !== "" && contentText !== "") {
      setMessage({ name: nameText, content: contentText });
      //submit 함수 넣기
      setDone(true);
      setModalContent("");
      handleModalOpen();
    } else if (nameText === "") {
      alert("이름을 입력해주세요.");
    } else if (contentText === "") {
      alert("편지 내용을 입력해주세요.");
    }
  };

  const handlePhotoNotTaken = () => {
    setModalContent("PhotoNotTaken");
    handleModalOpen();
  };

  // modal
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  // return
  return (
    <PostMessageContainer backgroundColor={currentColorHex}>
      {/* web fourcut photo */}
      {match1024 && (
        <PostMessageWebFourcutContaner>
          <PostMessageContentFrame
            src={
              Quiz.QuizGiven
                ? lockedFrameIcon
                : Photo.PhotoTaken && Photo.PhotoURL !== ""
                ? Photo.PhotoURL
                : defaultFrameIcon
            }
            onClick={
              Quiz.QuizGiven
                ? ChangeQuizHandler
                : Photo.PhotoTaken && Photo.PhotoURL !== ""
                ? ChangeQuizHandler
                : PostPhotoHandler
            }
          />
          <WhiteBtn
            content={
              Quiz.QuizGiven
                ? "퀴즈 수정"
                : Photo.PhotoTaken && Photo.PhotoURL !== ""
                ? "네컷 잠금"
                : "콩캠네컷 찍기"
            }
            onClick={
              Quiz.QuizGiven
                ? ChangeQuizHandler
                : Photo.PhotoTaken && Photo.PhotoURL !== ""
                ? ChangeQuizHandler
                : PostPhotoHandler
            }
          />
        </PostMessageWebFourcutContaner>
      )}

      <PostMessageFieldContainer>
        {/* color */}
        <PostMessageColors>
          <PostMessageColor1 onClick={() => colorHandler(1)}>
            {currentColor === 0 ? (
              <PostMessageColorCheck src={colorCheck} />
            ) : (
              <></>
            )}
          </PostMessageColor1>
          <PostMessageColor2 onClick={() => colorHandler(2)}>
            {currentColor === 1 ? (
              <PostMessageColorCheck src={colorCheck} />
            ) : (
              <></>
            )}
          </PostMessageColor2>
          <PostMessageColor3 onClick={() => colorHandler(3)}>
            {currentColor === 2 ? (
              <PostMessageColorCheck src={colorCheck} />
            ) : (
              <></>
            )}
          </PostMessageColor3>
          <PostMessageColor4 onClick={() => colorHandler(4)}>
            {currentColor === 3 ? (
              <PostMessageColorCheck src={colorCheck} />
            ) : (
              <></>
            )}
          </PostMessageColor4>
          <PostMessageColor5 onClick={() => colorHandler(5)}>
            {currentColor === 4 ? (
              <PostMessageColorCheck src={colorCheck} />
            ) : (
              <></>
            )}
          </PostMessageColor5>
        </PostMessageColors>

        {/* subject */}
        <PostMessageRandomSubjectContainer>
          <PostMessageRandomSubject>랜덤 주제</PostMessageRandomSubject>
          <PostMessageRandomSubjectContent>
            {currentSubject}
            <PostMessageUpdateButton
              src={recycleIcon}
              onClick={updateButtonHandler}
            />
          </PostMessageRandomSubjectContent>
        </PostMessageRandomSubjectContainer>

        <PostMessageContentTo>
          <p className="PostMessageTo">To. </p>
          <p className="PostMessageReceiver">명륜 귀요미</p>
        </PostMessageContentTo>

        {/* content */}
        <PostMessageContentContainer>
          {!match1024 && (
            <PostMessageContentFrameContainer>
              <PostMessageContentFrame
                src={
                  Quiz.QuizGiven
                    ? lockedFrameIcon
                    : Photo.PhotoTaken && Photo.PhotoURL !== ""
                    ? Photo.PhotoURL
                    : defaultFrameIcon
                }
                onClick={
                  Quiz.QuizGiven
                    ? ChangeQuizHandler
                    : Photo.PhotoTaken && Photo.PhotoURL !== ""
                    ? ChangeQuizHandler
                    : PostPhotoHandler
                }
              />
              {!Photo.PhotoTaken && <TakePicIcon src={takepicIcon} />}
            </PostMessageContentFrameContainer>
          )}
          <PostMessageContentText
            value={contentText}
            onChange={contentInputHandler}
            maxLength={240}
            placeholder="ㅇㅇ님에게 하고 싶은 말을 작성해주세요!"
          />
        </PostMessageContentContainer>

        {/* writer */}
        <PostMessageWriterContainer>
          <PostMessageWriter>From. </PostMessageWriter>
          <PostMessageWriterContent
            value={nameText}
            onChange={nameInputHandler}
            maxLength={10}
            placeholder="작성자 이름"
          />
        </PostMessageWriterContainer>

        {/* Button */}
        <ButtonWrapper>
          {done ? (
            <WhiteBtn
              content="쪽지함 가기"
              onClick={() => navigate("/message")}
            />
          ) : (
            <GreenBtn
              content="작성 완료"
              onClick={Photo.PhotoTaken ? submitHandler : handlePhotoNotTaken}
            />
          )}
        </ButtonWrapper>
      </PostMessageFieldContainer>

      {/* modal */}
      <ModalLayout modalOpen={modalOpen} handleModalClose={handleModalClose}>
        {modalContent === "" && done ? (
          <SendMessage handleModalClose={handleModalClose} />
        ) : modalContent === "PhotoNotTaken" ? (
          <AskPhotopost
            handleModalClose={handleModalClose}
            PostPhotoHandler={PostPhotoHandler}
            setModalContent={setModalContent}
            submitHandler={submitHandler}
          />
        ) : (
          modalContent === "ChangeQuiz" && (
            <MakeQuiz handleModalClose={handleModalClose} />
          )
        )}
      </ModalLayout>
    </PostMessageContainer>
  );
};

export default PostMessage;
