import { FC } from "react";
import { useNavigate } from "react-router";
import { useMediaQuery } from "@mui/material";
import { CongMachineContainer, MachinePhotoImage } from "./CongMachine.styles";
import congcam_af_gif from "../../../assets/animations/congcam_af.gif";
import congcam_bf_gif from "../../../assets/animations/congcam_bf.gif";
import { ButtonGroupContainer } from "../ButtonGroup/ButtonGroup.styles";
import GreenBtn from "../../common/Buttons/GreenBtn.components";
import ButtonGroup from "../ButtonGroup/ButtonGroup.components";

interface CongPhotoMachineProps {
  slide?: number;
}

const CongPhotoMachine: FC<CongPhotoMachineProps> = ({ slide }) => {
  const match1024 = useMediaQuery("(min-width:1024px)");
  const navigate = useNavigate();
  return (
    <CongMachineContainer>
      <MachinePhotoImage src={congcam_bf_gif} />
      {match1024 ? (
        <ButtonGroupContainer>
          <GreenBtn
            content="콩캠네컷 찍기"
            onClick={() => navigate("/photo/post")}
          />
        </ButtonGroupContainer>
      ) : (
        <ButtonGroup slide={slide} />
      )}
    </CongMachineContainer>
  );
};

export default CongPhotoMachine;
