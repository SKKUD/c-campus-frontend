import {
  HeaderContainer,
  HeaderIMG,
  WebHeaderButton,
  WebButtonWrap,
  SwipeButtonGroup,
} from "./Header.styles";
import HeaderImg from "../../../assets/images/headerimage.png";
import WebHeaderSwitch from "./WebHeaderSwitch/WebHeaderSwitch.components";
import { useNavigate } from "react-router";

// import for recoil
import { UserState } from "../../../recoil/recoil";
import { useRecoilValue } from "recoil";
import { useExtractID } from "../../../hooks/useExtractID";
import { useAuthCheckApi, useUserLogoutApi } from "../../../hooks/LoginAxios";
import { kakaoURL } from "../../../utils/login/KakaoLogin/KaKaoLoginURL";

const WebHeader = () => {
  const UA = navigator.userAgent.toLowerCase();
  const isChrome = UA.includes("chrome");

  const navigate = useNavigate();
  const currentID = useExtractID();
  const [checkAuth] = useAuthCheckApi();
  const [logout] = useUserLogoutApi();

  const handleLogoClick = () => {
    console.log(checkAuth);
    if (checkAuth) {
      navigate(`/${checkAuth}`);
    } else {
      navigate(`/`);
    }
    window.location.reload();
  };

  const handleLogout = () => {
    // 로그아웃 처리하기
    logout();
  };

  const handleMakeAccount = () => {
    window.location.href = kakaoURL;
  };

  return (
    <HeaderContainer>
      {!isChrome ? (
        <HeaderIMG src={HeaderImg} alt="header" onClick={handleLogoClick} />
      ) : (
        <>
          <HeaderIMG src={HeaderImg} alt="header" onClick={handleLogoClick} />
          <WebButtonWrap>
            <SwipeButtonGroup>
              {
                // 로그인이 되어있어야 switch 가능 | 로그인한 auth와 현재 url ID 비교
                checkAuth && String(checkAuth) === currentID ? (
                  <WebHeaderSwitch />
                ) : (
                  <></>
                )
              }
            </SwipeButtonGroup>
            {
              // 로그인만 되어있는지만 여부 체크
              checkAuth ? (
                <WebHeaderButton onClick={handleLogout}>
                  로그아웃
                </WebHeaderButton>
              ) : (
                <WebHeaderButton onClick={handleMakeAccount}>
                  로그인
                </WebHeaderButton>
              )
            }
          </WebButtonWrap>
        </>
      )}
    </HeaderContainer>
  );
};

export default WebHeader;
