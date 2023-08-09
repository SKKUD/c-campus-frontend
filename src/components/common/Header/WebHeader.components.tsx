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

const WebHeader = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/message");
    window.location.reload();
  };
  return (
    <HeaderContainer>
      <HeaderIMG src={HeaderImg} alt="header" onClick={handleLogoClick} />
      <WebButtonWrap>
        <SwipeButtonGroup>
          <WebHeaderSwitch />
        </SwipeButtonGroup>
        <WebHeaderButton>로그아웃</WebHeaderButton>
      </WebButtonWrap>
    </HeaderContainer>
  );
};

export default WebHeader;
