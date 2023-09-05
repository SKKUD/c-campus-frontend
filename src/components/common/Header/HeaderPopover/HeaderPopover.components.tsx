import { FC } from "react";
import { Popover } from "@mui/material";
import { PopoverContainer, PopoverInner } from "./HeaderPopover.styles";

// import for redirect
import { useNavigate } from "react-router";
import {
  useAuthCheckApi,
  useUserLogoutApi,
} from "../../../../hooks/LoginAxios";
import { kakaoURL } from "../../../../utils/login/KakaoLogin/KaKaoLoginURL";

interface HeaderPopoverProps {
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  handleClose: () => void;
}

const HeaderPopover: FC<HeaderPopoverProps> = ({
  open,
  anchorEl,
  handleClose,
}) => {
  const [checkAuth] = useAuthCheckApi();
  const [logout] = useUserLogoutApi();

  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  const handleLogout = () => {
    // handle logout
    logout();
  };

  const handleGoMyaccount = () => {
    navigate(`/${checkAuth}`);
  };

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {checkAuth ? (
        <PopoverContainer>
          <PopoverInner onClick={handleLogout}>로그아웃</PopoverInner>
          <PopoverInner onClick={handleGoMyaccount}>내 콩캠 가기</PopoverInner>
        </PopoverContainer>
      ) : (
        <PopoverContainer>
          <PopoverInner onClick={handleLogin}>로그인하기</PopoverInner>
          <PopoverInner onClick={handleGoHome}>콩캠퍼스 소개</PopoverInner>
        </PopoverContainer>
      )}
    </Popover>
  );
};

export default HeaderPopover;
