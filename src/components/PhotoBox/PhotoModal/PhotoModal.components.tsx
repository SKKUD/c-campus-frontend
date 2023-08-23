import * as React from "react";
import Modal from "@mui/material/Modal";
import ModalLayout from "../../PostMessage/ModalLayout/ModalLayout.components";
import {
  CloseModalBtn,
  PhotoDeleteBtn,
  PhotoModalButtonGroup,
  PhotoModalContainer,
  PhotoModalIMG,
  PhotoShareBtn,
  PhotoDeleteConfirmBtn,
  ChildModalContainer,
} from "./PhotoModal.styles";
import closeIcon from "../../../assets/images/close_icon.png";
import deleteIcon from "../../../assets/images/delete_icon.png";
import { usePhotoDeleteApi } from "../../../hooks/PhotoAxios";

import axios from "axios";

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
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        overflowY: "scroll",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <PhotoModalContainer>
        <PhotoModalIMG src={imgSrc} />
        <ChildModal img={imgSrc} />
      </PhotoModalContainer>
    </Modal>
  );
}

interface ChildModalProps {
  img: string;
}

function ChildModal({ img }: ChildModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const imgFileParser = img.split("/");
  const [deleteFourcutPhoto] = usePhotoDeleteApi();
  const handleDelete = async () => {
    await deleteFourcutPhoto(imgFileParser[3]);
    handleClose();
    window.location.reload();
  };

  const saveImageLocally = async () => {
    // extract ID
    const IMG_ID: string = img.slice(55)

    await fetch(IMG_ID)
      .then(response => response.blob())
      .then(imageData => {
        // Create a Blob from the image data
        const blob = new Blob([imageData], { type: 'image/png' });

        // Create a downloadable link
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = '콩캠네컷.png'; // Set the desired filename

        // Trigger the download
        link.click();
        console.log("This is new method");
        // Clean up
        window.URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('Error saving image:', error);
      });
  }

  React.useEffect(() => {
    console.log(img);
  })

  return (
    <>
      <PhotoModalButtonGroup>
        <PhotoDeleteBtn src={deleteIcon} onClick={handleOpen} />
        <PhotoShareBtn variant="contained" onClick={saveImageLocally}>저장하기</PhotoShareBtn>
      </PhotoModalButtonGroup>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <ModalLayout modalOpen={open} handleModalClose={handleClose}>
          선택하신 콩캠네컷을 지울까요?
          <PhotoDeleteConfirmBtn onClick={handleDelete}>
            삭제
          </PhotoDeleteConfirmBtn>
        </ModalLayout>
      </Modal>
    </>
  );
}
