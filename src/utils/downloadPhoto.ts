import { toBlob, toSvg } from "html-to-image";
import { domToBlob } from "modern-screenshot";

// 찍고 나서 로컬에 저장
// export const ExportElementAsPNG = async () => {
//   try {
//     const el = document.querySelector(".fourcutImage") as HTMLElement;

//     const svgString = await toSvg(el);

//     if (svgString) {
//       const img = new Image();
//       img.src = svgString;

//       img.onload = () => {
//         const canvas = document.createElement("canvas");
//         canvas.width = img.width;
//         canvas.height = img.height;
//         const ctx = canvas.getContext("2d");

//         if (ctx) {
//           ctx.drawImage(img, 0, 0);

//           canvas.toBlob((pngBlob) => {
//             if (pngBlob) {
//               // Blob을 File 객체로 변환하고 파일명 설정
//               const pngFile = new File([pngBlob], "CongcamFourcut.png", {
//                 type: "image/png",
//               });

//               // pngFile을 사용하여 파일 업로드 또는 저장할 수 있습니다.
//               const data = {
//                 title: "fourcut",
//                 files: [pngFile],
//               };

//               const link = document.createElement("a");
//               link.download = "fourcut.png";
//               link.href = canvas.toDataURL("image/png");

//               // Append the html link element to the page
//               document.body.appendChild(link);

//               // Start the download
//               link.click();

//               // Clean up and remove the link after a delay (adjust the delay as needed)
//               setTimeout(() => {
//                 document.body.removeChild(link);
//               }, 1000); // Remove the link after 1 second
//             }
//           }, "image/png");
//         }
//       };
//     }
//   } catch (error) {
//     console.error("Error exporting as PNG:", error);
//   }
// };
export const ExportElementAsPNG = async () => {
  try {
    const el = document.querySelector(".fourcutImage") as HTMLElement;

    const pngBlob = await domToBlob(el);

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
