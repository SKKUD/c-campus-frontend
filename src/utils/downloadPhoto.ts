import React, { useCallback, useRef } from "react";
import { toPng, toBlob } from "html-to-image";

// export const exportElementAsPNG = () => {
//   const el = document.querySelector(".fourcutImage") as HTMLElement;
//   toPng(el).then((image) => {
//     const blob = new Blob(
//       [Uint8Array.from(atob(image), (c) => c.charCodeAt(0))],
//       { type: "image/png" }
//     );
//     const url = window.URL.createObjectURL(new Blob([blob]));
//     const link = document.createElement("a");
//     link.download = "fourcut.png";
//     link.href = url;

//     // Append to html link element page
//     document.body.appendChild(link);

//     // Start download
//     link.click();

//     // Clean up and remove the link
//     if (link.parentNode) {
//       link.parentNode.removeChild(link);
//     }
//   });
// };

export const exportElementAsPNG = () => {
  const el = document.querySelector(".fourcutImage") as HTMLElement;
  toPng(el).then((dataUrl) => {
    const link = document.createElement("a");
    link.download = "fourcut.png";
    link.href = dataUrl;

    // Append to the html link element to the page
    document.body.appendChild(link);

    // Start the download
    link.click();

    // Clean up and remove the link
    document.body.removeChild(link);
  });
};

export const downloadPhoto = async () => {
  const element = document.querySelector(".fourcutImage") as HTMLElement;

  toBlob(element).then(function (blob) {
    if (blob) {
      const url = window.URL.createObjectURL(new Blob([blob]));
      console.log(url);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "fourcut.png");

      // Append to html link element page
      document.body.appendChild(link);

      // Start download
      link.click();

      // Clean up and remove the link
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    }
  });
  //   toPng(element).then(function (dataUrl) {
  //     var img = new Image();
  //     img.src = dataUrl;
  //     var link = document.createElement("a");
  //     link.download = "diagram.png";
  //     link.href = dataUrl;
  //     link.click();
  //   });

  //   try {
  //     const blob = await htmlToImage.toBlob(element);

  //     if (blob) {
  //       const url = window.URL.createObjectURL(blob);
  //       const link = document.createElement("a");
  //       link.href = url;
  //       link.setAttribute("download", "CongcamFourcut.png");

  //       // Append to html link element page
  //       document.body.appendChild(link);

  //       // Start download
  //       link.click();

  //       // Clean up and remove the link
  //       link.addEventListener("click", () => {
  //         setTimeout(() => {
  //           // Check if link's parent node exists before removing
  //           if (link.parentNode) {
  //             link.parentNode.removeChild(link);
  //           }
  //         });
  //       });
  //     }
  //   } catch (error) {
  //     console.error("Error generating or downloading the image:", error);
  //   }
};
