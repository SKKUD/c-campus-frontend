import { useState } from "react";
import ExamplePhoto from "../../assets/images/examplephoto.png";
import ExamplePhoto2 from "../../assets/images/examplephoto2.png";
import PhotoModal from "../../components/PhotoBox/PhotoModal/PhotoModal.components";
import {
  PhotoBoxContainer,
  PhotoBoxLabel,
  PhotoFlexBox,
  PhotoWrapper,
  Photo,
} from "./PhotoBox.styles";

const photoArr = [
  ExamplePhoto,
  ExamplePhoto2,
  ExamplePhoto,
  ExamplePhoto2,
  ExamplePhoto,
  ExamplePhoto2,
  ExamplePhoto,
  ExamplePhoto2,
  ExamplePhoto,
  ExamplePhoto2,
  ExamplePhoto,
  ExamplePhoto2,
  ExamplePhoto,
  ExamplePhoto2,
  ExamplePhoto,
  ExamplePhoto2,
  ExamplePhoto,
  ExamplePhoto2,
  ExamplePhoto,
  ExamplePhoto2,
  ExamplePhoto,
  ExamplePhoto2,
];

const PhotoBox = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [imgSrc, setImgSrc] = useState<string>("");
  return (
    <PhotoBoxContainer>
      <PhotoBoxLabel>{photoArr.length}개의 콩캠네컷</PhotoBoxLabel>
      <PhotoFlexBox>
        {photoArr.map((item, idx) => (
          <PhotoWrapper
            onClick={() => {
              setOpen(true);
              setImgSrc(item);
            }}
            key={idx}
          >
            <Photo src={item} alt="congcam photo" />
          </PhotoWrapper>
        ))}
      </PhotoFlexBox>
      <PhotoModal open={open} setOpen={setOpen} imgSrc={imgSrc} />
    </PhotoBoxContainer>
  );
};

export default PhotoBox;
