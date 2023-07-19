import { ButtonGroupContainer } from "./ButtonGroup.styles";
import GreenBtn from "../../common/Buttons/GreenBtn.components";
import WhiteBtn from "../../common/Buttons/WhiteBtn.components";
import { FC } from "react";

interface ButtonGroupProps {
  slide: number;
}

const ButtonGroup: FC<ButtonGroupProps> = ({ slide }) => {
  const pickNotes = () => {
    console.log("쪽지 뽑음");
  };
  const takePhotos = () => {
    console.log("콩캠네컷 찍기");
  };
  const movetoNoteBox = () => {
    console.log("쪽지 보관함");
  };
  const movetoPhotoBox = () => {
    console.log("네컷 보관함");
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
