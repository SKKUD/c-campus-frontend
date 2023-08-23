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
    // img에서 뒷부분 아이디 추출해야됨  https://블러블러/{여기}
    // extract ID
    console.log(img);
    const IMG_ID: string = img.slice(55)

    console.log(IMG_ID);
    // 추출한 아이디 여기 넣어놓으면 됨
    await fetch(IMG_ID)
      .then(response => response.blob())
      .then(blob => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = "콩캠네컷";
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
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
