import { useEffect, useState,FC } from "react";
import { useNavigate } from "react-router";
import { useMediaQuery } from "@mui/material";

import cong_bot_come_out_gif from "../../../assets/animations/cong_bot_af.gif";
import cong_bot_empty_gif from "../../../assets/animations/cong_bot_bf.gif";
import cong0_top_gif from "../../../assets/animations/cong0_top.gif";
import cong1_top_gif from "../../../assets/animations/cong1_top.gif";
import cong2_top_gif from "../../../assets/animations/cong2_top.gif";
import cong3_top_gif from "../../../assets/animations/cong3_top.gif";
import cong4_top_gif from "../../../assets/animations/cong4_top.gif";
import cong5_top_gif from "../../../assets/animations/cong5_top_bf.gif";
import cong5_top_come_out_gif from "../../../assets/animations/cong5_top_af.gif";
import cong10_top_gif from "../../../assets/animations/cong10_top_bf.gif";
import cong10_top_come_out_gif from "../../../assets/animations/cong10_top_af.gif";
import cong15_top_gif from "../../../assets/animations/cong15_top_bf.gif";
import cong15_top_come_out_gif from "../../../assets/animations/cong15_top_af.gif";
import cong30_top_gif from "../../../assets/animations/cong30_top_bf.gif";
import cong30_top_come_out_gif from "../../../assets/animations/cong30_top_af.gif";
import {
  CongMachineContainer,
  CongMachineContentContainer,
  MachineImage,
  CongMachineProfileContainer,
} from "./CongMachine.styles";
import ButtonGroup from "../ButtonGroup/ButtonGroup.components";
import { ButtonGroupContainer } from "../ButtonGroup/ButtonGroup.styles";
import GreenBtn from "../../common/Buttons/GreenBtn.components";
import { Ground } from "../../WebMainPage/WebMainPage.styles";

// import for recoil
import { IsLoginRecoil, UserAuth } from "../../../recoil/recoil";
import { useRecoilState } from "recoil";

interface CongMachineProps {
  slide?: number;
}

const CongMachine: FC<CongMachineProps> = ({ slide }) => {
  const match1024 = useMediaQuery("(min-width:1024px)");
  const navigate = useNavigate();
  const [topimgsrc, setTopImg] = useState(cong1_top_gif);
  const [bottomimgsrc, setBottomImg] = useState(cong_bot_empty_gif);
  const messagenum: number = 5;
  const [isLogin, SetIsLogin] = useRecoilState(IsLoginRecoil);
  const [userAuth, SetUserAuth] = useRecoilState(UserAuth);

  const [currentID, SetCurrentID] = useState<string>("");

  // extract url id
  const extractID = () => {
    // get current url
    
    const currentUrl: string = window.location.href;
    
    // check /main
    const searchString: string = "/main";
    var extractedID: string = "";

    // extract until first /
    var positionSliceMain: number = currentUrl.indexOf(searchString);
    if (positionSliceMain === -1) {
      const secondSearchString: string = "/message";
      positionSliceMain = currentUrl.indexOf(secondSearchString);
      extractedID = currentUrl.slice(positionSliceMain+secondSearchString.length+1);
    } else {
      extractedID = currentUrl.slice(positionSliceMain+searchString.length+1);
    }
    
    console.log("extracted " + extractedID);
    // set it to currentID
    SetCurrentID(extractedID);
  };

  useEffect(() => {
    extractID();
    if (messagenum === 1) {
      setTopImg(cong1_top_gif);
    } else if (messagenum === 2) {
      setTopImg(cong2_top_gif);
    } else if (messagenum === 3) {
      setTopImg(cong3_top_gif);
    } else if (messagenum === 4) {
      setTopImg(cong4_top_gif);
    } else if (5 <= messagenum && messagenum < 10) {
      setTopImg(cong5_top_gif);
    } else if (10 <= messagenum && messagenum < 15) {
      setTopImg(cong10_top_gif);
    } else if (15 <= messagenum && messagenum < 30) {
      setTopImg(cong15_top_gif);
    } else if (30 <= messagenum) {
      setTopImg(cong30_top_gif);
    }
  });

  const handleMessage = () => {
    // message pull
  };

  const handleWriteMessage = () => {
    // go to message write
    navigate("/message/post");
  };

  return (
    <CongMachineContainer>
      <CongMachineContentContainer>
        <MachineImage src={topimgsrc} />
        <MachineImage src={bottomimgsrc} style={{ marginTop: "-1px" }} />
        {/* <CongMachineProfileContainer>Hello</CongMachineProfileContainer> */}
        {match1024 ? (
          <ButtonGroupContainer>
            {
              (isLogin && (userAuth.userID === currentID)) ? (
                <GreenBtn
                  content={"쪽지 뽑기"}
                  disabled={messagenum < 5 ? true : false}
                  onClick={handleMessage}
                />
              ) : (
                <GreenBtn
                  content={"쪽지 쓰기"}
                  onClick={handleWriteMessage}
                />
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

export default CongMachine;
