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
import { UserAuth, UserState } from "../../recoil/recoil";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { useAuthCheckApi, useUserProfileGetApi } from "../../hooks/LoginAxios";
import { useExtractID } from "../../hooks/useExtractID";

const WebCongcamMachine = () => {
  const currentID = useExtractID();
  const [checkAuth] = useAuthCheckApi();
  const [profile] = useUserProfileGetApi();
  const [userAuth, SetUserAuth] = useRecoilState(UserAuth);
  const [userProfile, SetUserProfile] = useRecoilState(UserState);

  useEffect(() => {
    checkAuth && SetUserAuth(checkAuth.toString());
  }, [checkAuth]);

  useEffect(() => {
    SetUserProfile({
      userID: currentID,
      nickname: profile.nickname,
      profileImageUrl: profile.profileImageUrl,
    });
  }, [profile]);

  return (
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
  );
};

export default WebCongcamMachine;
