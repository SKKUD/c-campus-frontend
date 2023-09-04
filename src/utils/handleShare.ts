import { error } from "console";
import * as htmlToImage from "html-to-image";
import { domToBlob } from "modern-screenshot";
import { toPng } from "html-to-image";

export const handleShare = async () => {
  console.log("test v3 handleShare, toPng add cacheBust")
  const UA = navigator.userAgent.toLowerCase();

  const pngBlob = await toPng(
    document.querySelector(".congcamMessage") as HTMLElement, {
      cacheBust: true,
    }
  );

  if (pngBlob) {
    setTimeout(() => {
      try {
        // Blob을 File 객체로 변환하고 파일명 설정
        const pngFile = new File([pngBlob], "CongcamMessage.png", {
          type: "image/png",
        });

        // pngFile을 사용하여 파일 업로드 또는 저장할 수 있습니다.
        const data = {
          files: [pngFile],
        };

        if (navigator.canShare && navigator.canShare(data)) {
          navigator.share(data);
        } else {
          alert("이미지 공유를 지원하지 않는 브라우저입니다.");
        }
      } catch {
        console.log("error");
      }
    }, 5000);
  }
};
