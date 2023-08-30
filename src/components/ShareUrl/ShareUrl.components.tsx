import { 
  ShareUrlContent,
  ShareUrlImgContainer,
} from "./ShareUrl.styles";

import { useEffect, useState } from "react";
import ShareShape from "../../assets/images/shareImg.svg";

const ShareUrl = () => {
  const [currentUrl, SetCurrentUrl] = useState<string>(window.location.href);

  useEffect(() => {
    SetCurrentUrl(window.location.href);
    console.log("changed");
  }, [window.location.href]);

  return (
    <ShareUrlContent text={currentUrl} onCopy={() => console.log("copyed")}>
      <ShareUrlImgContainer src={ShareShape}/>
    </ShareUrlContent>
  )
}

export default ShareUrl;