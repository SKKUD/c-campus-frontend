import React from "react";
import { AppBar, useMediaQuery } from "@mui/material";
import { WebHeaderContainer } from "./Header.styles";
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
  return <img src={MobileHeaderImg} alt="header" />;
};

const WebHeader = () => {
  return <WebHeaderContainer></WebHeaderContainer>;
};
