import { useEffect, useState } from "react";
import ExamplePhoto from "../../assets/images/examplephoto.png";
import ExamplePhoto2 from "../../assets/images/examplephoto2.png";
import PhotoModal from "../../components/PhotoBox/PhotoModal/PhotoModal.components";
import {
  PhotoBoxContainer,
  PhotoBoxLabel,
  PhotoFlexBox,
  PhotoScrollContainer,
  PhotoWrapper,
  PhotoBoxEmpty,
  Photo,
} from "./PhotoBox.styles";
import { usePhotoGetApi } from "../../hooks/PhotoAxios";

// import for auth
import { useAuthCheckApi } from "../../hooks/LoginAxios";

// import for extract current ID
import { useExtractID } from "../../hooks/useExtractID";

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
  // check ID
  const currentID = useExtractID();
  const [userAuth] = useAuthCheckApi();

  // photo
  const [photo] = usePhotoGetApi();
  const [open, setOpen] = useState<boolean>(false);
  const [imgSrc, setImgSrc] = useState<string>("");

  // state for photo lenght
  const [photoNumber, SetPhotoNumber] = useState<number>(0);

  useEffect(() => {
    SetPhotoNumber(photo.length);
  }, [currentID, userAuth, photo]);

  return (
    <>
      {
        (String(userAuth) === (currentID)) ? (
          <>
            { (photoNumber !== 0) ? (
                <PhotoBoxContainer>
                  <PhotoBoxLabel>{photo && photo.length}개의 콩캠네컷</PhotoBoxLabel>
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
              ) : (
                <PhotoBoxEmpty>아직 받은 네컷이 없습니다</PhotoBoxEmpty>
              )
            }
          </>
        ) : (
          <PhotoBoxEmpty>다른 사람의 네컷입니다</PhotoBoxEmpty>
        )
      }
    </>
  );
};

export default PhotoBox;
