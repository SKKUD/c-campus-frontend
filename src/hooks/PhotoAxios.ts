import * as htmlToImage from "html-to-image";
import { useState, useEffect } from "react";
import axios from "axios";
import { useExtractID } from "./useExtractID";
import { domToSvg } from "modern-screenshot";

export const usePhotoGetApi = () => {
  const currentID = useExtractID();
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    if (currentID) {
      const fetchEvents = async () => {
        const res = await axios
          .get(
            process.env.REACT_APP_BACKEND_SERVER + `/users/${currentID}/photos`,
            { withCredentials: true }
          )
          .then((response) => {
            setPhoto(response.data.data);
            console.log(response.data.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };

      fetchEvents();
    }
  }, [currentID]);

  return [photo];
};

// 콩캠네컷 찍기로 보낼 때
export const usePhotoPostApi = () => {
  const currentID = useExtractID();

  const postFourcutPhoto = async () => {
    try {
      const el = document.querySelector(".fourcutImage") as HTMLElement;

      // SVG 문자열을 얻습니다.
      const svgString = await domToSvg(el);

      if (svgString) {
        // SVG 문자열을 이미지로 변환하여 Blob으로 얻습니다.
        setTimeout(() => {
          const img = new Image();
          img.src = svgString;

          img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");

            if (ctx) {
              ctx.drawImage(img, 0, 0);

              canvas.toBlob((pngBlob) => {
                if (pngBlob) {
                  // Blob을 File 객체로 변환하고 파일명 설정
                  const pngFile = new File([pngBlob], "CongcamFourcut.png", {
                    type: "image/png",
                  });

                  // pngFile을 사용하여 파일 업로드 또는 저장할 수 있습니다.
                  const data = {
                    title: "fourcut",
                    files: [pngFile],
                  };

                  const formData = new FormData();
                  formData.append("file", data.files[0]);

                  axios
                    .post(
                      `${process.env.REACT_APP_BACKEND_SERVER}/users/${currentID}/photos`,
                      formData
                    )
                    .then((response) => {
                      console.log(response.status);
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }
              }, "image/png");
            }
          };
        }, 5000);
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  return [postFourcutPhoto];
};

// export const usePhotoPostApi = () => {
//   const currentID = useExtractID();

//   const postFourcutPhoto = async () => {
//     try {
//       const el = document.querySelector(".fourcutImage") as HTMLElement;

//       // SVG 문자열을 얻습니다.
//       const pngBlob = await htmlToImage.toBlob(el);

//       if (pngBlob) {
//         // Blob을 File 객체로 변환하고 파일명 설정
//         setTimeout(() => {
//           const pngFile = new File([pngBlob], "CongcamFourcut.png", {
//             type: "image/png",
//           });

//           // pngFile을 사용하여 파일 업로드 또는 저장할 수 있습니다.
//           const data = {
//             title: "fourcut",
//             files: [pngFile],
//           };

//           const formData = new FormData();
//           formData.append("file", data.files[0]);

//           axios
//             .post(
//               `${process.env.REACT_APP_BACKEND_SERVER}/users/${currentID}/photos`,
//               formData,
//               { withCredentials: true }
//             )
//             .then((response) => {
//               console.log(response.status);
//             })
//             .catch((error) => {
//               console.log(error);
//             });
//         }, 250);
        
//       }
//     } catch (error) {
//       console.error("오류 발생:", error);
//     }
//   };

//   return [postFourcutPhoto];
// };

export const usePhotoDeleteApi = () => {
  const currentID = useExtractID();
  const deleteFourcutPhoto = async (photoid: string) => {
    await axios
      .delete(
        `${process.env.REACT_APP_BACKEND_SERVER}/users/${currentID}/photos/${photoid}`,
        { withCredentials: true }
      )
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return [deleteFourcutPhoto];
};





