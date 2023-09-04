import { toPng, toSvg } from "html-to-image";
import { domToPng, domToSvg } from "modern-screenshot";
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
    await domToPng(el, {
      style: { background: "black" },
      width: 201,
      height: 513,
    })
      .then((dataUrl) => {
        setTimeout(() => {
          setPhoto({
            PhotoTaken: true,
            PhotoURL: dataUrl,
          });
        }, 250);
      })
      .catch((error) => {
        console.error("Error converting HTML to image:", error);
      });
  }
};
