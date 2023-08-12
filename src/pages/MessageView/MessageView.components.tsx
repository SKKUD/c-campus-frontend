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
  MessageViewContentFrame,
  MessageViewMobileContainer,
  MessageViewWebFourcutContainer,
  MessageViewContentMainText,
  MessageViewContentSender,
  GreenBtnContainer
} from "./MessageView.styles";

// import components
import FourcutFrame from "../../components/FourcutFrame/FourcutFrame.components";
import GreenBtn from "../../components/common/Buttons/GreenBtn.components";
import QuizBox from "../../components/QuizBox/QuizBox.components";
import PublicToggle from "../../components/PublicToggle/PublicToggle.components";
import defaultFrameIcon from "../../assets/images/defaultFourcut.png";

// import mui for modal
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useMediaQuery } from "@mui/material";

// 
import axios from "axios";

// interface
interface IMessageData {
  status: number,
  message: string,
  data: IData,
}

// interface
interface IData {
  message_id: number,
  user_id: number,
  category: string,
  content: string,
  author: string,
  is_opened: boolean,
  is_pulled: boolean,
  pulled_at: string,
  image_uuid?: string,
  background_color_code: string,
  is_quiz: boolean,
  is_public: boolean,
  quiz_content?: string,
  quiz_answer?: string,
  quiz_is_solved?: boolean,
  image_url?: string,
}

const MessageView = () => {
  const match1024 = useMediaQuery("(min-width:1024px)");

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
  
  const extractMessageID = () => {
    // get current url
    const currentUrl: string = window.location.href;

    // find message/
    const position: number = currentUrl.search("message/");

    // extract messageID
    const returnID: string = currentUrl.slice(position+8);

    return returnID;
  };

  useEffect(()=>{
    // extract messageID
    const messageID: string = extractMessageID();

    // axios get
    const response = axios.get(`${process.env.REACT_APP_BACKEND_SERVER}/users/1/messages/${messageID}`)
                    .then((response) => {
                      if (response.data.status === 200) {
                        console.log(response.data.data);
                        SetAxiosMessage(response.data.data);
                      }
                    })
                    .catch((error) => {
                      if (axios.isAxiosError(error)) {
                        console.log(error);
                      }
                    });

    // check response status 200 or 400

    // set the response data to axiosMessage state
  }, []); 
  return (
    <MessageViewContainer backgroundColor={axiosMessage?.background_color_code || ""}>
      { match1024 && (
        <MessageViewWebFourcutContainer>
          <MessageViewContentFrame src={defaultFrameIcon}/>
        </MessageViewWebFourcutContainer>
      )}
      <MessageViewMobileContainer>
        {/* Public Toggle */}
        <MessageViewPublicToggleContainer>
          <PublicToggle />
        </MessageViewPublicToggleContainer>

        {/* Title */}
        <MessageViewTitle className="MessageViewCenter">{axiosMessage?.category}</MessageViewTitle>

        {/* Content */}
        <MessageViewContent >
          {/* Receiver */}
          <MessageViewContentReceiver>
            <p className="MessageViewReceiverTo">To. </p>
            {/* author말고 로그인 정보에서 이름 가져오기 */}
            <p className="MessageViewReceiverMessageData">{axiosMessage?.author}</p>
          </MessageViewContentReceiver>

          {/* Main Content */}
          <MessageViewContentMainContainer className="MessageViewCenter">
            {
              !match1024 ? (
                <MessageViewFourcutFrameContainer onClick={handleOpen}>
                  <MessageViewContentFrame src={defaultFrameIcon}/>
                </MessageViewFourcutFrameContainer>
              ) : (
                <></>
              )
            }
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
              {axiosMessage?.content}
            </MessageViewContentMainText>
          </MessageViewContentMainContainer>
          
          {/* Sender */}
          <MessageViewContentSender>
            <p className="MessageViewSenderFrom">From. </p>
            <p className="MessageViewSenderMessageData">{axiosMessage?.author}</p>
          </MessageViewContentSender>
        </MessageViewContent>
        
        {/* Sharing Button */}
        <GreenBtnContainer className="MessageViewCenter">
          <GreenBtn content="공유하기"/>
        </GreenBtnContainer>
      </MessageViewMobileContainer>
    </MessageViewContainer>
  )
};

export default MessageView;
