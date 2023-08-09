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
import CongMachine from "../../components/Main/CongMachine/CongMachine.components";

const WebCongcamMachine = () => {
  return (
    <WebMainPageContainer>
      <Ground />
      <CongMachine />
      <BoxAbove>
        <InfoImgConatiner>
          <InfoPaper src={infoDescImg} />
        </InfoImgConatiner>
        <ContentConatiner>
          <MessageList />
        </ContentConatiner>
      </BoxAbove>
    </WebMainPageContainer>
  );
};

export default WebCongcamMachine;
