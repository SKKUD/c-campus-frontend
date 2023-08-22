import * as htmlToImage from "html-to-image";
import { useState, useEffect } from "react";
import axios from "axios";
import { useExtractID } from "./useExtractID";
import { useSetRecoilState } from "recoil";
import { UserAuth } from "../recoil/recoil";

export const useAuthCheckApi = () => {
  const [checkAuth, setAuth] = useState("");

  useEffect(() => {
    const fetchAuth = async () => {
      const res = await axios.get(
        process.env.REACT_APP_BACKEND_SERVER + `/auth/authentication`,
        {
          withCredentials: true,
        }
      );
      setAuth(res.data.userId);
    };
    fetchAuth();
  }, []);

  return [checkAuth];
};

export const useUserProfileGetApi = () => {
  const currentID = useExtractID();
  const [profile, setProfile] = useState({
    userId: currentID,
    nickname: "",
    profileImageUrl: "",
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (currentID) {
        try {
          const res = await axios.get(
            process.env.REACT_APP_BACKEND_SERVER + `/users/${currentID}`,
            { withCredentials: true }
          );
          
          setProfile(res.data);
        } catch (error) {
          // error
        }
      }
    };
    fetchUserProfile();
  }, [currentID]);

  return [profile];
};

export const useUserLogoutApi = () => {
  const logout = () => {
    axios
      .post(process.env.REACT_APP_BACKEND_SERVER + `/oauth2/kakao/logout`, {
        withCredentials: true,
      })
      .then((response) => {

      })
      .catch((error) => {

      });
  };

  return [logout];
};
