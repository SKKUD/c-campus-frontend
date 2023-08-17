import { 
  ShowImgContainer,
  ShowImgQuitButtonContainer,
  ShowImgQuitButton,
  ShowImgImgContent
} from "./ShowImg.styles";

import WhiteBtn from "../../../common/Buttons/WhiteBtn.components";
import defaultFrame from "../../../../assets/images/defaultFourcut.png"

interface IShowImg {
  handleClose: () => void;
  image_url?: string,
}

const ShowImg = ({handleClose, image_url}: IShowImg) => {
  return (
    <ShowImgContainer>
      <ShowImgQuitButtonContainer>
        <ShowImgQuitButton onClick={handleClose}/>
      </ShowImgQuitButtonContainer>
      <ShowImgImgContent src={image_url || defaultFrame}/>
      <WhiteBtn content="공유하기"/>
    </ShowImgContainer>
  );
}

export default ShowImg;