import {
  ShareText,
  ShareUrlContent,
  ShareUrlImgContainer,
  ShareUrlSvgContainer,
  ShareGreenBtnContainer,
} from "./ShareUrl.styles";

import { useEffect, useState } from "react";
import ShareShape from "../../assets/images/shareImg.svg";
import ModalLayout from "../PostMessage/ModalLayout/ModalLayout.components";
import GreenBtn from "../common/Buttons/GreenBtn.components";

const ShareUrl = () => {
  const [currentUrl, SetCurrentUrl] = useState<string>(window.location.href);
  const [open, setOpen] = useState<boolean>(false);
  const [isLoad, SetIsLoad] = useState<boolean>(false);

  useEffect(() => {
    SetCurrentUrl(window.location.href);
  }, [window.location.href]);

  useEffect(() => {
    if (isLoad === false) {
      setTimeout(() => {
        setOpen(false);
      }, 2500);
      SetIsLoad(true);
    }
  }, [open])

  return (
    <>
      <ShareUrlContent text={currentUrl} onCopy={() => setOpen(true)}>
        <ShareUrlSvgContainer>
          <ShareUrlImgContainer src={ShareShape} />
        </ShareUrlSvgContainer>
      </ShareUrlContent>
      <ModalLayout modalOpen={open} handleModalClose={() => setOpen(false)}>
        <ShareText>
          링크가 클립보드에 복사되었어요!
          <br />
          복사된 링크를 공유해보세요.
        </ShareText>
        <ShareGreenBtnContainer>
          <GreenBtn onClick={() => setOpen(false)} content="닫기" />
        </ShareGreenBtnContainer>
      </ModalLayout>
    </>
  );
};

export default ShareUrl;
