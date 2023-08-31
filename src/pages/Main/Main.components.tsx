import { FC, useEffect, useState } from "react";
import {
  MainContainer,
  MainBackground,
  BackgroundOfMainContainer,
  MainEmpty,
} from "./Main.styles";
import ManchineSwiper from "../../components/Main/MachineSwiper/ManchineSwiper.components";
import { useExtractID } from "../../hooks/useExtractID";
import { useAuthCheckApi, useUserProfileGetApi } from "../../hooks/LoginAxios";
import { useRecoilState } from "recoil";
import { UserAuth } from "../../recoil/recoil";


const Main: FC = () => {
  const [slide, setSlide] = useState<number>(0);
  const currentID = useExtractID();
  const [checkAuth] = useAuthCheckApi();
  const [profile] = useUserProfileGetApi();
  const [userAuth, SetUserAuth] = useRecoilState(UserAuth);

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
