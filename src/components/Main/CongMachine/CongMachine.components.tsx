import { useEffect, useState } from "react";
import cong0_top_img from "../../../assets/images/cong0_top.png";
import cong1_top_img from "../../../assets/images/cong1_top.png";
import cong2_top_img from "../../../assets/images/cong2_top.png";
import cong3_top_img from "../../../assets/images/cong3_top.png";
import cong4_top_img from "../../../assets/images/cong4_top.png";
import cong5_top_img from "../../../assets/images/cong5_top.png";
import cong10_top_img from "../../../assets/images/cong10_top.png";
import cong15_top_img from "../../../assets/images/cong15_top.png";
import cong30_top_img from "../../../assets/images/cong30_top.png";
import cong_bot_empty_img from "../../../assets/images/cong_bot_empty.png";
import cong_bot_full_img from "../../../assets/images/cong_bot_full.png";
import cong_bot_come_out_gif from "../../../assets/animations/cong_bot_af.gif";
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
import { CongMachineContainer, MachineImage } from "./CongMachine.styles";
import ButtonGroup from "../ButtonGroup/ButtonGroup.components";
import { ButtonGroupContainer } from "../ButtonGroup/ButtonGroup.styles";
import GreenBtn from "../../common/Buttons/GreenBtn.components";
import { useNavigate } from "react-router";

const CongMachine = () => {
  const navigate = useNavigate();
  const [topimgsrc, setTopImg] = useState(cong0_top_img);
  const [bottomimgsrc, setBottomImg] = useState(cong_bot_empty_img);
  const messagenum: number = 5;
  useEffect(() => {
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

  return (
    <CongMachineContainer>
      <MachineImage src={topimgsrc} />
      <MachineImage src={bottomimgsrc} />
      <ButtonGroupContainer>
        <GreenBtn
          content={true ? "쪽지 뽑기" : "쪽지 쓰기"}
          disabled={messagenum < 5 ? true : false}
          onClick={() => (true ? "쪽지 뽑기" : navigate("/message/post"))}
        />
      </ButtonGroupContainer>
    </CongMachineContainer>
  );
};

export default CongMachine;
