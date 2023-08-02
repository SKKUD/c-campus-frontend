import { useRef, useState, useCallback } from "react";
import {
  PhotoBoothContainer,
  FourcutNPaletteWrapper,
  FourcutContainer,
  FourcutFrame,
  PhotoWrapper,
  FourcutPhoto,
} from "./PostPhoto.styles";
import FramePalette from "../../components/PostPhoto/FramePalette/FramePalette.components";
import Webcam from "react-webcam";
import frame1 from "../../assets/images/프레임01.png";
import frame2 from "../../assets/images/프레임02.png";
import frame3 from "../../assets/images/프레임03.png";
import frame4 from "../../assets/images/프레임04.png";
import frame5 from "../../assets/images/프레임05.png";
import frame6 from "../../assets/images/프레임06.png";
import frame7 from "../../assets/images/프레임07.png";
import example from "../../assets/images/4cut_c4.svg";
import IconBtnGroup from "../../components/PostPhoto/IconBtnGroup/IconBtnGroup.components";

// const videoConstraints = {
//   width: 720,
//   height: 360,
//   facingMode: "user",
// };

// const PostPhoto = () => {
//   const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
//   const webcamRef = useRef<Webcam>(null);
//   const [url, setUrl] = useState<string | null>(null);
//   const capture = useCallback(() => {
//     const imageSrc = webcamRef.current?.getScreenshot();
//     if (imageSrc) {
//       setUrl(imageSrc);
//     }
//   }, [webcamRef]);

//   return (
//     <>
//       <header>
//         <h1>camera app</h1>
//       </header>
//       {isCaptureEnable || (
//         <button onClick={() => setCaptureEnable(true)}>start</button>
//       )}
//       {isCaptureEnable && (
//         <>
//           <div>
//             <button onClick={() => setCaptureEnable(false)}>end </button>
//           </div>
//           <div>
//             <Webcam
//               audio={false}
//               width={540}
//               height={360}
//               ref={webcamRef}
//               screenshotFormat="image/jpeg"
//               videoConstraints={videoConstraints}
//             />
//           </div>
//           <button onClick={capture}>capture</button>
//         </>
//       )}
//       {url && (
//         <>
//           <div>
//             <button
//               onClick={() => {
//                 setUrl(null);
//               }}
//             >
//               delete
//             </button>
//           </div>
//           <div>
//             <img src={url} alt="Screenshot" />
//           </div>
//         </>
//       )}
//     </>
//   );
// };

const PostPhoto = () => {
  const [frameNum, setFrame] = useState<number>(1);
  const frameImages = [frame1, frame2, frame3, frame4, frame5, frame6, frame7];

  return (
    <PhotoBoothContainer>
      <FourcutNPaletteWrapper>
        <FourcutContainer>
          <FourcutFrame src={frameImages[frameNum - 1]} />
          <PhotoWrapper>
            <FourcutPhoto
              src={example}
              onClick={() => console.log("1 clicked")}
            />
            <FourcutPhoto
              src={example}
              onClick={() => console.log("2 clicked")}
            />
            <FourcutPhoto
              src={example}
              onClick={() => console.log("3 clicked")}
            />
            <FourcutPhoto
              src={example}
              onClick={() => console.log("4 clicked")}
            />
          </PhotoWrapper>
        </FourcutContainer>
        <FramePalette setFrame={setFrame} />
      </FourcutNPaletteWrapper>
      <IconBtnGroup />
    </PhotoBoothContainer>
  );
};

export default PostPhoto;
