import { toSvg } from "html-to-image";

export const ExportElementAsPNG = async () => {
  const el = document.querySelector(".fourcutImage") as HTMLElement;
  await toSvg(el).then((dataUrl) => {
    const link = document.createElement("a");
    link.download = "fourcut.svg";
    link.href = dataUrl;

    // Append to the html link element to the page
    document.body.appendChild(link);

    // Start the download
    link.click();

    // Clean up and remove the link
    document.body.removeChild(link);
  });
};
