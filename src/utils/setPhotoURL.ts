import { toPng } from "html-to-image";

interface PhotoData {
  PhotoTaken: boolean;
  PhotoURL: string;
}

export const setPhotoURL = async (setPhoto: (photo: PhotoData) => void) => {
  const el = document.querySelector(".fourcutImage") as HTMLElement;

  await toPng(el, {
    style: { background: "gray" },
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
};
