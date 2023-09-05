import { domToSvg } from "modern-screenshot";

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
      quality: 0.7,
      scale: 5,
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
