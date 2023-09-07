import { Button, IconButton } from "@mui/material";
import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 56px;
  padding: 0 15px;
  background-color: #164300;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1024px) {
    height: 72px;
    justify-content: flex-start;
  }
`;

export const HeaderIMG = styled.img`
  width: 140px;
  height: 66px;
  margin-top: 30px;
  @media (min-width: 1024px) {
    width: 190px;
    height: 91px;
    margin-top: 40px;
  }
`;

export const StyledIconButton = styled(IconButton)`
  width: 48px;
  height: 48px;
`;

export const BackIcon = styled.img`
  width: 24px;
  height: 28px;
`;

export const MenuIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const InfoIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const WebHeaderButton = styled(Button)`
  width: 140px;
  height: 40px;
  color: #fff;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

export const WebButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SwipeButtonGroup = styled.div`
  width: 100%;
  padding-right: 70px;
  display: flex;
  justify-content: center;
`;
