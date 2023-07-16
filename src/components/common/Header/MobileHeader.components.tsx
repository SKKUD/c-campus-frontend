import React, { FC, useState } from "react";
import HeaderPopover from "./HeaderPopover/HeaderPopover.components";
import {
  HeaderContainer,
  HeaderIMG,
  StyledIconButton,
  BackIcon,
  InfoIcon,
  MenuIcon,
} from "./Header.styles";
import HeaderImg from "../../../assets/images/headerimage.png";
import backIcon from "../../../assets/images/back_icon.svg";
import infoIcon from "../../../assets/images/info_icon.svg";
import menuIcon from "../../../assets/images/menu_icon.svg";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderInfoModal from "./HeaderInfoModal/HeaderInfoModal.components";

const MobileHeader: FC = () => {
  // 인포모달 구현
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  // 뒤로가기버튼 구현
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  // 메뉴버튼 팝업 구현
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const PopoverOpen = Boolean(anchorEl);

  return (
    <HeaderContainer>
      {pathname === "/main" ? (
        <StyledIconButton onClick={handleModalOpen}>
          <InfoIcon src={infoIcon} />
        </StyledIconButton>
      ) : (
        <StyledIconButton onClick={handleGoBack}>
          <BackIcon src={backIcon} />
        </StyledIconButton>
      )}
      <HeaderInfoModal
        modalOpen={modalOpen}
        handleModalClose={handleModalClose}
      />

      <HeaderIMG src={HeaderImg} alt="header" />

      <StyledIconButton onClick={handleMenuClick}>
        <MenuIcon src={menuIcon} />
      </StyledIconButton>
      <HeaderPopover
        open={PopoverOpen}
        anchorEl={anchorEl}
        handleClose={handlePopoverClose}
      />
    </HeaderContainer>
  );
};

export default MobileHeader;
