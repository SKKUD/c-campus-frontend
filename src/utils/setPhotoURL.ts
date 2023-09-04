import { toPng, toSvg } from "html-to-image";
import { domToImage, domToPng, domToSvg } from "modern-screenshot";
import { Ref } from "react";

interface PhotoData {
  PhotoTaken: boolean;
  PhotoURL: string;
}

export const setPhotoURL = async (
  setPhoto: (photo: PhotoData) => void,
  ref: HTMLDivElement | null
) => {
  const el = document.querySelector(".fourcutImage") as HTMLElement;
  if (el) {
    await domToSvg(el, {
      quality: 0.9,
      scale: 10,
    })
      .then((dataUrl) => {
        setTimeout(() => {
          setPhoto({
            PhotoTaken: true,
            PhotoURL: dataUrl,
          });
        }, 500);
      })
      .catch((error) => {
        console.error("Error converting HTML to image:", error);
      });
  }
};
