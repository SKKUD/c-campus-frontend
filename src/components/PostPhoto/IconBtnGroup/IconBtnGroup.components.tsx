import cameraicon from "../../../assets/images/camera_btn.png";
import albumicon from "../../../assets/images/album_btn.png";
import { ButtonGroup, StyledIconButton } from "./IconBtnGroup.styles";
const IconBtnGroup = () => {
  return (
    <ButtonGroup>
      <StyledIconButton>
        <img src={cameraicon} className="camera" />
      </StyledIconButton>
      <StyledIconButton>
        <img src={albumicon} className="album" />
      </StyledIconButton>
    </ButtonGroup>
  );
};
export default IconBtnGroup;
