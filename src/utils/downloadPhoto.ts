import { domToBlob } from "modern-screenshot";
export const ExportElementAsPNG = async () => {
  try {
    const el = document.querySelector(".fourcutImage") as HTMLElement;

    const pngBlob = await domToBlob(el, {
      quality: 0.9,
      scale: 4,
    });

    if (pngBlob) {
      setTimeout(() => {
        // Blob을 File 객체로 변환하고 파일명 설정
        const pngFile = new File([pngBlob], "CongcamFourcut.png", {
          type: "image/png",
        });

        // pngFile을 사용하여 파일 업로드 또는 저장할 수 있습니다.
        const data = {
          title: "fourcut",
          files: [pngFile],
        };

        const blobUrl = URL.createObjectURL(data.files[0]);

        const link = document.createElement("a");
        link.download = "fourcut.png";
        link.href = blobUrl;

        // Append the html link element to the page
        document.body.appendChild(link);

        // Start the download
        link.click();

        // Clean up and remove the link after a delay (adjust the delay as needed)
        setTimeout(() => {
          document.body.removeChild(link);
        }, 1000); // Remove the link after 1 second
      }, 5000);
    }
  } catch (error) {
    console.error("Error exporting as PNG:", error);
  }
};
