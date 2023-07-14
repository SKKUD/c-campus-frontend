import React from "react";
import { AppBar, Grid, useMediaQuery } from "@mui/material";
import {
  MobileHeaderContainer,
  MobileHeaderGrid,
  MobileHeaderIMG,
  WebHeaderContainer,
} from "./Header.styles";
import MobileHeaderImg from "../../../assets/images/mobileheader.png";

const Header = () => {
  const match744 = useMediaQuery("(min-width:744px)");
  return (
    <>
      <AppBar>{match744 ? <WebHeader /> : <MobileHeader />}</AppBar>
    </>
  );
};

export default Header;

const MobileHeader = () => {
  return (
    <>
      <MobileHeaderIMG src={MobileHeaderImg} alt="header" />
      <MobileHeaderContainer>
        <MobileHeaderGrid container spacing={2}>
          <MobileHeaderGrid item xs={2.5} />
          <MobileHeaderGrid item xs={7} />
          <MobileHeaderGrid item xs={2.5} />
        </MobileHeaderGrid>
      </MobileHeaderContainer>
    </>
  );
};

const WebHeader = () => {
  return <WebHeaderContainer></WebHeaderContainer>;
};
