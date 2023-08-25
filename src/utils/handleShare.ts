import * as htmlToImage from "html-to-image";

export const handleShare = async () => {
  const UA = navigator.userAgent.toLowerCase();

  // 공유할 DOM 요소를 선택합니다.
  const elementToShare = document.querySelector(
    ".congcamMessage"
  ) as HTMLElement;

  if (elementToShare) {
    try {
      // DOM 요소를 SVG로 변환합니다.
      const svgString = await htmlToImage.toSvg(elementToShare);

      // SVG를 이미지로 변환합니다.
      const image = new Image();
      image.src = `data:image/svg+xml,${encodeURIComponent(svgString)}`;

      // 이미지를 캔버스에 그립니다.
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(image, 0, 0);
        // 캔버스를 PNG로 변환합니다.
        canvas.toBlob((blob) => {
          if (blob) {
            // Blob을 파일로 변환합니다.
            const file = new File([blob], "shared_image.png", {
              type: "image/png",
            });

            // 공유할 데이터를 생성합니다.
            const data = {
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
        }, "image/png");
      } else {
        console.log("ctx ===  null");
      }
    } catch (error) {
      console.error("이미지를 공유할 수 없습니다.", error);
      alert("이미지를 공유할 수 없습니다.");
    }
  } else {
    alert("DOM 요소를 찾을 수 없습니다.");
  }
};
