import React from "react";
import cameraicon from "../../../assets/images/camera_btn.png";
import albumicon from "../../../assets/images/album_btn.png";
import { ButtonGroup, StyledIconButton } from "./IconBtnGroup.styles";

interface CaptureProps {
  takePhoto: () => void;
}

const IconBtnGroup: React.FC<CaptureProps> = ({ takePhoto }) => {
  return (
    <ButtonGroup>
      <StyledIconButton>
        <img src={cameraicon} className="camera" onClick={takePhoto} />
      </StyledIconButton>
      <StyledIconButton>
        <img src={albumicon} className="album" />
      </StyledIconButton>
    </ButtonGroup>
  );
};
export default IconBtnGroup;
