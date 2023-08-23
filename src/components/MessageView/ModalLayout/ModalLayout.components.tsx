import { FC, ReactNode } from "react";
import Modal from "@mui/material/Modal";
import {
  ModalContainer,
  ModalContainerInner,
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
    <Modal
      open={modalOpen}
      onClose={handleModalClose}
      sx={{
        overflowY: "scroll",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <ModalContainerInner>{children}</ModalContainerInner>
    </Modal>
  );
};

export default ModalLayout;
