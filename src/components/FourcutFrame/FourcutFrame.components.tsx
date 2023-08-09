// import styled components
import { Fourcut, PictureHolder, Picture } from "./FourcutFrame.styles";

// import react
import { useState } from "react";

interface IFourcutFrame {
  firstPicture: string,
  secondPicture: string,
  thirdPicture: string,
  fourthPicture: string,
}
const FourcutFrame = ({firstPicture, secondPicture, thirdPicture, fourthPicture}: IFourcutFrame) => {

  return (
    <Fourcut width="100px" height="300px">
      <PictureHolder width="89px" height="50px">
        <Picture src={firstPicture} width="89px" height="50px"/>
      </PictureHolder>
      
      <PictureHolder width="89px" height="50px">
        <Picture src={secondPicture} width="89px" height="50px"/>
      </PictureHolder>

      <PictureHolder width="89px" height="50px">
        <Picture src={thirdPicture} width="89px" height="50px"/>
      </PictureHolder>

      <PictureHolder width="89px" height="50px">
        <Picture src={fourthPicture} width="89px" height="50px"/>
      </PictureHolder>
    </Fourcut>
  );
};

export default FourcutFrame;