import { FC, ReactNode } from "react";
import Modal from "@mui/material/Modal";
import closeIcon from "../../../assets/images/close_icon.png";
import { ModalContainer, BtnWrapper, CloseBtn } from "./ModalLayout.styles";

interface ModalLayoutProps {
  modalOpen: boolean;
  handleModalClose: () => void;
  children: ReactNode;
}

const ModalLayout: FC<ModalLayoutProps> = ({
  children,
  modalOpen,
  handleModalClose,
}) => {
  return (
    <Modal open={modalOpen} onClose={handleModalClose}>
      <ModalContainer>
        {/* <BtnWrapper>
          <CloseBtn onClick={handleModalClose}>
            <img src={closeIcon} alt="Close Icon" />
          </CloseBtn>
        </BtnWrapper> */}
        {children}
      </ModalContainer>
    </Modal>
  );
};

export default ModalLayout;
