import React, { useRef, useState } from "react";
import cameraicon from "../../../assets/images/camera_btn.png";
import albumicon from "../../../assets/images/album_btn.png";
import { ButtonGroup, StyledIconButton } from "./IconBtnGroup.styles";
import CropModal from "../CropModal/CropModal.components";

interface CaptureProps {
  takePhoto: () => void;
  choosePhoto: React.Dispatch<React.SetStateAction<string | null>>;
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  done: boolean;
}

const IconBtnGroup: React.FC<CaptureProps> = ({
  takePhoto,
  choosePhoto,
  current,
  setCurrent,
  done,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [inputImage, setInputImage] = useState<string | null>(null);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleAlbumButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();

    const files = event.target.files;

    if (!files || files.length === 0) {
      console.log("return");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      handleOpen();
      setInputImage(reader.result as string);
    };
    reader.readAsDataURL(files[0]);
  };

  return (
    <ButtonGroup>
      <StyledIconButton onClick={takePhoto}>
        <img src={cameraicon} className="camera" alt="cameraBtn" />
      </StyledIconButton>
      <StyledIconButton onClick={handleAlbumButtonClick}>
        <img src={albumicon} className="album" alt="albumBtn" />
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={handleFileInputChange}
        />
      </StyledIconButton>
      <CropModal
        choosePhoto={choosePhoto}
        current={current}
        setCurrent={setCurrent}
        done={done}
        open={open}
        setOpen={setOpen}
        inputImage={inputImage}
        setInputImage={setInputImage}
      />
    </ButtonGroup>
  );
};

export default IconBtnGroup;
