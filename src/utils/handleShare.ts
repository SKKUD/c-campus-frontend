import { error } from "console";
import * as htmlToImage from "html-to-image";

export const handleShare = async () => {
  const UA = navigator.userAgent.toLowerCase();

  const svgString = await htmlToImage.toSvg(
    document.querySelector(".congcamMessage") as HTMLElement
  );
  if (svgString) {
    try {
      const blob = new Blob([svgString], { type: "image/svg+xml" });

      if (blob) {
        // Blob을 파일로 변환합니다.
        const file = new File([blob], "congcam_message.svg", {
          type: "image/svg+xml",
        });

        // 공유할 데이터를 생성합니다.
        const data = {
          title: "Congcam message",
          files: [file],
        };

        // 브라우저가 데이터를 공유할 수 있는지 확인합니다.
        if (navigator.canShare && navigator.canShare(data)) {
          navigator.share(data);
        } else {
          alert("이미지 공유를 지원하지 않는 브라우저입니다.");
        }
      } else {
        alert("이미지를 공유할 수 없습니다.");
      }
    } catch {
      console.log("error");
    }
  }
};
