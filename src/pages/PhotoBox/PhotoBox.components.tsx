import { useState } from "react";
import ExamplePhoto from "../../assets/images/examplephoto.png";
import ExamplePhoto2 from "../../assets/images/examplephoto2.png";
import PhotoModal from "../../components/PhotoBox/PhotoModal/PhotoModal.components";
import {
  PhotoBoxContainer,
  PhotoBoxLabel,
  PhotoFlexBox,
  PhotoScrollContainer,
  PhotoWrapper,
  Photo,
} from "./PhotoBox.styles";
import { usePhotoGetApi } from "../../hooks/PhotoAxois";

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
  const [photo] = usePhotoGetApi();
  const [open, setOpen] = useState<boolean>(false);
  const [imgSrc, setImgSrc] = useState<string>("");
  return (
    <PhotoBoxContainer>
      <PhotoBoxLabel>{photoArr.length}개의 콩캠네컷</PhotoBoxLabel>
      <PhotoFlexBox>
        <PhotoScrollContainer>
          {photo &&
            photo.map((item, idx) => (
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
        </PhotoScrollContainer>
      </PhotoFlexBox>
      <PhotoModal open={open} setOpen={setOpen} imgSrc={imgSrc} />
    </PhotoBoxContainer>
  );
};

export default PhotoBox;
