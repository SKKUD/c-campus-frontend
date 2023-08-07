import { CongMachineContainer, MachinePhotoImage } from "./CongMachine.styles";
import congcam_af_gif from "../../../assets/animations/congcam_af.gif";
import congcam_bf_gif from "../../../assets/animations/congcam_bf.gif";
import { ButtonGroupContainer } from "../ButtonGroup/ButtonGroup.styles";
import GreenBtn from "../../common/Buttons/GreenBtn.components";
import { useNavigate } from "react-router";
const CongPhotoMachine = () => {
  const navigate = useNavigate();
  return (
    <CongMachineContainer>
      <MachinePhotoImage src={congcam_bf_gif} />
      <ButtonGroupContainer>
        <GreenBtn
          content="콩캠네컷 찍기"
          onClick={() => navigate("/photo/post")}
        />
      </ButtonGroupContainer>
    </CongMachineContainer>
  );
};

export default CongPhotoMachine;
