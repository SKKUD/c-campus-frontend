import { toPng } from "html-to-image";

interface PhotoData {
  PhotoTaken: boolean;
  PhotoURL: string;
}

export const setPhotoURL = async (setPhoto: (photo: PhotoData) => void) => {
  const el = document.querySelector(".fourcutImage") as HTMLElement;

  await toPng(el).then((dataUrl) => {
    setPhoto({
      PhotoTaken: true,
      PhotoURL: dataUrl,
    });
    localStorage.setItem("photo", dataUrl);
  });
};
