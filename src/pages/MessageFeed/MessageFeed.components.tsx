import { useEffect, useState } from "react";

import axios from "axios";

import {
  MessageFeedContainer,
  OpenMessageHeader,
  OpenMessageHeaderContent,
  OpenMessageContainer,
  OpenMessageContent,
  OpenMessageScrollContainer,
  OpenMessageContentTitle,
  OpenMessageContentMainText,
  OpenMessageContentSender,
  OpenMesageEmpty,
} from "./MessageFeed.styles";
import { useExtractID } from "../../hooks/useExtractID";
import LightGreenBtn from "../../components/common/Buttons/LightGreenBtn.components";
import { useNavigate } from "react-router";
import { useAuthCheckApi } from "../../hooks/LoginAxios";
import { useMediaQuery } from "@mui/material";

// interface
interface IAxiosMessageData {
  status: number;
  message: string;
  data?: IAxiosData[];
}

interface IAxiosData {
  message_id: number;
  user_id: number;
  category: string;
  content: string;
  author: string;
  is_opened: boolean;
  is_pulled: boolean;
  pulled_at: string;
  image_uuid?: string;
  background_color_code: string;
  is_quiz: boolean;
  is_public: boolean;
  quiz_content?: string;
  quiz_answer?: string;
  quiz_is_solved?: boolean;
  image_url?: string;
}

const MessageFeed = () => {
  const match1024 = useMediaQuery("(min-width:1024px)");
  const currentId = useExtractID();
  const [checkAuth] = useAuthCheckApi();
  // State for public filter
  const [filteredData, SetFilteredData] = useState<IAxiosData[]>();
  const [messageNumber, SetMessageNumber] = useState<number>(0);
  // filter
  useEffect(() => {
    // get axios
    if (currentId !== "") {
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_SERVER}/users/${currentId}/messages/pulled`,
          { withCredentials: true }
        )
        .then((response) => {
          const axiosData: IAxiosMessageData = response.data;
          // filter
          const filtered = axiosData.data?.filter(
            (Data: IAxiosData) => Data.is_public
          );

          // Set to number
          if (filtered) {
            SetMessageNumber(filtered.length);
          }

          // set to state
          SetFilteredData(filtered);
        })
        .catch((error) => {
          if (axios.isAxiosError(error)) {
            // console.log(error);
          }
        });
    }
  }, [currentId]);

  // navigate to message box
  const navigate = useNavigate();
  const RedirectToMessageBox = () => {
    match1024 ? navigate(`/${currentId}`) : navigate(`/message/${currentId}`);
  };

  return (
    <>
      {messageNumber !== 0 ? (
        <MessageFeedContainer>
          <OpenMessageHeader>
            <OpenMessageHeaderContent>
              {messageNumber}개의 공개 쪽지
            </OpenMessageHeaderContent>
            {checkAuth && String(checkAuth) === currentId && (
              <LightGreenBtn
                content="내 메세지 보기"
                onClick={RedirectToMessageBox}
              />
            )}
          </OpenMessageHeader>

          <OpenMessageContainer>
            <OpenMessageScrollContainer>
              {filteredData?.map((MessageData: IAxiosData) => {
                return (
                  <OpenMessageContent
                    key={MessageData.message_id}
                    color={MessageData.background_color_code}
                  >
                    <OpenMessageContentTitle>
                      {MessageData.category}
                    </OpenMessageContentTitle>
                    <OpenMessageContentMainText>
                      {MessageData.content}
                    </OpenMessageContentMainText>
                    <OpenMessageContentSender>
                      <p className="SenderFrom">From.</p> {MessageData.author}
                    </OpenMessageContentSender>
                  </OpenMessageContent>
                );
              })}
            </OpenMessageScrollContainer>
          </OpenMessageContainer>
        </MessageFeedContainer>
      ) : (
        <OpenMesageEmpty>공개로 설정된 메시지가 없습니다</OpenMesageEmpty>
      )}
    </>
  );
};

export default MessageFeed;