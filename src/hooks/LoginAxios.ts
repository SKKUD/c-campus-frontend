import * as htmlToImage from "html-to-image";
import { useState, useEffect } from "react";
import axios from "axios";

const userId = 1;

export const useAuthCheckApi = () => {
  const [auth, setAuth] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get(
        process.env.REACT_APP_BACKEND_SERVER + `/auth/authentication`
      );
      setAuth(res.data);
      console.log(res.data);
    };
    fetchEvents();
  }, []);

  return [auth];
};

export const useUserProfileGetApi = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get(
        process.env.REACT_APP_BACKEND_SERVER + `/users/${userId}`
      );
      setProfile(res.data.data);
      console.log(res.data.data);
    };
    fetchEvents();
  }, []);

  return [profile];
};

export const useUserLogoutApi = () => {
  const logout = () => {
    axios
      .post(process.env.REACT_APP_BACKEND_SERVER + `/oauth2/kakao/logout`)
      .then((response) => {
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return [logout];
};
