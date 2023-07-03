// import styled components
import { Fourcut, PictureHolder, Picture } from "./FourcutFrame.styles";

// import react
import { useState } from "react";

const FourcutFrame = () => {
  // 인생네컷 이미지 소스 저장하는 state
  const [firstPicture, setFirstPicture] = useState("");
  const [secondPicture, setSecondPicture] = useState("");
  const [thirdPicture, setThirdPicture] = useState("");
  const [fourthPicture, setFourthPicture] = useState("");

  return (
    <Fourcut width="280px" height="770px">
      <PictureHolder width="236px" height="143px">
        <Picture src="https://i.pravatar.cc/500" width="236px" height="143px"/>
      </PictureHolder>
      
      <PictureHolder width="236px" height="143px">
        <Picture src="https://i.pravatar.cc/500" width="236px" height="143px"/>
      </PictureHolder>

      <PictureHolder width="236px" height="143px">
        <Picture src="https://i.pravatar.cc/500" width="236px" height="143px"/>
      </PictureHolder>

      <PictureHolder width="236px" height="143px">
        <Picture src="https://i.pravatar.cc/500" width="236px" height="143px"/>
      </PictureHolder>
    </Fourcut>
  );
};

export default FourcutFrame;