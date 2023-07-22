import * as React from "react";
import Modal from "@mui/material/Modal";
import {
  CloseModalBtn,
  PhotoModalContainer,
  PhotoModalIMG,
  PhotoShareBtn,
} from "./PhotoModal.styles";
import closeIcon from "../../../assets/images/close_icon.png";

interface PhotoModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  imgSrc: string;
}

export default function PhotoModal({ open, setOpen, imgSrc }: PhotoModalProps) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <PhotoModalContainer>
          <CloseModalBtn onClick={handleClose}>
            <img src={closeIcon} alt="close" />
          </CloseModalBtn>
          <PhotoModalIMG src={imgSrc} />
          <ChildModal />
        </PhotoModalContainer>
      </Modal>
    </div>
  );
}

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <PhotoShareBtn variant="contained" onClick={handleOpen}>
        공유하기
      </PhotoShareBtn>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <PhotoModalContainer>
          공유하기 내용
          <PhotoShareBtn onClick={handleClose}>Close</PhotoShareBtn>
        </PhotoModalContainer>
      </Modal>
    </>
  );
}
