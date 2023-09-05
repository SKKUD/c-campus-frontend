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

import { MainEmpty } from "../Main/Main.styles";

// import for recoil
import { UserAuth } from "../../recoil/recoil";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { useAuthCheckApi, useUserProfileGetApi } from "../../hooks/LoginAxios";
import { useExtractID } from "../../hooks/useExtractID";

const WebCongcamMachine = () => {
  const currentID = useExtractID();
  const [checkAuth] = useAuthCheckApi();
  const [profile] = useUserProfileGetApi();
  const [userAuth, SetUserAuth] = useRecoilState(UserAuth);

  useEffect(() => {
    checkAuth && SetUserAuth(checkAuth.toString());
  }, [checkAuth]);

  return (
    <>
      {profile.nickname && profile.nickname ? (
        <WebMainPageContainer>
          <Ground />
          <CongMachine />
          <BoxAbove>
            <InfoImgConatiner>
              <InfoPaper src={infoDescImg} />
            </InfoImgConatiner>
            <ContentConatiner>
              {checkAuth && userAuth === currentID ? (
                <MessageList />
              ) : (
                <MessageFeed />
              )}
            </ContentConatiner>
          </BoxAbove>
        </WebMainPageContainer>
      ) : (
        <MainEmpty>존재하지 않는 사용자입니다</MainEmpty>
      )}
    </>
  );
};

export default WebCongcamMachine;
