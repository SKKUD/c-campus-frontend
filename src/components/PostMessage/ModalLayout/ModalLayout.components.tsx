import { FC, ReactNode } from "react";
import Modal from "@mui/material/Modal";
import {
  ModalContainer,
  ModalContentContainer,
  CloseButtonContainer,
  CloseButton,
} from "./ModalLayout.styles";

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
        <ModalContentContainer>
          <CloseButtonContainer>
            <CloseButton onClick={handleModalClose} />
          </CloseButtonContainer>
          {children}
        </ModalContentContainer>
      </ModalContainer>
    </Modal>
  );
};

export default ModalLayout;
