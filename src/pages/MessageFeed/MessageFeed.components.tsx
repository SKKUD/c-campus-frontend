import { useEffect, useState } from "react";

import axios from "axios";

import { 
  MessageFeedContainer,
  OpenMessageHeader,
  OpenMessageHeaderContent,
  OpenMessageContainer,
  OpenMessageContent,
  OpenMessageContentTitle,
  OpenMessageContentMainText,
  OpenMessageContentSender,
  OpenMesageEmpty,
} from "./MessageFeed.styles";

// interface
interface IAxiosMessageData {
  status: number,
  message: string,
  data?: IAxiosData[],
}

interface IAxiosData {
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

const MessageFeed = () => {
  // State for public filter
  const [filteredData, SetFilteredData] = useState<IAxiosData[]>();

  // filter
  useEffect(()=> {
    // get axios
    const res = axios.get(`${process.env.REACT_APP_BACKEND_SERVER}/users/1/messages/pulled`)
                .then((response) => {
                  const axiosData: IAxiosMessageData = response.data;
                  // filter
                  const filtered = axiosData.data?.filter((Data: IAxiosData) => Data.is_public);

                  // set to state
                  SetFilteredData(filtered);
                })
                .catch((error) => {
                  if (axios.isAxiosError(error)) {
                    console.log(error);
                  }
                });
  }, []);

  return (
    <>
      {
        (filteredData?.length !== 0) ? (
          <MessageFeedContainer>
            <OpenMessageHeader>
              <OpenMessageHeaderContent>{filteredData?.length}개의 공개쪽지</OpenMessageHeaderContent>
            </OpenMessageHeader>

            <OpenMessageContainer>
              {
                filteredData?.map((MessageData: IAxiosData) => {
                  return (
                    <OpenMessageContent key={MessageData.message_id} color={MessageData.background_color_code}>
                      <OpenMessageContentTitle>{MessageData.category}</OpenMessageContentTitle>
                      <OpenMessageContentMainText>{MessageData.content}</OpenMessageContentMainText>
                      <OpenMessageContentSender>
                        <p className="SenderFrom">From.</p> {MessageData.author}
                      </OpenMessageContentSender>
                    </OpenMessageContent>
                  )
                })
              }
            </OpenMessageContainer>
          </MessageFeedContainer>
        ) : (
          <OpenMesageEmpty>공개로 설정된 메시지가 없습니다</OpenMesageEmpty>
        ) 
      }
    </>
  );
};

export default MessageFeed;