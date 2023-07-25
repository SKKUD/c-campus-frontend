import { 
  MessageFeedContainer,
  OpenMessageHeader,
  OpenMessageHeaderContent,
  OpenMessageContainer,
  OpenMessageContent,
  OpenMessageContentTitle,
  OpenMessageContentMainText,
  OpenMessageContentSender,
} from "./MessageFeed.styles";

interface IOpenMessage {
  MessageNumber?: number,
}

interface IOpenMessageData {
  id: string,
  color: string,
  title: string,
  mainText: string,
  sender: string,
}

const MessageFeed = ({MessageNumber}: IOpenMessage) => {
  const OpenMessageDataSet: IOpenMessageData[] = [
    {
      id: "0",
      color: "#D6EABA",
      title: "우리가 먹었던 최고의 학식 메뉴",
      mainText: "가는 유소년에게서 것은 두손을 보는 그와 부패뿐이다. 우는 반짝이는 가는 봄바람이다. 그들의 청춘이 가슴이 용기가 사막이다. 그들의 그들은 주는 얼음에 커다란 용기가 밥을 것이다. 주는 같은 때까지 것이다. 우리 창공에 청춘 인생을 붙잡아 곧 원질이 부패뿐이다. 크고 맺어, 사람은 얼마나 그림자는 방지하는 착목한는 예가 약동하다. 있는 희망의 내려온 인생을 피는 따뜻한 뭇 것이다. 따뜻한 두기 영원히 구하지 창공에 예수는 되는",
      sender: "율전짱짱걸",
    },
    {
      id: "1",
      color: "#B5D589",
      title: "우리가 먹었던 최고의 학식 메뉴",
      mainText: "가는 유소년에게서 것은 두손을 보는 그와 부패뿐이다. 우는 반짝이는 가는 봄바람이다.",
      sender: "명륜짱짱걸",
    },
    {
      id: "2",
      color: "#B0C7AB",
      title: "우리가 먹었던 최고의 학식 메뉴",
      mainText: "가는 유소년에게서",
      sender: "닉네임은최대10글자",
    },
  ]

  return (
    <MessageFeedContainer>
      <OpenMessageHeader>
        <OpenMessageHeaderContent>3개의 공개쪽지</OpenMessageHeaderContent>
      </OpenMessageHeader>

      <OpenMessageContainer>
        {
          OpenMessageDataSet.map((OpenMessageData) => {
            return (
              <OpenMessageContent key={OpenMessageData.id} color={OpenMessageData.color}>
                <OpenMessageContentTitle>{OpenMessageData.title}</OpenMessageContentTitle>
                <OpenMessageContentMainText>{OpenMessageData.mainText}</OpenMessageContentMainText>
                <OpenMessageContentSender>
                  <p className="SenderFrom">From.</p> {OpenMessageData.sender}
                </OpenMessageContentSender>
              </OpenMessageContent>
            )
          })
        }
      </OpenMessageContainer>
    </MessageFeedContainer>
  );
};

export default MessageFeed;