import { FC } from "react";
import { Popover } from "@mui/material";
import { PopoverContainer, PopoverInner } from "./HeaderPopover.styles";

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
      <PopoverContainer>
        <PopoverInner>로그아웃</PopoverInner>
        <PopoverInner>계정삭제</PopoverInner>
      </PopoverContainer>
    </Popover>
  );
};

export default HeaderPopover;
