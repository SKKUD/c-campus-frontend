import { useState, useEffect } from "react";
import axios from "axios";
import { useExtractID } from "./useExtractID";
import { domToBlob } from "modern-screenshot";

export const usePhotoGetApi = () => {
  const currentID = useExtractID();
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    if (currentID) {
      const fetchEvents = async () => {
        await axios
          .get(
            process.env.REACT_APP_BACKEND_SERVER + `/users/${currentID}/photos`,
            { withCredentials: true }
          )
          .then((response) => {
            setPhoto(response.data.data);
            // console.log(response.data.data);
          })
          .catch((error) => {
            // console.log(error);
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

      const BlobString = await domToBlob(el, {
        quality: 0.9,
        scale: 4,
      });

      if (BlobString) {
        setTimeout(() => {
          // Blob을 File 객체로 변환하고 파일명 설정
          const pngFile = new File([BlobString], "CongcamFourcut.png", {
            type: "image/png",
          });

          const data = {
            files: [pngFile],
          };

          const formData = new FormData();
          formData.append("file", data.files[0]);

          axios
            .post(
              `${process.env.REACT_APP_BACKEND_SERVER}/users/${currentID}/photos`,
              formData,
              { withCredentials: true }
            )
            .then((response) => {
              // console.log(response.status);
            })
            .catch((error) => {
              // console.log(error);
            });
        }, 5000);
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };
  return [postFourcutPhoto];
}

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
