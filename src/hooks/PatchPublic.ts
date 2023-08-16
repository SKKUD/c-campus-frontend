import axios from "axios";

export const PatchPublic = (userAuth: string, messageID: string) => {
  const res = axios.patch(`${process.env.REACT_APP_BACKEND_SERVER}/users/${userAuth}/message/${messageID}`, 
                          { withCredentials: true, })
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                console.log(error)
              });
};