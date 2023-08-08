import { toPng, toBlob } from "html-to-image";

export const exportElementAsPNG = async () => {
  const el = document.querySelector(".fourcutImage") as HTMLElement;
  await toPng(el).then((dataUrl) => {
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
