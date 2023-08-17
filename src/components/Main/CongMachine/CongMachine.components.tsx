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
import { UserAuth, UserState } from "../../../recoil/recoil";
import { useRecoilState, useRecoilValue } from "recoil";
import { useExtractID } from "../../../hooks/useExtractID";
import { useAuthCheckApi } from "../../../hooks/LoginAxios";
import Profile from "../../common/Profile/Profile.components";

// import for messagenum
import { CheckRemainCount } from "../../../hooks/PullMessage";

// 
import axios from "axios";
import PullMessageModal from "../../PullMessageModal/PullMessageModal.components";

interface CongMachineProps {
  slide?: number;
}

const CongMachine: FC<CongMachineProps> = ({ slide }) => {
  const userid = useExtractID();
  const match1024 = useMediaQuery("(min-width:1024px)");
  const navigate = useNavigate();
  const [topimgsrc, setTopImg] = useState(cong1_top_gif);
  const [bottomimgsrc, setBottomImg] = useState(cong_bot_empty_gif);
  const [messagenum, SetMessageNum] = useState<number>(0);
  const [userAuth, SetUserAuth] = useRecoilState(UserAuth);
  const currentID = useExtractID();
  const [checkAuth] = useAuthCheckApi();
  const messageNumber = CheckRemainCount(userid);
  const [isPulled, SetIsPulled] = useState<boolean>(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (checkAuth && String(checkAuth) === userid) {
      SetMessageNum(Number(messageNumber));
    } else {
      SetMessageNum(5);
    }

    if (!isPulled) {
      let topImg;

      if (messagenum === 0) {
        topImg = cong0_top_gif;
      } else if (messagenum === 1) {
        topImg = cong1_top_gif;
      } else if (messagenum === 2) {
        topImg = cong2_top_gif;
      } else if (messagenum === 3) {
        topImg = cong3_top_gif;
      } else if (messagenum === 4) {
        topImg = cong4_top_gif;
      } else if (5 <= messagenum && messagenum < 10) {
        topImg = cong5_top_gif;
      } else if (10 <= messagenum && messagenum < 15) {
        topImg = cong10_top_gif;
      } else if (15 <= messagenum && messagenum < 30) {
        topImg = cong15_top_gif;
      } else if (30 <= messagenum) {
        topImg = cong30_top_gif;
      }

      setTopImg(topImg);
    }
  }, [checkAuth, messagenum, isPulled]);
  

  const handleMessage = () => {
    // web에서 핸들링
    // pull
    if (messagenum >= 5) {
      const res = axios
        .get(
          `${process.env.REACT_APP_BACKEND_SERVER}/users/${userAuth}/messages/unpulled`,
          { withCredentials: true }
        )
        .then((response) => {
          if (response.status === 400) {
            console.log("5개 미만임");
          } else if (response.status === 200) {
            console.log("성공적으로 뽑음");
          } else {
            console.log("이외의 오류");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // 쪽지 뽑는 gif 재생 후
    SetIsPulled(true);

    // bottom img
    setBottomImg(cong_bot_come_out_gif);

    // set top img
    if (30 <= messagenum) {
      setTopImg(cong30_top_come_out_gif);
    } else if (15 <= messagenum) {
      setTopImg(cong15_top_come_out_gif);
    } else if (10 <= messagenum) {
      setTopImg(cong10_top_come_out_gif);
    } else if (5 <= messagenum) {
      setTopImg(cong5_top_come_out_gif);
    }

    // 모달 보여주기
    setTimeout(() => {
      setOpen(true);
    }, 2600);
  };

  const handleWriteMessage = () => {
    // go to message write
    navigate(`/message/post/${userid}`);
  };

  return (
    <CongMachineContainer>
      <CongMachineContentContainer>
        {match1024 && <Profile coin={messagenum} />}
        <MachineImage src={topimgsrc} />
        <MachineImage src={bottomimgsrc} style={{ marginTop: "-1px" }} />
        {/* <CongMachineProfileContainer>Hello</CongMachineProfileContainer> */}
        {match1024 ? ( // 웹일 때
          <ButtonGroupContainer>
            {checkAuth && userAuth === currentID ? (
              <>
                <GreenBtn
                  content={"쪽지 뽑기"}
                  disabled={messagenum < 5 ? true : false}
                  onClick={handleMessage}
                />
                <PullMessageModal
                  modalOpen={open}
                  handleModalClose={() => setOpen(false)}
                />
              </>
            ) : (
              <GreenBtn content={"쪽지 쓰기"} onClick={handleWriteMessage} />
            )}
          </ButtonGroupContainer>
        ) : (
          // 모바일일 때
          <ButtonGroup
            slide={slide}
            messagenum={messagenum}
            setTopImg={setTopImg}
            setBottomImg={setBottomImg}
            SetIsPulled={SetIsPulled}
          />
        )}
      </CongMachineContentContainer>
    </CongMachineContainer>
  );
};

export default CongMachine;
