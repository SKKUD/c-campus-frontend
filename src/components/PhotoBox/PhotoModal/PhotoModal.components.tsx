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
import AWS from 'aws-sdk';
import defaultFourcut from "../../../assets/images/default_fourcut.png";

import html2canvas from 'html2canvas';
import saveAs from "file-saver";
import { useRef } from "react";

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
        <ChildModal img={imgSrc}/>
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
    console.log(img + " clicked ");

    const res = await axios.get(IMG_ID, {
                        responseType: 'blob',
                        headers: {
                          "Content-Type": "image/png",
                          "server": "AmazonS3",
                        }
                      })
                      .then((response) => {
                        console.log(response);
                        return new Blob([response.data]);
                      })
                      .then(imageData => {
                        console.log(imageData);
                        // Create a Blob from the image data
                        const blob = new Blob([imageData], { type: 'image/png' });
                        console.log(blob);
                        // Create a downloadable link
                        const url = window.URL.createObjectURL(blob);
                        const link = document.createElement('a');
                        link.href = url;
                        link.download = '콩캠네컷.png'; // Set the desired filename
                
                        // Trigger the download
                        link.click();
                        // Clean up
                        window.URL.revokeObjectURL(url);
                      })
                      .catch((error) => {
                        console.log(error);
                      }); 
  }

  const downloadFileSaver = () => {
    console.log("download v7");
    const IMG_ID: string = img.slice(55)

    fetch(IMG_ID, {method: 'GET'})
      .then(res => {
        return res.blob();
      })
      .then(blob => {
        saveAs(blob, '콩캠네컷.png');
      })
      .catch(err => {
        console.error('err: ', err);
      })
  };

  const downloadFile = () => {
    console.log("download file to v2 version");

    const IMG_ID: string = img.slice(55)

    fetch(IMG_ID, { method: 'GET' })
        .then((res) => {
          return res.blob();
        })
        .then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = "콩캠네컷";
            document.body.appendChild(a);
            a.click();
        })
        .catch((err) => {
            console.error('err: ', err);
        });
  };

  // const downloadFileV9 = async () => {
  //   const IMG_ID: string = img.slice(56)

  //   const s3 = new AWS.S3();
  //   const params = {
  //     Bucket: 'https://c-campus-bucket.s3.ap-northeast-2.amazonaws.com',
  //     Key: IMG_ID,
  //   };

  //   try {
  //     const data = await s3.getObject(params).promise();
  //     const blob = new Blob([data.Body as BlobPart], { type: 'image/png' });
  //     const url = URL.createObjectURL(blob);

  //     const link = document.createElement('a');
  //     link.href = url;
  //     link.download = 'image.png';
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   } catch (error) {
  //     console.error('Error downloading image:', error);
  //   }
  // };

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
