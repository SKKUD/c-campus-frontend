import { useEffect, useState } from "react";

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

// data sample
const AxiosMessageData: IAxiosMessageData = {
  status: 200,
  message: "유저 메시지 전체 조회에 성공했습니다",
  data: [
    {
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
    },
    {
      messageId: 2,
      userId: 13,
      catergory: "우리가 먹었던 최고의 학식 메뉴",
      content: "하이 헬로 봉주르",
      author: "명륜 짱짱맨",
      isOpened: true,
      isPulled: true,
      pulledAt: "2023-07-10T16:34:30.388",
      imageUuid: "2103980192830981209",
      backgroundColorCode: "#B0C7AB",
      isPublic: true,
      quizContent: "우리가 처음 만났던 장소는?",
      quizAnswer: "수선관",
      quizIsSolved: true,
      imageUrl: "https://www.skku.edu"
    },
    {
      messageId: 3,
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
    },
    {
      messageId: 4,
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
    },
    {
      messageId: 5,
      userId: 13,
      catergory: "우리가 먹었던 최고의 학식 메뉴",
      content: "하이 헬로 봉주르",
      author: "명륜 짱짱맨",
      isOpened: true,
      isPulled: true,
      pulledAt: "2023-07-10T16:34:30.388",
      imageUuid: "2103980192830981209",
      backgroundColorCode: "#D6EABA",
      isPublic: false,
      quizContent: "우리가 처음 만났던 장소는?",
      quizAnswer: "수선관",
      quizIsSolved: true,
      imageUrl: "https://www.skku.edu"
    },
    {
      messageId: 6,
      userId: 13,
      catergory: "우리가 먹었던 최고의 학식 메뉴",
      content: "하이 헬로 봉주르",
      author: "명륜 짱짱맨",
      isOpened: true,
      isPulled: true,
      pulledAt: "2023-07-10T16:34:30.388",
      imageUuid: "2103980192830981209",
      backgroundColorCode: "#D6EABA",
      isPublic: false,
      quizContent: "우리가 처음 만났던 장소는?",
      quizAnswer: "수선관",
      quizIsSolved: true,
      imageUrl: "https://www.skku.edu"
    },
    {
      messageId: 7,
      userId: 13,
      catergory: "우리가 먹었던 최고의 학식 메뉴",
      content: "하이 헬로 봉주르",
      author: "명륜 짱짱맨",
      isOpened: true,
      isPulled: true,
      pulledAt: "2023-07-10T16:34:30.388",
      imageUuid: "2103980192830981209",
      backgroundColorCode: "#D6EABA",
      isPublic: false,
      quizContent: "우리가 처음 만났던 장소는?",
      quizAnswer: "수선관",
      quizIsSolved: true,
      imageUrl: "https://www.skku.edu"
    },
    {
      messageId: 8,
      userId: 13,
      catergory: "우리가 먹었던 최고의 학식 메뉴",
      content: "하이 헬로 봉주르",
      author: "명륜 짱짱맨",
      isOpened: true,
      isPulled: true,
      pulledAt: "2023-07-10T16:34:30.388",
      imageUuid: "2103980192830981209",
      backgroundColorCode: "#D6EABA",
      isPublic: false,
      quizContent: "우리가 처음 만났던 장소는?",
      quizAnswer: "수선관",
      quizIsSolved: true,
      imageUrl: "https://www.skku.edu"
    },
    {
      messageId: 9,
      userId: 13,
      catergory: "우리가 먹었던 최고의 학식 메뉴",
      content: "하이 헬로 봉주르",
      author: "명륜 짱짱맨",
      isOpened: true,
      isPulled: true,
      pulledAt: "2023-07-10T16:34:30.388",
      imageUuid: "2103980192830981209",
      backgroundColorCode: "#D6EABA",
      isPublic: false,
      quizContent: "우리가 처음 만났던 장소는?",
      quizAnswer: "수선관",
      quizIsSolved: true,
      imageUrl: "https://www.skku.edu"
    },
    {
      messageId: 10,
      userId: 13,
      catergory: "우리가 먹었던 최고의 학식 메뉴",
      content: "하이 헬로 봉주르",
      author: "명륜 짱짱맨",
      isOpened: true,
      isPulled: true,
      pulledAt: "2023-07-10T16:34:30.388",
      imageUuid: "2103980192830981209",
      backgroundColorCode: "#D6EABA",
      isPublic: false,
      quizContent: "우리가 처음 만났던 장소는?",
      quizAnswer: "수선관",
      quizIsSolved: true,
      imageUrl: "https://www.skku.edu"
    },
  ]
}

const MessageFeed = () => {
  // State for public filter
  const [filteredData, SetFilteredData] = useState<IAxiosData[]>();

  // filter
  useEffect(()=> {
    // get axios

    // filter
    const filtered = AxiosMessageData.data?.filter((Data: IAxiosData) => Data.isPublic);

    // set to state
    SetFilteredData(filtered);
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
                    <OpenMessageContent key={MessageData.messageId} color={MessageData.backgroundColorCode}>
                      <OpenMessageContentTitle>{MessageData.catergory}</OpenMessageContentTitle>
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