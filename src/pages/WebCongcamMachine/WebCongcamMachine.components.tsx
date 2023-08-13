import {
  WebMainPageContainer,
  Ground,
  BoxAbove,
  InfoImgConatiner,
  InfoPaper,
  ContentConatiner,
} from "../../components/WebMainPage/WebMainPage.styles";
import MessageList from "../MessageBox/MessageBox.components";
import MessageFeed from "../MessageFeed/MessageFeed.components";
import infoDescImg from "../../assets/images/infoDescImg.png";
import CongMachine from "../../components/Main/CongMachine/CongMachine.components";

// import for recoil
import { IsLoginRecoil } from "../../recoil/recoil";
import { useRecoilState } from "recoil";

const WebCongcamMachine = () => {
  const [isLogin, SetIsLogin] = useRecoilState(IsLoginRecoil);

  return (
    <WebMainPageContainer>
      <Ground />
      <CongMachine />
      <BoxAbove>
        <InfoImgConatiner>
          <InfoPaper src={infoDescImg} />
        </InfoImgConatiner>
        <ContentConatiner>
          {
            isLogin ? (
              <MessageList />
            ) : (
              <MessageFeed />
            )
          }
        </ContentConatiner>
      </BoxAbove>
    </WebMainPageContainer>
  );
};

export default WebCongcamMachine;
