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
import CongMachine from "../../components/Main/CongMachine/CongMachine.components";
import { useEffect } from "react";

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
