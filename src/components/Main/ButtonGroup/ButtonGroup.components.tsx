import { ButtonGroupContainer } from "./ButtonGroup.styles";
import GreenBtn from "../../common/Buttons/GreenBtn.components";
import WhiteBtn from "../../common/Buttons/WhiteBtn.components";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router";

// import for recoil
import { IsLoginRecoil, UserAuth } from "../../../recoil/recoil";
import { useRecoilState } from "recoil";

interface ButtonGroupProps {
  slide?: number;
  messagenum?: number;
}

const ButtonGroup: FC<ButtonGroupProps> = ({ slide, messagenum = 5 }) => {
  const navigate = useNavigate();
  const [isLogin, SetIsLogin] = useRecoilState(IsLoginRecoil);
  const [userAuth, SetUserAuth] = useRecoilState(UserAuth);

  const [currentID, SetCurrentID] = useState<string>("");

  // extract url id
  const extractID = () => {
    // get current url
    const currentUrl: string = window.location.href;
    const searchString: string = "/main";
    
    // extract until first /
    var positionSliceMain: number = currentUrl.indexOf(searchString);
    
    var extractedID: string = currentUrl.slice(positionSliceMain+searchString.length+1);
    console.log("extracted " + extractedID);
    // set it to currentID
    SetCurrentID(extractedID);
  };

  const pickNotes = () => {
    // 쪽지 뽑는 gif 재생 후
    navigate("/message");
  };
  const takePhotos = () => {
    navigate("/photo/post");
  };
  const movetoNoteBox = () => {
    navigate("/message");
  };
  const movetoPhotoBox = () => {
    navigate("/photo");
  };
  const movetoMessagePost = () => {
    navigate("/message/post");
  }

  useEffect(() => {
    extractID();
  }, []);

  return (
    <ButtonGroupContainer>
      {  // 현재 url의 /message/${id} 뽑아와서 비교하는 코드로
        (isLogin && (userAuth.userID === currentID)) ? (
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
              onClick={() => (!slide ? movetoMessagePost() : takePhotos())}
              content={"쪽지 쓰기"}
              disabled={messagenum < 5 ? true : false}
            />
            <WhiteBtn
              onClick={() => (!slide ? movetoNoteBox() : movetoPhotoBox())}
              content={"피드보기"}
            />
          </>
        )
      }
    </ButtonGroupContainer>
  );
};

export default ButtonGroup;
