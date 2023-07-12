import { 
  MessageViewContainer,
  MessageViewTitle,
  MessageViewContent,
  MessageViewContentReceiver,
  MessageViewContentMainContainer,
  MessageViewContentMainText,
  MessageViewContentSender,
} from "./messageView.styles";

// import components
import FourcutFrame from "../../components/FourcutFrame/FourcutFrame.components";
import SharingButton from "../../components/SharingButton/SharingButton.componets";

interface IMessageView {
  public: boolean,
  title: string,
  receiver: string,
  mainText: string,
  sender: string,
  isPicture: boolean,
  pictureUrl1: string,
  pictureUrl2: string,
  pictureUrl3: string,
  pictureUrl4: string,
}
const MessageView = () => {
  const MessageData: IMessageView = {
    public: true,
    title: "우리가 먹었던 최고의 학식 메뉴",
    receiver: "명륜귀요미",
    mainText: "가는 유소년에게서 것은 두손을 보는 그와 부패뿐이다. 우는 반짝이는 가는 봄바람이다. 그들의 청춘이 가슴이 용기가 사막이다. 그들의 그들은 주는 얼음에 커다란 용기가 밥을 것이다. 주는 같은 때까지 것이다. 우리 창공에 청춘 인생을 붙잡아 곧 원질이 부패뿐이다. 크고 맺어, 사람은 얼마나 그림자는 방지하는 착목한는 예가 약동하다. 있는 희망의 내려온 인생을 피는 따뜻한 뭇 것이다. 따뜻한 두기 영원히 구하지 창공에 예수는 되는",
    sender: "율전짱짱맨",
    isPicture: true,
    pictureUrl1: "https://i.pravatar.cc/500",
    pictureUrl2: "https://i.pravatar.cc/500",
    pictureUrl3: "https://i.pravatar.cc/500",
    pictureUrl4: "https://i.pravatar.cc/500",
  }

  return (
    <MessageViewContainer>
      {/* Public Toggle */}
      <MessageViewTitle>
        {MessageData.title}
      </MessageViewTitle>

      <MessageViewContent>
        <MessageViewContentReceiver>To. {MessageData.receiver}</MessageViewContentReceiver>
        <MessageViewContentMainContainer>
          {
            MessageData.isPicture ? (<FourcutFrame firstPicture={MessageData.pictureUrl1} secondPicture={MessageData.pictureUrl2} thirdPicture={MessageData.pictureUrl3} fourthPicture={MessageData.pictureUrl4}/>) : (<></>)
          }
          <MessageViewContentMainText>{MessageData.mainText}</MessageViewContentMainText>
        </MessageViewContentMainContainer>
        
        <MessageViewContentSender>From. {MessageData.sender}</MessageViewContentSender>
      </MessageViewContent>
      
      <SharingButton />
    </MessageViewContainer>
  );
};

export default MessageView;