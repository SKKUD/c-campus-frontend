import {
  WebMainPageContainer,
  Ground,
  BoxAbove,
  InfoImgConatiner,
  InfoPaper,
  ContentConatiner,
} from "../../components/WebMainPage/WebMainPage.styles";
import infoDescImg from "../../assets/images/infoDescImg.png";
import MessageFeed from "../MessageFeed/MessageFeed.components";
import CongMachine from "../../components/Main/CongMachine/CongMachine.components";

const WebCongcamFeed = () => {
  
  return (
    <WebMainPageContainer>
      <Ground />
      <CongMachine />
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
