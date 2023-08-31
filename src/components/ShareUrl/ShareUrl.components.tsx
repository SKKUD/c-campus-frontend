import { 
  ShareUrlContent,
  ShareUrlImgContainer,
  ShareUrlSvgContainer,
} from "./ShareUrl.styles";

import { useEffect, useState } from "react";
import ShareShape from "../../assets/images/shareImg.svg";

const ShareUrl = () => {
  const [currentUrl, SetCurrentUrl] = useState<string>(window.location.href);
  const [currentColor, SetCurrentColor] = useState<string>("#E0ECD1");

  useEffect(() => {
    SetCurrentUrl(window.location.href);
    console.log("changed");
  }, [window.location.href]);

  return (
    <ShareUrlContent color={currentColor} text={currentUrl} onCopy={() => SetCurrentColor("#B4BDA9")}>
      <ShareUrlSvgContainer>
        <ShareUrlImgContainer src={ShareShape} />
      </ShareUrlSvgContainer>
    </ShareUrlContent>
  )
}

export default ShareUrl;