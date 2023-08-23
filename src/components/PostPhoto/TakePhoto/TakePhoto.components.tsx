import { useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import { useRef, useCallback } from "react";
import Webcam from "react-webcam";
import { FourcutPhoto } from "../../../pages/PostPhoto/PostPhoto.styles";
import blank from "../../../assets/images/blank.png";

const videoConstraints = {
  width: 190,
  height: 112,
  facingMode: "user",
};

interface ITakePhoto {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  dispatchArr: React.Dispatch<React.SetStateAction<string | null>>[];
  onCapture: boolean;
  setOnCapture: React.Dispatch<React.SetStateAction<boolean>>;
  done: string;
}

const TakePhoto = ({
  current,
  setCurrent,
  dispatchArr,
  onCapture,
  setOnCapture,
  done,
}: ITakePhoto) => {
  const webcamRef = useRef<Webcam>(null);
  const setUrl = dispatchArr[current - 1];
  const match1024 = useMediaQuery("(min-width:1024px)");

  useEffect(() => {
    if (onCapture) {
      capture();
    }
  }, [onCapture]);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setUrl(imageSrc);
      setOnCapture(false);
      done === "editing" ? setCurrent(5) : setCurrent(current + 1);
    }
  }, [webcamRef]);

  return (
    <>
      {match1024 ? (
        <Webcam
          audio={false}
          width={190}
          height={112}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
      ) : (
        <FourcutPhoto src={blank} />
      )}
    </>
  );
};

export default TakePhoto;
