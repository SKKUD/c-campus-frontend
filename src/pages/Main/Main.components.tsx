import { FC, useEffect, useState } from "react";
import {
  MainContainer,
  MainBackground,
  BackgroundOfMainContainer,
} from "./Main.styles";
import ManchineSwiper from "../../components/Main/MachineSwiper/ManchineSwiper.components";
import { useExtractID } from "../../hooks/useExtractID";
import { useAuthCheckApi, useUserProfileGetApi } from "../../hooks/LoginAxios";
import { useRecoilState } from "recoil";
import { UserAuth, UserState } from "../../recoil/recoil";

const Main: FC = () => {
  const [slide, setSlide] = useState<number>(0);
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
      profile_image: "",
    });
  }, [profile]);

  return (
    <BackgroundOfMainContainer>
      <MainContainer>
        <ManchineSwiper slide={slide} setSlide={setSlide} />
        <MainBackground />
      </MainContainer>
    </BackgroundOfMainContainer>
  );
};

export default Main;
