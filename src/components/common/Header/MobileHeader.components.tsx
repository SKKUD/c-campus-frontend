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
import { useRecoilValue } from "recoil";
import { UserState } from "../../../recoil/recoil";
import { useExtractID } from "../../../hooks/useExtractID";
import { useAuthCheckApi } from "../../../hooks/LoginAxios";

const MobileHeader: FC = () => {
  const isSafari = /^((?!chrome|android|CriOS).)*safari/i.test(
    navigator.userAgent
  );
  // 인포모달 구현
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  const [checkAuth] = useAuthCheckApi();
  // 뒤로가기버튼 구현
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const handleLogoClick = () => {
    if (checkAuth) {
      navigate(`/${checkAuth}`);
    } else {
      navigate(`/`);
    }
    window.location.reload();
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
      {isSafari ? (
        <HeaderIMG src={HeaderImg} alt="header" onClick={handleLogoClick} />
      ) : (
        <>
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
          <HeaderIMG src={HeaderImg} alt="header" onClick={handleLogoClick} />
          <StyledIconButton onClick={handleMenuClick}>
            <MenuIcon src={menuIcon} />
          </StyledIconButton>
          <HeaderPopover
            open={PopoverOpen}
            anchorEl={anchorEl}
            handleClose={handlePopoverClose}
          />
        </>
      )}
    </HeaderContainer>
  );
};

export default MobileHeader;
