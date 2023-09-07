import axios from "axios";
import { useEffect } from "react";

export const PatchPublic =  async (userAuth: string, messageID: string) => {
  useEffect(() => {
    const PatchAxios = async () => {
      try {
        const res = await axios.patch(`${process.env.REACT_APP_BACKEND_SERVER}/users/${userAuth}/messages/${messageID}`, 
                          { withCredentials: true, });

      } catch (error) {
        // console.log(error);
      }
    }

    PatchAxios();
  }, [])
  return "0";
};