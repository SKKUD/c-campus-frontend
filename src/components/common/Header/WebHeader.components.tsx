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
import { IsLoginRecoil } from "../../../recoil/recoil";
import { useRecoilState } from "recoil";

const WebHeader = () => {
  const navigate = useNavigate();
  const [isLogin, SetIsLogin] = useRecoilState(IsLoginRecoil);
  
  const handleLogoClick = () => {
    navigate("/message");
    window.location.reload();
  };

  const handleLogout = () => {
    // 로그아웃 처리하기

    // isLogin false로 만들기
    SetIsLogin(false);
  };

  const handleMakeAccount = () => {
    // home으로 redirect?
    navigate("/");
  };

  return (
    <HeaderContainer>
      <HeaderIMG src={HeaderImg} alt="header" onClick={handleLogoClick} />
      <WebButtonWrap>
        <SwipeButtonGroup>
          { // 로그인이 되어있어야 switch 가능
            isLogin ? (
              <WebHeaderSwitch />
            ) : (
              <></>
            )
          }
        </SwipeButtonGroup>
        {
          isLogin ? (
            <WebHeaderButton onClick={handleLogout}>로그아웃</WebHeaderButton>
          ) : (
            <WebHeaderButton onClick={handleMakeAccount}>계정 만들기</WebHeaderButton>
          )
        }
      </WebButtonWrap>
    </HeaderContainer>
  );
};

export default WebHeader;
