import {
  WebMainPageContainer,
  Ground,
  BoxAbove,
  InfoImgConatiner,
  InfoPaper,
  ContentConatiner,
} from "../../components/WebMainPage/WebMainPage.styles";
import infoDescImg from "../../assets/images/infoDescImg.png";
const WebCongcamFourcut = () => {
  return (
    <WebMainPageContainer>
      <Ground />
      <BoxAbove>
        <InfoImgConatiner>
          <InfoPaper src={infoDescImg} />
        </InfoImgConatiner>
        <ContentConatiner></ContentConatiner>
      </BoxAbove>
    </WebMainPageContainer>
  );
};

export default WebCongcamFourcut;
