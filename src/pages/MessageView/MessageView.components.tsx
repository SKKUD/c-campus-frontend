import { useEffect, useState } from "react";

// import styled-components
import {
  MessageViewContainer,
  MessageViewPublicToggleContainer,
  MessageViewTitle,
  MessageViewContent,
  MessageViewContentReceiver,
  MessageViewContentMainContainer,
  MessageViewFourcutFrameContainer,
  MessageViewContentMainText,
  MessageViewContentSender,
  GreenBtnContainer
} from "./MessageView.styles";

// import components
import FourcutFrame from "../../components/FourcutFrame/FourcutFrame.components";
import GreenBtn from "../../components/common/Buttons/GreenBtn.components";
import QuizBox from "../../components/QuizBox/QuizBox.components";
import PublicToggle from "../../components/PublicToggle/PublicToggle.components";

// import mui for modal
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

// interface
interface IMessageData {
  status: number,
  message: string,
  data: IData,
}

// interface
interface IData {
  messageId: number,
  userId: number,
  catergory: string,
  content: string,
  author: string,
  isOpened: boolean,
  isPulled: boolean,
  pulledAt?: string,
  imageUuid?: string,
  backgroundColorCode: string,
  isPublic: boolean,
  quizContent?: string,
  quizAnswer?: string,
  quizIsSolved?: boolean,
  imageUrl?: string,
}

// message data sample
const MessageDataAxios: IMessageData = {
  status: 200,
  message: "메시지 조회에 성공했습니다",
  data: {
    messageId: 1,
    userId: 13,
    catergory: "우리가 먹었던 최고의 학식 메뉴",
    content: "하이 헬로 봉주르",
    author: "명륜 짱짱맨",
    isOpened: true,
    isPulled: true,
    pulledAt: "2023-07-10T16:34:30.388",
    imageUuid: "2103980192830981209",
    backgroundColorCode: "#D6EABA",
    isPublic: true,
    quizContent: "우리가 처음 만났던 장소는?",
    quizAnswer: "수선관",
    quizIsSolved: true,
    imageUrl: "https://www.skku.edu"
  }
}	

const MessageView = () => {
  // axios state
  const [axiosMessage, SetAxiosMessage] = useState<IData>();

  // mui-modal variable
  const [open, setOpen] = useState<boolean>(false);

  // mui-modal function
  const handleOpen = () => {
    setOpen(true);
    console.log(open);
  };

  const handleClose = () => {
    setOpen(false);
    console.log(open);
  };
  
  useEffect(()=>{
    // axios get
    // const response: IMessageData = axios.get(``);

    // check response status 200 or 400

    // set the response data to axiosMessage state
  }, []); 
  return (
    <MessageViewContainer backgroundColor={MessageDataAxios.data.backgroundColorCode}>
      {/* Public Toggle */}
      <MessageViewPublicToggleContainer>
        <PublicToggle />
      </MessageViewPublicToggleContainer>

      {/* Title */}
      <MessageViewTitle className="MessageViewCenter">{MessageDataAxios.data.catergory}</MessageViewTitle>

      {/* Content */}
      <MessageViewContent >
        {/* Receiver */}
        <MessageViewContentReceiver>
          <p className="MessageViewReceiverTo">To. </p>
          {/* author말고 로그인 정보에서 이름 가져오기 */}
          <p className="MessageViewReceiverMessageData">{MessageDataAxios.data.author}</p>
        </MessageViewContentReceiver>

        {/* Main Content */}
        <MessageViewContentMainContainer className="MessageViewCenter">
          {/* <MessageViewFourcutFrameContainer onClick={handleOpen}>
            {MessageData.isPicture ? (
              <FourcutFrame
                firstPicture={MessageData.pictureUrl1}
                secondPicture={MessageData.pictureUrl2}
                thirdPicture={MessageData.pictureUrl3}
                fourthPicture={MessageData.pictureUrl4}
              />
            ) : (
              <></>
            )}
          </MessageViewFourcutFrameContainer> */}
          <Modal open={open} onClose={handleClose}>
            <Box>
              <QuizBox
                Quiz="우리가 처음 만난 곳은?"
                Answer="수선관"
                handleClose={handleClose}
              />
            </Box>
          </Modal>
          <MessageViewContentMainText>
            {MessageDataAxios.data.content}
          </MessageViewContentMainText>
        </MessageViewContentMainContainer>
        
        {/* Sender */}
        <MessageViewContentSender>
          <p className="MessageViewSenderFrom">From. </p>
          <p className="MessageViewSenderMessageData">{MessageDataAxios.data.author}</p>
        </MessageViewContentSender>
      </MessageViewContent>
      
      {/* Sharing Button */}
      <GreenBtnContainer className="MessageViewCenter">
        <GreenBtn content="공유하기"/>
      </GreenBtnContainer>
    </MessageViewContainer>
  );
};

export default MessageView;
