import { ButtonGroupContainer } from "./ButtonGroup.styles";
import GreenBtn from "../../common/Buttons/GreenBtn.components";
import WhiteBtn from "../../common/Buttons/WhiteBtn.components";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router";

// import for recoil
import { UserAuth, UserState } from "../../../recoil/recoil";
import { useRecoilState, useRecoilValue } from "recoil";
import { useExtractID } from "../../../hooks/useExtractID";
import { useAuthCheckApi } from "../../../hooks/LoginAxios";

// import gif
import cong_bot_come_out_gif from "../../../assets/animations/cong_bot_af.gif";
import cong5_top_come_out_gif from "../../../assets/animations/cong5_top_af.gif";
import cong10_top_come_out_gif from "../../../assets/animations/cong10_top_af.gif";
import cong15_top_come_out_gif from "../../../assets/animations/cong15_top_af.gif";
import cong30_top_come_out_gif from "../../../assets/animations/cong30_top_af.gif";

import { PullMessage } from "../../../hooks/PullMessage";

import axios from "axios";
import PullMessageModal from "../../PullMessageModal/PullMessageModal.components";

interface ButtonGroupProps {
  slide?: number;
  messagenum?: number;
  setTopImg?: React.Dispatch<React.SetStateAction<any>>;
  setBottomImg?: React.Dispatch<React.SetStateAction<any>>;
  SetIsPulled?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonGroup: FC<ButtonGroupProps> = ({
  slide,
  messagenum = 5,
  setTopImg,
  setBottomImg,
  SetIsPulled,
}) => {
  const [open, setOpen] = useState(false);
  const userid = useExtractID();
  const navigate = useNavigate();
  const [userAuth, SetUserAuth] = useRecoilState(UserAuth);
  const currentID = useExtractID();
  const checkAuth = useAuthCheckApi();

  const pickNotes = () => {
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

          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // 쪽지 뽑는 gif 재생 후
    if (SetIsPulled) {
      SetIsPulled(true);
    }
    // navigate(`/message/${userid}`);
    if (setBottomImg) {
      setBottomImg(cong_bot_come_out_gif);
    }
    if (setTopImg) {
      if (30 <= messagenum) {
        setTopImg(cong30_top_come_out_gif);
      } else if (15 <= messagenum) {
        setTopImg(cong15_top_come_out_gif);
      } else if (10 <= messagenum) {
        setTopImg(cong10_top_come_out_gif);
      } else if (5 <= messagenum) {
        setTopImg(cong5_top_come_out_gif);
      }
    }

    // 모달 보여주기
    setTimeout(() => {
      setOpen(true);
    }, 2600);
  };
  const takePhotos = () => {
    navigate(`/photo/post/${userid}`);
  };
  const movetoNoteBox = () => {
    navigate(`/message/${userid}`);
  };
  const movetoPhotoBox = () => {
    navigate(`/photo/${userid}`);
  };
  const movetoMessagePost = () => {
    navigate(`/message/post/${userid}`);
  };
  const movetoMessageFeed = () => {
    navigate(`/message/feed/${userid}`);
  };

  useEffect(() => {
    if (messagenum >= 5) {
    }
  }, []);

  return (
    <ButtonGroupContainer>
      {
        // 현재 url의 /message/${id} 뽑아와서 비교하는 코드로
        checkAuth && userAuth === currentID ? (
          <>
            {!slide ? (
              <>
                <GreenBtn
                  onClick={() => pickNotes()}
                  content={"쪽지 뽑기"}
                  disabled={messagenum < 5 ? true : false}
                />
                <PullMessageModal
                  modalOpen={open}
                  handleModalClose={() => setOpen(false)}
                />
              </>
            ) : (
              <GreenBtn
                onClick={() => takePhotos()}
                content={"콩캠네컷 찍기"}
              />
            )}
            <WhiteBtn
              onClick={() => (!slide ? movetoNoteBox() : movetoPhotoBox())}
              content={!slide ? "쪽지 보관함" : "네컷 보관함"}
            />
          </>
        ) : (
          <>
            <GreenBtn
              onClick={() => movetoMessagePost()}
              content={"쪽지 쓰기"}
            />
            <WhiteBtn
              onClick={() => movetoMessageFeed()}
              content={"피드보기"}
            />
          </>
        )
      }
    </ButtonGroupContainer>
  );
};



export default ButtonGroup;
