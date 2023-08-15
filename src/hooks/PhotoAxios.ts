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
        const res = await axios.get(
          process.env.REACT_APP_BACKEND_SERVER + `/users/${currentID}/photos`
          // {
          //   headers: {
          //     AUTHORIZATION: AUTHORIZATION,
          //   },
          // }
        );
        setPhoto(res.data.data);
        console.log(res.data.data);
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
      const blob = await htmlToImage.toBlob(
        document.querySelector(".fourcutImage") as HTMLElement
      );

      if (blob) {
        const data = {
          title: "fourcut",
          files: [
            new File([blob], "CongcamFourcut.png", {
              type: blob.type,
            }),
          ],
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
      alert("저장에 실패했씁니다");
    }
  };

  return [postFourcutPhoto];
};

export const usePhotoDeleteApi = () => {
  const currentID = useExtractID();
  const deleteFourcutPhoto = async (photoid: string) => {
    await axios
      .delete(
        `${process.env.REACT_APP_BACKEND_SERVER}/users/${currentID}/photos/${photoid}`
      )
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return [deleteFourcutPhoto];
};
