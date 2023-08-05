import * as htmlToImage from "html-to-image";

export const handleShare = async () => {
    const UA = navigator.userAgent.toLowerCase();
    if (UA.indexOf("android") > -1) {
      try {
        const blob = await htmlToImage.toBlob(
          document.querySelector(".fourcutImage") as HTMLElement
        );

        if (blob) {
          const data = {
            title: "CongcamFourcut",
            files: [
              new File([blob], "CongcamFourcut.png", {
                type: blob.type,
              }),
            ],
          };

          if (navigator.canShare && navigator.canShare(data)) {
            navigator.share(data);
          } else {
            alert("이미지 공유를 지원하지 않는 브라우저입니다.");
          }
        } else {
          alert("이미지를 공유할 수 없습니다.");
        }
      } catch (error) {
        alert("이미지를 공유할 수 없습니다.");
      }
    }
    if (UA.indexOf("iphone") > -1) {
      try {
        const blob = await htmlToImage.toBlob(
          document.querySelector(".fourcutImage") as HTMLElement
        );

        if (blob) {
          const data = {
            title: "Letter",
            files: [
              new File([blob], "letter.png", {
                type: blob.type,
              }),
            ],
          };

          if (navigator.canShare && navigator.canShare(data)) {
            navigator.share(data);
          } else {
            alert("이미지 공유를 지원하지 않는 브라우저입니다.");
          }
        } else {
          alert("이미지를 공유할 수 없습니다.");
        }
      } catch (error) {
        alert("이미지를 공유할 수 없습니다.");
      }
    }
};
