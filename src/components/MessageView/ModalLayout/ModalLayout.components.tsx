import { FC, ReactNode } from "react";
import Modal from "@mui/material/Modal";
import { ModalContainer, ModalContainerInner } from "./ModalLayout.styles";

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
        <ModalContainerInner>{children}</ModalContainerInner>
      </ModalContainer>
    </Modal>
  );
};

export default ModalLayout;
