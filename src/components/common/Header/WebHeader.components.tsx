import {
  HeaderContainer,
  HeaderIMG,
  WebHeaderButton,
  WebButtonWrap,
  SwipeButtonGroup,
} from "./Header.styles";
import HeaderImg from "../../../assets/images/headerimage.png";

const WebHeader = () => {
  return (
    <HeaderContainer>
      <HeaderIMG src={HeaderImg} alt="header" />
      <WebButtonWrap>
        <SwipeButtonGroup>
          <WebHeaderButton>콩캠 머신</WebHeaderButton>
          <WebHeaderButton>콩캠 네컷</WebHeaderButton>
        </SwipeButtonGroup>
        <WebHeaderButton>로그아웃</WebHeaderButton>
      </WebButtonWrap>
    </HeaderContainer>
  );
};

export default WebHeader;
