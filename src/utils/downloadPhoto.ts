import { domToBlob, domToPng, domToSvg } from "modern-screenshot";
export const ExportElementAsPNG = async () => {
  try {
    const el = document.querySelector(".fourcutImage") as HTMLElement;
    const svgURL = await domToSvg(el);

    if (svgURL) {
      setTimeout(() => {
        const img = new Image();
        img.src = svgURL;

        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = img.width * 2;
          canvas.height = img.height * 2;

          const ctx = canvas.getContext("2d");

          if (ctx) {
            ctx.scale(2, 2);
            ctx.drawImage(img, 0, 0);

            canvas.toBlob((pngBlob) => {
              if (pngBlob) {
                // Blob을 File 객체로 변환하고 파일명 설정
                const pngFile = new File([pngBlob], "CongcamFourcut.png", {
                  type: "image/png",
                });

                // 다운로드 링크 생성
                const link = document.createElement("a");
                link.download = "fourcut.png";
                link.href = URL.createObjectURL(pngFile);

                // 다운로드 시작
                link.click();
              }
            }, "image/png");
          }
        };
      }, 5000);
    }
  } catch (error) {
    console.error("Error exporting as PNG:", error);
  }
};
