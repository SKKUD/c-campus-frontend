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
import { IsLoginRecoil, UserAuth } from "../../recoil/recoil";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { useAuthCheckApi } from "../../hooks/LoginAxios";
import { useExtractID } from "../../hooks/useExtractID";

const WebCongcamMachine = () => {
  const [auth] = useAuthCheckApi();
  
  const [isLogin, SetIsLogin] = useRecoilState(IsLoginRecoil);
  const [userAuth, SetUserAuth] = useRecoilState(UserAuth);
  const [currentID] = useExtractID();

  return (
    <WebMainPageContainer>
      <Ground />
      <CongMachine />
      <BoxAbove>
        <InfoImgConatiner>
          <InfoPaper src={infoDescImg} />
        </InfoImgConatiner>
        <ContentConatiner>
          {isLogin && userAuth.userID === currentID ? (
            <MessageList />
          ) : (
            <MessageFeed />
          )}
        </ContentConatiner>
      </BoxAbove>
    </WebMainPageContainer>
  );
};

export default WebCongcamMachine;
