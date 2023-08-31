import * as htmlToImage from "html-to-image";
import { useState, useEffect } from "react";
import axios from "axios";
import { useExtractID } from "./useExtractID";

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

export const usePhotoPostApi = () => {
  const currentID = useExtractID();
  const postFourcutPhoto = async () => {
    try {
      const svgString = await htmlToImage.toSvg(
        document.querySelector(".fourcutImage") as HTMLElement
      );

      if (svgString) {
        // SVG 문자열을 Blob으로 변환
        const blob = new Blob([svgString], { type: "image/svg+xml" });

        // Blob을 File 객체로 변환하고 파일명 설정
        const svgFile = new File([blob], "CongcamFourcut.svg", {
          type: "image/svg+xml",
        });

        // 이제 svgFile을 사용하여 파일 업로드 또는 저장할 수 있습니다.
        const data = {
          title: "fourcut",
          files: [svgFile],
        };

        const formData = new FormData();
        formData.append("file", data.files[0]);
        axios
          .post(
            process.env.REACT_APP_BACKEND_SERVER + `/users/${currentID}/photos`,
            formData
          )
          .then((response) => {
            console.log(response.status);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  return [postFourcutPhoto];
};

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
