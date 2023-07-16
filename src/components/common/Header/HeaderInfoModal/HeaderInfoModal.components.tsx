import { FC } from "react";
import Modal from "@mui/material/Modal";
import closeIcon from "../../../../assets/images/close_icon.png";
import infoDescImg from "../../../../assets/images/infoDescImg.png";
import {
  ModalContainer,
  BtnWrapper,
  InfoPaper,
  CloseBtn,
} from "./HeaderInfoModal.styles";

interface HeaderInfoModalProps {
  modalOpen: boolean;
  handleModalClose: () => void;
}

const HeaderInfoModal: FC<HeaderInfoModalProps> = ({
  modalOpen,
  handleModalClose,
}) => {
  return (
    <Modal open={modalOpen} onClose={handleModalClose}>
      <ModalContainer>
        <BtnWrapper>
          <CloseBtn onClick={handleModalClose}>
            <img src={closeIcon} />
          </CloseBtn>
        </BtnWrapper>
        <InfoPaper src={infoDescImg} />
      </ModalContainer>
    </Modal>
  );
};

export default HeaderInfoModal;
