import { domToBlob } from "modern-screenshot";

export const handleShare = async () => {
  const pngBlob = await domToBlob(
    document.querySelector(".congcamMessage") as HTMLElement,
    {
      quality: 0.9,
      scale: 4,
      fetch: {
        bypassingCache: true,
      },
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
    }, 1000);
  }
};
