import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { useMediaQuery } from "@mui/material";
import {
  PhotoBoothContainer,
  FourcutNPaletteWrapper,
  FourcutContainerWrapper,
  FourcutContainer,
  FourcutFrame,
  PhotoWrapper,
  FourcutPhoto,
  DateContainer,
  WebGreenBtnWrap,
} from "./PostPhoto.styles";
import FramePalette from "../../components/PostPhoto/FramePalette/FramePalette.components";
import frame1 from "../../assets/images/frame01.svg";
import frame2 from "../../assets/images/frame02.svg";
import frame3 from "../../assets/images/frame03.svg";
import frame4 from "../../assets/images/frame04.svg";
import frame5 from "../../assets/images/frame05.svg";
import frame6 from "../../assets/images/frame06.svg";
import frame7 from "../../assets/images/frame07.svg";
import blank from "../../assets/images/blank.png";
import { getDate } from "../../utils/getDate";
import IconBtnGroup from "../../components/PostPhoto/IconBtnGroup/IconBtnGroup.components";
import TakePhoto from "../../components/PostPhoto/TakePhoto/TakePhoto.components";
import WhiteBtn from "../../components/common/Buttons/WhiteBtn.components";
import GreenBtn from "../../components/common/Buttons/GreenBtn.components";
import { ExportElementAsPNG } from "../../utils/downloadPhoto";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  IsWritingMessage,
  PhotoFile,
  PhotoState,
  UserState,
} from "../../recoil/recoil";
import AskLock from "../../components/PostMessage/modal/AskLock/AskLock.components";
import ModalLayout from "../../components/PostMessage/ModalLayout/ModalLayout.components";
import { setPhotoURL } from "../../utils/setPhotoURL";
import { usePhotoPostApi } from "../../hooks/PhotoAxios";
import { useExtractID } from "../../hooks/useExtractID";
import { domToBlob, domToPng, domToSvg } from "modern-screenshot";

