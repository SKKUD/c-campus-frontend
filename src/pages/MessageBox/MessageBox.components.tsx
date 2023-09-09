import { useEffect, useState } from "react";
import Message from "../../components/Message/Message.components";
import LightGreenBtn from "../../components/common/Buttons/LightGreenBtn.components";

import { useNavigate } from "react-router";
import axios from "axios";

import {
  MessageListHeader,
  MessageListHeaderMessageCount,
  MessageListContainer,
  MessageScrollContainer,
  MessageListHoder,
  MessageListDate,
  MessageListContent,
  MessageBoxEmpty,
  MessageDataContainer,
} from "./MessageBox.styles";
import { useExtractID } from "../../hooks/useExtractID";

// import for userAuth
import { useAuthCheckApi } from "../../hooks/LoginAxios";

// Message type
interface IMessages {
  date: string;
  beans: Array<IBean>;
}

// Bean type
interface IBean {
  messageId: number;
  author: string;
  isOpened: boolean;
  isPublic: boolean;
}

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

const MessageList = () => {
  // auth
  const [userAuth] = useAuthCheckApi();
  const currentID = useExtractID();

  // state for transformed to IMessage
  const [filteredToIMessage, SetFilteredToIMessage] = useState<IMessages[]>([]);
  const [countMessage, SetCountMessage] = useState<number>(0);

  const navigate = useNavigate();

  const parseDate = (data: string): string => {
    // input: <string> 2023-07-09T16:34:30.388
    // output: <string> 7월 9일

    var positionT: number = data.indexOf("T");
    var extractedDate: string = data.slice(0, positionT);

    var monthAndDay: string = extractedDate.slice(
      extractedDate.indexOf("-") + 1
    );
    var positionSlice: number = monthAndDay.indexOf("-");

    var month: number = parseInt(monthAndDay.slice(0, positionSlice));
    var day: number = parseInt(monthAndDay.slice(positionSlice + 1));

    const returnValue = month + "월 " + day + "일";

    return returnValue;
  };

  useEffect(() => {
    if (currentID !== "") {
      const fetchData = async () => {
        try {
          axios
            .get(`${process.env.REACT_APP_BACKEND_SERVER}/auth/authentication`)
            .then((response) => {
              // check response
            });
          const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_SERVER}/users/${currentID}/messages/pulled`,
            { withCredentials: true }
          );

          const axiosData: IAxiosMessageData = response.data;

          if (axiosData.status === 200 && axiosData.data?.length) {
            const willSetToFilteredIMessages: IMessages[] = [];
            let currentDate: string | null = null;
            let beans: IBean[] = [];

            for (const message of axiosData.data) {
              const messageDate = parseDate(message.pulled_at);

              if (messageDate !== currentDate) {
                if (currentDate !== null) {
                  const IMessage: IMessages = {
                    date: currentDate,
                    beans: beans,
                  };
                  willSetToFilteredIMessages.push(IMessage);
                }

                currentDate = messageDate;
                beans = [];
              }

              const beanObject: IBean = {
                messageId: message.message_id,
                author: message.author,
                isOpened: message.is_opened,
                isPublic: message.is_public,
              };
              beans.push(beanObject);
            }

            if (currentDate !== null) {
              const lastIMessage: IMessages = {
                date: currentDate,
                beans: beans,
              };
              willSetToFilteredIMessages.push(lastIMessage);
            }

            SetFilteredToIMessage(willSetToFilteredIMessages);
            SetCountMessage(axiosData.data.length);
          }
        } catch (error) {
          if (axios.isAxiosError(error)) {
            // console.log(error);
          }
        }
      };

      fetchData();
    }
  }, [currentID, userAuth]);

  // navigate to message feed
  const RedirectToFeedUrl = () => {
    navigate(`/message/feed/${currentID}`);
  };

  return (
    <>
      {
        // check if it is current userID
        String(userAuth) === currentID ? (
          <>
            {countMessage !== 0 ? (
              <MessageListContainer>
                <MessageListHeader>
                  <MessageListHeaderMessageCount>
                    {countMessage}개의 추억
                  </MessageListHeaderMessageCount>
                  <LightGreenBtn
                    content="내 피드 가기"
                    onClick={RedirectToFeedUrl}
                  />
                </MessageListHeader>
                <MessageDataContainer>
                  <MessageScrollContainer>
                    {filteredToIMessage &&
                      filteredToIMessage.map((messageData: IMessages) => {
                        return (
                          <MessageListHoder key={messageData.date}>
                            <MessageListDate>
                              {messageData.date}
                            </MessageListDate>
                            <MessageListContent>
                              {messageData.beans &&
                                messageData.beans.map((bean: IBean) => {
                                  return (
                                    <Message
                                      key={bean.messageId}
                                      id={bean.messageId}
                                      isOpen={bean.isOpened}
                                      isPublic={bean.isPublic}
                                      nickName={bean.author}
                                    />
                                  );
                                })}
                            </MessageListContent>
                          </MessageListHoder>
                        );
                      })}
                  </MessageScrollContainer>
                </MessageDataContainer>
              </MessageListContainer>
            ) : (
              <MessageBoxEmpty>
                아직 열린 쪽지가 없습니다 <br /> 먼저 쪽지를 뽑아보세요!
              </MessageBoxEmpty>
            )}
          </>
        ) : (
          <MessageBoxEmpty>다른 사람의 쪽지입니다</MessageBoxEmpty>
        )
      }
    </>
  );
};

export default MessageList;
