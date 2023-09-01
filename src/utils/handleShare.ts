import { error } from "console";
import * as htmlToImage from "html-to-image";

export const handleShare = async () => {
  const UA = navigator.userAgent.toLowerCase();

  const pngString = await htmlToImage.toPng(
    document.querySelector(".congcamMessage") as HTMLElement
  );
  if (pngString) {
    try {
      const img = new Image();
      img.src = pngString;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");

        if (ctx) {
          ctx.drawImage(img, 0, 0);

          canvas.toBlob((pngBlob) => {
            if (pngBlob) {
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
            }
          }, "image/png");
        }
      };

     
    } catch {
      console.log("error");
    }
  }
};
