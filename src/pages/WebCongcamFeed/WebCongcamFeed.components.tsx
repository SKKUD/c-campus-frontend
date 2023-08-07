import {
  WebMainPageContainer,
  Ground,
  BoxAbove,
  InfoImgConatiner,
  InfoPaper,
  ContentConatiner,
} from "../../components/WebMainPage/WebMainPage.styles";
import MessageList from "../MessageBox/MessageBox.components";
import infoDescImg from "../../assets/images/infoDescImg.png";
import MessageFeed from "../MessageFeed/MessageFeed.components";

const WebCongcamFeed = () => {
  return (
    <WebMainPageContainer>
      <Ground />
      <BoxAbove>
        <InfoImgConatiner>
          <InfoPaper src={infoDescImg} />
        </InfoImgConatiner>
        <ContentConatiner>
          <MessageFeed />
        </ContentConatiner>
      </BoxAbove>
    </WebMainPageContainer>
  );
};

export default WebCongcamFeed;
