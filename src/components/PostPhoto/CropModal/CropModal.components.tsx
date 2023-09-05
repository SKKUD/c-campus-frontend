import React, { useRef } from "react";
import { Cropper, ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Modal } from "@mui/material";
import {
  CropModaContainer,
  CheckButton,
  CancleButton,
  ButtonWrap,
} from "./CropModal.styles";
import { ReactComponent as CheckIcon } from "../../../assets/images/check.svg";

interface CaptureProps {
  choosePhoto: React.Dispatch<React.SetStateAction<string | null>>;
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  done: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  inputImage: string | null;
  setInputImage: React.Dispatch<React.SetStateAction<string | null>>;
}

const CropModal: React.FC<CaptureProps> = ({
  choosePhoto,
  current,
  setCurrent,
  done,
  open,
  setOpen,
  inputImage,
  setInputImage,
}) => {
  const cropperRef = useRef<ReactCropperElement>(null);

  const handleClose = () => {
    setOpen(false);
    setInputImage(null);
  };

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      onCrop(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
  };
  const onCrop = (image: string) => {
    choosePhoto(image);
    done === "editing" ? setCurrent(5) : setCurrent(current + 1);
    handleClose();
  };
  return (
    <Modal open={open} onClose={handleClose} sx={{ outline: "none" }}>
      <CropModaContainer>
        <Cropper
          ref={cropperRef}
          aspectRatio={1.7}
          src={inputImage ? inputImage : ""}
          viewMode={1}
          width={800}
          height={500}
          background={false}
          responsive
          autoCropArea={1}
          checkOrientation={false}
          guides
        />
        <ButtonWrap>
          <CheckButton onClick={getCropData}>
            <CheckIcon width="32px" height="24px" />
          </CheckButton>
          <CancleButton onClick={() => handleClose()}>취소</CancleButton>
        </ButtonWrap>
      </CropModaContainer>
    </Modal>
  );
};

export default CropModal;
