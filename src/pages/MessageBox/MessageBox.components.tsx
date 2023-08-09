import { useEffect, useState } from "react";
import Message from "../../components/Message/Message.components";
import LightGreenBtn from "../../components/common/Buttons/LightGreenBtn.components";

import { useNavigate } from "react-router";
import axios from "axios";

import {
  MessageListHeader,
  MessageListHeaderMessageCount,
  MessageListContainer,
  MessageListHoder,
  MessageListDate,
  MessageListContent,
  MessageBoxEmpty,
  MessageDataContainer,
} from "./MessageBox.styles";
import { count } from "console";

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
}

// interface
interface IAxiosMessageData {
  status: number,
  message: string,
  data?: IAxiosData[],
}

interface IAxiosData {
  message_id: number,
  user_id: number,
  catergory: string,
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

// data sample
// const AxiosMessageData: IAxiosMessageData = {
//   status: 200,
//   message: "유저 메시지 전체 조회에 성공했습니다",
//   data: [
//     {
//       messageId: 1,
//       userId: 13,
//       catergory: "우리가 먹었던 최고의 학식 메뉴",
//       content: "하이 헬로 봉주르",
//       author: "명륜 짱짱맨",
//       isOpened: true,
//       isPulled: true,
//       pulledAt: "2023-07-10T16:34:30.388",
//       imageUuid: "2103980192830981209",
//       backgroundColorCode: "#D6EABA",
//       isPublic: true,
//       quizContent: "우리가 처음 만났던 장소는?",
//       quizAnswer: "수선관",
//       quizIsSolved: true,
//       imageUrl: "https://www.skku.edu"
//     },
//     {
//       messageId: 2,
//       userId: 13,
//       catergory: "우리가 먹었던 최고의 학식 메뉴",
//       content: "하이 헬로 봉주르",
//       author: "명륜 짱짱맨",
//       isOpened: true,
//       isPulled: true,
//       pulledAt: "2023-07-10T16:34:30.388",
//       imageUuid: "2103980192830981209",
//       backgroundColorCode: "#B0C7AB",
//       isPublic: true,
//       quizContent: "우리가 처음 만났던 장소는?",
//       quizAnswer: "수선관",
//       quizIsSolved: true,
//       imageUrl: "https://www.skku.edu"
//     },
//     {
//       messageId: 3,
//       userId: 13,
//       catergory: "우리가 먹었던 최고의 학식 메뉴",
//       content: "하이 헬로 봉주르",
//       author: "명륜 짱짱맨",
//       isOpened: true,
//       isPulled: true,
//       pulledAt: "2023-07-10T16:34:30.388",
//       imageUuid: "2103980192830981209",
//       backgroundColorCode: "#D6EABA",
//       isPublic: true,
//       quizContent: "우리가 처음 만났던 장소는?",
//       quizAnswer: "수선관",
//       quizIsSolved: true,
//       imageUrl: "https://www.skku.edu"
//     },
//     {
//       messageId: 4,
//       userId: 13,
//       catergory: "우리가 먹었던 최고의 학식 메뉴",
//       content: "하이 헬로 봉주르",
//       author: "명륜 짱짱맨",
//       isOpened: true,
//       isPulled: true,
//       pulledAt: "2023-07-10T16:34:30.388",
//       imageUuid: "2103980192830981209",
//       backgroundColorCode: "#D6EABA",
//       isPublic: true,
//       quizContent: "우리가 처음 만났던 장소는?",
//       quizAnswer: "수선관",
//       quizIsSolved: true,
//       imageUrl: "https://www.skku.edu"
//     },
//     {
//       messageId: 5,
//       userId: 13,
//       catergory: "우리가 먹었던 최고의 학식 메뉴",
//       content: "하이 헬로 봉주르",
//       author: "명륜 짱짱맨",
//       isOpened: true,
//       isPulled: true,
//       pulledAt: "2023-07-10T16:34:30.388",
//       imageUuid: "2103980192830981209",
//       backgroundColorCode: "#D6EABA",
//       isPublic: false,
//       quizContent: "우리가 처음 만났던 장소는?",
//       quizAnswer: "수선관",
//       quizIsSolved: true,
//       imageUrl: "https://www.skku.edu"
//     },
//     {
//       messageId: 6,
//       userId: 13,
//       catergory: "우리가 먹었던 최고의 학식 메뉴",
//       content: "하이 헬로 봉주르",
//       author: "명륜 짱짱맨",
//       isOpened: true,
//       isPulled: true,
//       pulledAt: "2023-07-8T16:34:30.388",
//       imageUuid: "2103980192830981209",
//       backgroundColorCode: "#D6EABA",
//       isPublic: false,
//       quizContent: "우리가 처음 만났던 장소는?",
//       quizAnswer: "수선관",
//       quizIsSolved: true,
//       imageUrl: "https://www.skku.edu"
//     },
//     {
//       messageId: 7,
//       userId: 13,
//       catergory: "우리가 먹었던 최고의 학식 메뉴",
//       content: "하이 헬로 봉주르",
//       author: "명륜 짱짱맨",
//       isOpened: true,
//       isPulled: true,
//       pulledAt: "2023-07-8T16:34:30.388",
//       imageUuid: "2103980192830981209",
//       backgroundColorCode: "#D6EABA",
//       isPublic: false,
//       quizContent: "우리가 처음 만났던 장소는?",
//       quizAnswer: "수선관",
//       quizIsSolved: true,
//       imageUrl: "https://www.skku.edu"
//     },
//     {
//       messageId: 8,
//       userId: 13,
//       catergory: "우리가 먹었던 최고의 학식 메뉴",
//       content: "하이 헬로 봉주르",
//       author: "명륜 짱짱맨",
//       isOpened: true,
//       isPulled: true,
//       pulledAt: "2023-07-8T16:34:30.388",
//       imageUuid: "2103980192830981209",
//       backgroundColorCode: "#D6EABA",
//       isPublic: false,
//       quizContent: "우리가 처음 만났던 장소는?",
//       quizAnswer: "수선관",
//       quizIsSolved: true,
//       imageUrl: "https://www.skku.edu"
//     },
//     {
//       messageId: 9,
//       userId: 13,
//       catergory: "우리가 먹었던 최고의 학식 메뉴",
//       content: "하이 헬로 봉주르",
//       author: "명륜 짱짱맨",
//       isOpened: true,
//       isPulled: true,
//       pulledAt: "2023-07-8T16:34:30.388",
//       imageUuid: "2103980192830981209",
//       backgroundColorCode: "#D6EABA",
//       isPublic: false,
//       quizContent: "우리가 처음 만났던 장소는?",
//       quizAnswer: "수선관",
//       quizIsSolved: true,
//       imageUrl: "https://www.skku.edu"
//     },
//     {
//       messageId: 10,
//       userId: 13,
//       catergory: "우리가 먹었던 최고의 학식 메뉴",
//       content: "하이 헬로 봉주르",
//       author: "명륜 짱짱맨",
//       isOpened: true,
//       isPulled: true,
//       pulledAt: "2023-07-8T16:34:30.388",
//       imageUuid: "2103980192830981209",
//       backgroundColorCode: "#D6EABA",
//       isPublic: false,
//       quizContent: "우리가 처음 만났던 장소는?",
//       quizAnswer: "수선관",
//       quizIsSolved: true,
//       imageUrl: "https://www.skku.edu"
//     },
//   ]
// }

const MessageList = () => {
  // state for transformed to IMessage
  const [axiosMessage, SetAxiosMessage] = useState<IAxiosMessageData>();
  const [filteredToIMessage, SetFilteredToIMessage] = useState<IMessages[]>([]);
  const [countMessage, SetCountMessage] = useState<number>(0);

  const navigate = useNavigate();

  const parseDate = (data: string): string => {
    // input: <string> 2023-07-09T16:34:30.388
    // output: <string> 7월 9일
  
    var positionT: number = data.indexOf("T");
    var extractedDate: string = data.slice(0,positionT);
  
    var monthAndDay:string = extractedDate.slice((extractedDate.indexOf("-")+1));
    var positionSlice: number= monthAndDay.indexOf("-");
  
    var month: number = parseInt(monthAndDay.slice(0,positionSlice));
    var day: number = parseInt(monthAndDay.slice(positionSlice+1));
  
    const returnValue = month + "월 " + day + "일";
  
    return returnValue;
  }

  useEffect(() => {
    const res= axios.get(`${process.env.REACT_APP_BACKEND_SERVER}/users/1/messages/pulled`)
              .then((response) => {
                const axiosData: IAxiosMessageData = response.data;
                SetAxiosMessage(axiosData);

                // check whether status is 200
                if (axiosData.status === 200) {
                  // while axios message data is not 0
                  if (axiosData.data?.length) {
                    // save number
                    SetCountMessage(axiosData.data?.length);

                    // set first value
                    var Date: string = parseDate(axiosData.data[0].pulled_at);
                    var Beans: IBean[] = [];
                    var BeanObject: IBean = {
                      messageId: axiosData.data[0].message_id,
                      author: axiosData.data[0].author,
                      isOpened: axiosData.data[0].is_opened
                    };
                    Beans.push(BeanObject);

                    var willSetToFilteredIMessages: IMessages[] = [];
                    for (let i=1; i<axiosData.data?.length ; i++) {
                      // parse date
                      const currentDate = parseDate(axiosData.data[i].pulled_at);

                      // check date is eqaul or not
                      // if date is equal, push data to beans
                      if (currentDate === Date) {
                        BeanObject.messageId = axiosData.data[i].message_id;
                        BeanObject.author = axiosData.data[i].author;
                        BeanObject.isOpened = axiosData.data[i].is_opened;
                        Beans.push(BeanObject);
                        console.log(BeanObject);
                      } 
                      // if date is not equal, push beans to filteredToIMessage, remove beans
                      else {
                        // push beans to filteredToIMessage
                        var IMessage: IMessages = { 
                          date: Date,
                          beans: Beans,
                        };
                        willSetToFilteredIMessages.push(IMessage);

                        // remove beans update date
                        Date = currentDate;
                        Beans = [];
                      }

                      // check if i is last value to push it to filteredToIMessage
                      if (i === (axiosData.data?.length-1)) {
                        var LastIMessage: IMessages = { 
                          date: Date,
                          beans: Beans,
                        };
                        willSetToFilteredIMessages.push(LastIMessage);
                      }
                    }
                    SetFilteredToIMessage(willSetToFilteredIMessages);
                  }
                } else {
                  console.log("error");
                  return;
                }
              }).catch((error) => {
                if (axios.isAxiosError(error)) {
                  console.log(error);
                }
              });
  }, []);

  // navigate to message feed
  const RedirectToFeedUrl = () => {
    navigate(`/message/feed`);
  };

  return (
    <>
      {countMessage !== 0 ? (
        <MessageListContainer>
          <MessageListHeader>
            <MessageListHeaderMessageCount>
              {countMessage}개의 추억
            </MessageListHeaderMessageCount>
            <LightGreenBtn content="내 피드 가기" onClick={RedirectToFeedUrl} />
          </MessageListHeader>
          <MessageDataContainer>
            {filteredToIMessage &&
              filteredToIMessage.map((messageData: IMessages) => {
                return (
                  <MessageListHoder key={messageData.date}>
                    <MessageListDate>{messageData.date}</MessageListDate>
                    <MessageListContent>
                      {messageData.beans &&
                        messageData.beans.map((bean: IBean) => {
                          return (
                            <Message
                              key={bean.messageId}
                              id={bean.messageId}
                              isOpen={bean.isOpened}
                              nickName={bean.author}
                            />
                          );
                        })}
                    </MessageListContent>
                  </MessageListHoder>
                );
              })}
          </MessageDataContainer>
        </MessageListContainer>
      ) : (
        <MessageBoxEmpty>
          아직 열린 쪽지가 없습니다 <br /> 먼저 쪽지를 뽑아보세요!
        </MessageBoxEmpty>
      )}
    </>
  );
};

export default MessageList;
