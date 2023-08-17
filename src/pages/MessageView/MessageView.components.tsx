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
import GreenBtn from "../../components/common/Buttons/GreenBtn.components";
import QuizBox from "../../components/QuizBox/QuizBox.components";
import PublicToggle from "../../components/PublicToggle/PublicToggle.components";
import lockedFourcut from "../../assets/images/4cut_lock.png";
import defaultFrameIcon from "../../assets/images/defaultFourcut.png";

// import mui for modal
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useMediaQuery } from "@mui/material";

// 
import axios from "axios";

import { UserAuth } from "../../recoil/recoil";
import { useRecoilState } from "recoil";

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
  const [userAuth, SetUserAuth] = useRecoilState(UserAuth);

  // mui-modal variable
  const [open, setOpen] = useState<boolean>(false);

  // ID state
  const [stateMessageID, SetMessageID] = useState<string>("");
  const [currentID, SetCurrentID] = useState<string>("");

  // mui-modal function
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const extractMessageID = () => {
    // get current url
    const currentUrl: string = window.location.href;

    // find message/
    const position: number = currentUrl.search("message/");

    // extract messageID
    const returnID: string[] = currentUrl.slice(position + 8).split("/");

    return returnID;
  };

  useEffect(() => {
    // extract messageID
    const messageID: string[] = extractMessageID();
    SetMessageID(messageID[1]);
    SetCurrentID(messageID[0]);

    // axios get
    console.log(`${process.env.REACT_APP_BACKEND_SERVER}/users/${messageID[0]}/messages/${messageID[1]}`);
    const response = axios
      .get(
        `${process.env.REACT_APP_BACKEND_SERVER}/users/${messageID[0]}/messages/${messageID[1]}`,
        { withCredentials: true }
      )
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
  }, []); 

  return (
    <>
      { (currentID === userAuth && axiosMessage) ? ( // check if currentID matched to current userAuth
        <MessageViewContainer backgroundColor={axiosMessage?.background_color_code || ""}>
          { match1024 && (
            <MessageViewWebFourcutContainer onClick={handleOpen}>
              {
                (axiosMessage?.is_quiz || false) ? ( // 퀴즈가 있는지 없는지 확인
                  // 퀴즈가 없음 (그냥 사진 보여줌)
                  <MessageViewContentFrame src={lockedFourcut}/>
                ) : ( // 퀴즈가 있음 (퀴즈가 풀릴 때 보여줌)
                  <>
                    {
                      (axiosMessage?.quiz_is_solved) ? (
                        // 퀴즈가 풀림
                        <MessageViewContentFrame src={axiosMessage?.image_url || defaultFrameIcon}/>
                      )  : (
                        // 퀴즈가 안 풀림
                        <MessageViewContentFrame src={lockedFourcut}/>
                      )
                    }
                  </>
                )
              }
            </MessageViewWebFourcutContainer>
          )}
          <MessageViewMobileContainer>
            {/* Public Toggle */}
            <MessageViewPublicToggleContainer>
              <PublicToggle axiosisPublic={axiosMessage?.is_public}/>
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
                      {
                        (axiosMessage?.is_quiz || false) ? ( // 퀴즈가 있는지 없는지 확인
                          // 퀴즈가 없음 (그냥 사진 보여줌)
                          <MessageViewContentFrame src={lockedFourcut}/>
                        ) : ( // 퀴즈가 있음 (퀴즈가 풀릴 때 보여줌)
                          <>
                            {
                              (axiosMessage?.quiz_is_solved) ? (
                                // 퀴즈가 풀림
                                <MessageViewContentFrame src={axiosMessage?.image_url || defaultFrameIcon}/>
                              )  : (
                                // 퀴즈가 안 풀림
                                <MessageViewContentFrame src={lockedFourcut}/>
                              )
                            }
                          </>
                        )
                      }
                    </MessageViewFourcutFrameContainer>
                  ) : (
                    <></>
                  )
                }
                <Modal open={open} onClose={handleClose}>
                  <Box>
                    <QuizBox
                      Quiz={axiosMessage.quiz_content || "우리가 처음 만난 곳은?"}
                      Answer={axiosMessage.quiz_answer || "수선관"}
                      handleClose={handleClose}
                      userID={userAuth}
                      messageID={String(axiosMessage.message_id)}
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
      ) : (
        <>
        </>
      )}
    </>
  )
};

export default MessageView;
