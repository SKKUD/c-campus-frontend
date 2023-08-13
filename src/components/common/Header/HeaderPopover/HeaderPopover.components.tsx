import { FC } from "react";
import { Popover } from "@mui/material";
import { PopoverContainer, PopoverInner } from "./HeaderPopover.styles";
// import for recoil
import { IsLoginRecoil } from "../../../../recoil/recoil";
import { useRecoilState } from "recoil";

// import for redirect
import { useNavigate } from "react-router";

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
  const [isLogin, SetIsLogin] = useRecoilState(IsLoginRecoil);
  const navigate = useNavigate();

  const handleLogin = () => {
    // handle login

    // 
    SetIsLogin(true);
  };

  const handleMakeAccount = () => {
    navigate("/");
  };

  const handleLogout = () => {
    // handle logout

    // 로그아웃 처리가 잘 되면
    SetIsLogin(false);
  };

  const handleDeleteAccount = () => {

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
      {
        isLogin ? (
          <PopoverContainer>
            <PopoverInner onClick={handleLogout}>로그아웃</PopoverInner>
            <PopoverInner onClick={handleDeleteAccount}>계정삭제</PopoverInner>
          </PopoverContainer>
        ) : (
          <PopoverContainer>
            <PopoverInner onClick={handleMakeAccount}>로그인하기</PopoverInner>
            <PopoverInner onClick={handleMakeAccount}>계정 만들기</PopoverInner>
          </PopoverContainer>
        )
      }
    </Popover>
  );
};

export default HeaderPopover;
