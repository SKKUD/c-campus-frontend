import { toSvg } from "html-to-image";
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
    await toSvg(el, {
      style: { background: "black" },
      width: 201,
      height: 513,
    })
      .then((dataUrl) => {
        setPhoto({
          PhotoTaken: true,
          PhotoURL: dataUrl,
        });
      })
      .catch((error) => {
        console.error("Error converting HTML to image:", error);
      });
  }
};
