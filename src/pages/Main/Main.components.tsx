import { FC, useEffect, useState } from "react";
import {
  MainContainer,
  MainBackground,
  BackgroundOfMainContainer,
  MainEmpty,
} from "./Main.styles";
import ManchineSwiper from "../../components/Main/MachineSwiper/ManchineSwiper.components";
import { useAuthCheckApi, useUserProfileGetApi } from "../../hooks/LoginAxios";
import { useSetRecoilState } from "recoil";
import { UserAuth } from "../../recoil/recoil";

const Main: FC = () => {
  const [slide, setSlide] = useState<number>(0);
  const [checkAuth] = useAuthCheckApi();
  const [profile] = useUserProfileGetApi();
  const SetUserAuth = useSetRecoilState(UserAuth);

  useEffect(() => {
    checkAuth && SetUserAuth(checkAuth.toString());
  }, [checkAuth]);

  return (
    <>
      {profile.nickname && profile.userId ? (
        <BackgroundOfMainContainer>
          <MainContainer>
            <ManchineSwiper slide={slide} setSlide={setSlide} />
            <MainBackground />
          </MainContainer>
        </BackgroundOfMainContainer>
      ) : (
        <MainEmpty>존재하지 않는 사용자입니다</MainEmpty>
      )}
    </>
  );
};

export default Main;
