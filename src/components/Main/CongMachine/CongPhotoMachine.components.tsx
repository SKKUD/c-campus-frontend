import { FC } from "react";
import { useNavigate } from "react-router";
import { useMediaQuery } from "@mui/material";
import {
  CongMachineContainer,
  CongMachineContentContainer,
  MachinePhotoImage,
} from "./CongMachine.styles";
import congcam_af_gif from "../../../assets/animations/congcam_af.gif";
import congcam_bf_gif from "../../../assets/animations/congcam_bf.gif";
import { ButtonGroupContainer } from "../ButtonGroup/ButtonGroup.styles";
import GreenBtn from "../../common/Buttons/GreenBtn.components";
import ButtonGroup from "../ButtonGroup/ButtonGroup.components";
import { useExtractID } from "../../../hooks/useExtractID";
import Profile from "../../common/Profile/Profile.components";
import { CheckRemainCount } from "../../../hooks/PullMessage";

import { useAuthCheckApi } from "../../../hooks/LoginAxios";
import { useRecoilState } from "recoil";
import { UserAuth } from "../../../recoil/recoil";

interface CongPhotoMachineProps {
  slide?: number;
}

const CongPhotoMachine: FC<CongPhotoMachineProps> = ({ slide }) => {
  const userid = useExtractID();
  const match1024 = useMediaQuery("(min-width:1024px)");
  const navigate = useNavigate();
  const [checkAuth] = useAuthCheckApi();
  const [userAuth, SetUserAuth] = useRecoilState(UserAuth);
  const currentID = useExtractID();
  const messageNumber = CheckRemainCount(userid);

  return (
    <CongMachineContainer>
      <CongMachineContentContainer>
        {match1024 && <Profile coin={Number(messageNumber)} />}
        <MachinePhotoImage src={congcam_bf_gif} />
        {match1024 ? (
          <ButtonGroupContainer>
            {
              (checkAuth && userAuth === currentID) ? (
                <GreenBtn
                  content="콩캠네컷 찍기"
                  onClick={() => {
                            navigate(`/photo/post/${userid}`);
                            window.location.reload();
                          }}
                />
              ) : (
                <></>
              )
            }
          </ButtonGroupContainer>
        ) : (
          <ButtonGroup slide={slide} />
        )}
      </CongMachineContentContainer>
    </CongMachineContainer>
  );
};

export default CongPhotoMachine;
