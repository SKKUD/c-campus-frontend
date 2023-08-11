import { useState, useEffect } from "react";
import axios from "axios";

const userId = 1;

export const usePhotoGetApi = () => {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get(
        process.env.REACT_APP_BACKEND_SERVER + `/users/${userId}/photos`
      );
      setPhoto(res.data.data);
    };
    fetchEvents();
  }, []);

  return [photo];
};

export const usePhotoPostApi = () => {
  const postFourcutPhoto = (file: File) =>
    axios
      .post(
        process.env.REACT_APP_BACKEND_SERVER + `/users/${userId}/photos`,
        file
      )
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error);
      });
  return [postFourcutPhoto];
};

export const usePhotoDeleteApi = () => {
  const deleteFourcutPhoto = (photoid: string) => {
    axios
      .delete(
        `${process.env.REACT_APP_BACKEND_SERVER}/users/${userId}/photos${photoid}`
      )
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return [deleteFourcutPhoto];
};