const PostPhoto = () => {
  const userid = useExtractID();
  const [IsWriting, setIsWriting] = useRecoilState(IsWritingMessage);
  const setPhotoTaken = useSetRecoilState(PhotoState);
  const match1024 = useMediaQuery("(min-width:1024px)");
  const navigate = useNavigate();
  const [frameNum, setFrame] = useState<number>(1);
  const frameImages = [frame1, frame2, frame3, frame4, frame5, frame6, frame7];
  const [current, setCurrent] = useState(1);
  const [onCapture, setOnCapture] = useState(false);
  const [photo1, setPhoto1] = useState<string | null>(null);
  const [photo2, setPhoto2] = useState<string | null>(null);
  const [photo3, setPhoto3] = useState<string | null>(null);
  const [photo4, setPhoto4] = useState<string | null>(null);
  const [done, setDone] = useState("ongoing");
  const dispatchArr = [setPhoto1, setPhoto2, setPhoto3, setPhoto4];
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const storedIsWriting = localStorage.getItem("IsWriting");
    if (storedIsWriting) {
      setIsWriting(Boolean(storedIsWriting));
    }
  }, []);

  const handleDelete = (num: number) => {
    if (window.confirm("선택한 사진을 지울까요?")) {
      dispatchArr[num - 1]("");
      setCurrent(num);
      setDone("editing");
    }
  };

  useEffect(() => {
    if (current === 5) {
      setDone("done");
    }
  }, [current]);

  const [postFourcutPhoto] = usePhotoPostApi();
  const handleSubmit = async () => {
    if (
      window.confirm(
        match1024
          ? "사진을 저장하시겠습니까? 저장 후에 메인 페이지로 이동합니다."
          : "사진을 공유하시겠습니까?"
      )
    ) {
      await ExportElementAsPNG();
      await postFourcutPhoto();

      navigate(`/photo/${userid}`);
    }
  };

  const [modalOpen, setModalOpen] = useState(false);
  const setPhotoFile = useSetRecoilState(PhotoFile);
  // isWriting일때 사진 처리

  const setRecoilPhotoFile = async () => {
    try {
      const el = document.querySelector(".fourcutImage") as HTMLElement;

      const svgString = await domToSvg(el);

      if (svgString) {
        setTimeout(() => {
          const img = new Image();
          img.src = svgString;

          img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width * 2;
            canvas.height = img.height * 2;
            const ctx = canvas.getContext("2d");

            if (ctx) {
              ctx.scale(2, 2);
              ctx.drawImage(img, 0, 0);

              canvas.toBlob((pngBlob) => {
                if (pngBlob) {
                  // Blob을 File 객체로 변환하고 파일명 설정
                  const pngFile = new File([pngBlob], "CongcamFourcut.png", {
                    type: "image/png",
                  });

                  setPhotoFile(pngFile);
                }
              }, "image/png");
            }
          };
        }, 5000);
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };
  // const setRecoilPhotoFile = async () => {
  //   try {
  //     const el = document.querySelector(".fourcutImage") as HTMLElement;

  //     const pngBlob = await domToBlob(el, { quality: 0.7, scale: 5 });

  //     if (pngBlob) {
  //       setTimeout(async () => {
  //         // Blob을 File 객체로 변환하고 파일명 설정
  //         const pngFile = new File([pngBlob], "CongcamFourcut.png", {
  //           type: "image/png",
  //         });

  //         setPhotoFile(pngFile);
  //       }, 6000);
  //     }
  //   } catch (error) {
  //     console.error("오류 발생:", error);
  //   }
  // };

  const handleModalOpen = async () => {
    setModalOpen(true);
    await setPhotoURL(setPhotoTaken, ref.current);
    await setRecoilPhotoFile();
  };
  const handleModalClose = () => setModalOpen(false);

  return (
    <PhotoBoothContainer>
      <FourcutNPaletteWrapper>
        <FourcutContainerWrapper ref={ref} className="fourcutImage">
          <FourcutContainer>
            <PhotoWrapper>
              {current === 1 ? (
                <TakePhoto
                  current={current}
                  setCurrent={setCurrent}
                  dispatchArr={dispatchArr}
                  onCapture={onCapture}
                  setOnCapture={setOnCapture}
                  done={done}
                />
              ) : (
                <FourcutPhoto
                  alt="photo1"
                  src={photo1 || blank}
                  onClick={() => done === "done" && handleDelete(1)}
                />
              )}
              {current === 2 ? (
                <TakePhoto
                  current={current}
                  setCurrent={setCurrent}
                  dispatchArr={dispatchArr}
                  onCapture={onCapture}
                  setOnCapture={setOnCapture}
                  done={done}
                />
              ) : (
                <FourcutPhoto
                  alt="photo2"
                  src={photo2 || blank}
                  onClick={() => done === "done" && handleDelete(2)}
                />
              )}
              {current === 3 ? (
                <TakePhoto
                  current={current}
                  setCurrent={setCurrent}
                  dispatchArr={dispatchArr}
                  onCapture={onCapture}
                  setOnCapture={setOnCapture}
                  done={done}
                />
              ) : (
                <FourcutPhoto
                  alt="photo3"
                  src={photo3 || blank}
                  onClick={() => done === "done" && handleDelete(3)}
                />
              )}
              {current === 4 ? (
                <TakePhoto
                  current={current}
                  setCurrent={setCurrent}
                  dispatchArr={dispatchArr}
                  onCapture={onCapture}
                  setOnCapture={setOnCapture}
                  done={done}
                />
              ) : (
                <FourcutPhoto
                  alt="photo4"
                  src={photo4 || blank}
                  onClick={() => done === "done" && handleDelete(4)}
                />
              )}
            </PhotoWrapper>
          </FourcutContainer>
          <FourcutFrame src={frameImages[frameNum - 1]} alt="frame" />
          <DateContainer
            brightFrame={
              frameNum === 2 || frameNum === 6
                ? "bright"
                : frameNum === 5
                ? "medium"
                : "dark"
            }
          >
            {getDate()}
          </DateContainer>
        </FourcutContainerWrapper>
        <FramePalette frameNum={frameNum} setFrame={setFrame} />
      </FourcutNPaletteWrapper>
      {match1024 ? (
        <>
          <IconBtnGroup
            takePhoto={() => setOnCapture(true)}
            choosePhoto={dispatchArr[current - 1]}
            current={current}
            setCurrent={setCurrent}
            done={done}
          />
          <WebGreenBtnWrap done={done === "done"}>
            {done === "done" ? (
              IsWriting ? (
                <>
                  <WhiteBtn content="완료" onClick={(e) => handleModalOpen()} />
                  <ModalLayout
                    modalOpen={modalOpen}
                    handleModalClose={handleModalClose}
                  >
                    <AskLock handleModalClose={handleModalClose} />
                  </ModalLayout>
                </>
              ) : (
                <WhiteBtn content="완료" onClick={(e) => handleSubmit()} />
              )
            ) : (
              <GreenBtn content="완료" disabled={true} />
            )}
          </WebGreenBtnWrap>
        </>
      ) : done === "done" ? (
        IsWriting ? (
          <>
            <WhiteBtn content="완료" onClick={(e) => handleModalOpen()} />
            <ModalLayout
              modalOpen={modalOpen}
              handleModalClose={handleModalClose}
            >
              <AskLock handleModalClose={handleModalClose} />
            </ModalLayout>
          </>
        ) : (
          <WhiteBtn content="완료" onClick={(e) => handleSubmit()} />
        )
      ) : (
        <IconBtnGroup
          takePhoto={() => setOnCapture(true)}
          choosePhoto={dispatchArr[current - 1]}
          current={current}
          setCurrent={setCurrent}
          done={done}
        />
      )}
    </PhotoBoothContainer>
  );
};

export default PostPhoto;
