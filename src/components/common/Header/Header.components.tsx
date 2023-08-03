import { AppBar, useMediaQuery } from "@mui/material";
import MobileHeader from "./MobileHeader.components";
import WebHeader from "./WebHeader.components";

const Header = () => {
  const match1024 = useMediaQuery("(min-width:1024px)");

  return (
    <>
    <AppBar>{match1024 ? <WebHeader /> : <MobileHeader />}</AppBar>
    </>
  );
};

export default Header;
