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

interface ButtonGroupProps {
  slide?: number;
  messagenum?: number;
}

const ButtonGroup: FC<ButtonGroupProps> = ({ slide, messagenum = 5 }) => {
  const userid = useExtractID();
  const navigate = useNavigate();
  const [userAuth, SetUserAuth] = useRecoilState(UserAuth);
  const currentID = useExtractID();
  const checkAuth = useAuthCheckApi();

  const pickNotes = () => {
    // 쪽지 뽑는 gif 재생 후
    navigate(`/message/${userid}`);
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

  return (
    <ButtonGroupContainer>
      {
        // 현재 url의 /message/${id} 뽑아와서 비교하는 코드로
        checkAuth && userAuth === currentID ? (
          <>
            <GreenBtn
              onClick={() => (!slide ? pickNotes() : takePhotos())}
              content={!slide ? "쪽지 뽑기" : "콩캠네컷 찍기"}
              disabled={messagenum < 5 ? true : false}
            />
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
              disabled={messagenum < 5 ? true : false}
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
