import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useMediaQuery } from "@mui/material";
import {
  PhotoBoothContainer,
  FourcutNPaletteWrapper,
  FourcutContainer,
  FourcutFrame,
  PhotoWrapper,
  FourcutPhoto,
  DateContainer,
  WebGreenBtnWrap,
} from "./PostPhoto.styles";
import FramePalette from "../../components/PostPhoto/FramePalette/FramePalette.components";
import frame1 from "../../assets/images/프레임01.png";
import frame2 from "../../assets/images/프레임02.png";
import frame3 from "../../assets/images/프레임03.png";
import frame4 from "../../assets/images/프레임04.png";
import frame5 from "../../assets/images/프레임05.png";
import frame6 from "../../assets/images/프레임06.png";
import frame7 from "../../assets/images/프레임07.png";
import blank from "../../assets/images/blank.png";
import { getDate } from "../../utils/getDate";
import IconBtnGroup from "../../components/PostPhoto/IconBtnGroup/IconBtnGroup.components";
import TakePhoto from "../../components/PostPhoto/TakePhoto/TakePhoto.components";
import WhiteBtn from "../../components/common/Buttons/WhiteBtn.components";
import GreenBtn from "../../components/common/Buttons/GreenBtn.components";
import { exportElementAsPNG } from "../../utils/downloadPhoto";
import { handleShare } from "../../utils/handleShare";

const PostPhoto = () => {
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

  const handleSubmit = async () => {
    if (
      window.confirm(
        match1024
          ? "사진을 저장하시겠습니까? 저장 후에 메인 페이지로 이동합니다."
          : "사진을 공유하시겠습니까?"
      )
    ) {
      match1024 ? await exportElementAsPNG() : handleShare();
      // navigate("/photo");
    }
  };

  return (
    <PhotoBoothContainer>
      <FourcutNPaletteWrapper>
        <FourcutContainer className="fourcutImage">
          <FourcutFrame src={frameImages[frameNum - 1]} alt="frame" />
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
        </FourcutContainer>
        <FramePalette setFrame={setFrame} />
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
          <WebGreenBtnWrap>
            {done === "done" ? (
              <GreenBtn content="완료" onClick={(e) => handleSubmit()} />
            ) : (
              <GreenBtn content="완료" disabled={true} />
            )}
          </WebGreenBtnWrap>
        </>
      ) : done === "done" ? (
        <WhiteBtn content="완료" onClick={(e) => handleSubmit()} />
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
