import { ButtonGroupContainer } from "./ButtonGroup.styles";
import GreenBtn from "../../common/Buttons/GreenBtn.components";
import WhiteBtn from "../../common/Buttons/WhiteBtn.components";
import { FC } from "react";
import { useNavigate } from "react-router";

interface ButtonGroupProps {
  slide: number;
}

const ButtonGroup: FC<ButtonGroupProps> = ({ slide }) => {
  const navigate = useNavigate();
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

  return (
    <ButtonGroupContainer>
      <GreenBtn
        onClick={() => (!slide ? pickNotes() : takePhotos())}
        content={!slide ? "쪽지 뽑기" : "콩캠네컷 찍기"}
      />
      <WhiteBtn
        onClick={() => (!slide ? movetoNoteBox() : movetoPhotoBox())}
        content={!slide ? "쪽지 보관함" : "네컷 보관함"}
      />
    </ButtonGroupContainer>
  );
};

export default ButtonGroup;
