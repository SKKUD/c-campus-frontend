import { 
  ShowImgContainer,
  ShowImgQuitButtonContainer,
  ShowImgQuitButton,
  ShowImgImgContainer,
  ShowImgImgContent,
  ShowImgButtonContainer
} from "./ShowImg.styles";

import WhiteBtn from "../../../common/Buttons/WhiteBtn.components";
import defaultFrame from "../../../../assets/images/defaultFourcut.png"
import { useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";

interface IShowImg {
  handleClose: () => void;
  image_url: string,
}

const ShowImg = ({handleClose, image_url}: IShowImg) => {
  const match1024 = useMediaQuery("(min-width:1024px)");
  
  const saveImageLocally = async () => {
    const res = await axios
      .get(image_url, {
        responseType: "blob",
        headers: {
          "Content-Type": "image/png",
          "Access-Control-Allow-Origin": "*",
          server: "AmazonS3",
          "Cache-Control": "no-cache",
        },
      })
      .then((response) => {
        return new Blob([response.data]);
      })
      .then((imageData) => {
        // Create a Blob from the image data
        const blob = new Blob([imageData], { type: "image/png" });
        // Create a downloadable link
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "콩캠네컷.png"; // Set the desired filename

        // Trigger the download
        link.click();
        // Clean up
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <ShowImgContainer>
      <ShowImgQuitButtonContainer>
        <ShowImgQuitButton onClick={handleClose} />
      </ShowImgQuitButtonContainer>
      <ShowImgImgContainer>
        <ShowImgImgContent src={image_url || defaultFrame} />
      </ShowImgImgContainer>
      <ShowImgButtonContainer>
        <WhiteBtn content="저장하기" onClick={saveImageLocally} />
      </ShowImgButtonContainer>
    </ShowImgContainer>
  );
}

export default ShowImg;