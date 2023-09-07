import axios from "axios";
import { useState, useEffect } from "react";

export const PatchPublic = (userAuth: string, messageID: string) => {
  useEffect(() => {
    const PatchPublicMessage = async () => {
      if (userAuth && messageID) { // check userAuth and messageID exist
        // change to public or private
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_SERVER}/users/${userAuth}/messages/${messageID}`, 
                            { withCredentials: true }
                          )
                          .then((response) => {
                            // console.log(response);
                          })
                          .catch((error) => {
                            // console.log(error);
                          });
      }
    };
    PatchPublicMessage();
  }, []);

  return [];
};
