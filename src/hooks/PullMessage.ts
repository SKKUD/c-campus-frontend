import { useEffect } from "react";
import { UserAuth } from "../recoil/recoil";
import { useRecoilState } from "recoil";
import axios from "axios";

export const CheckRemainCount = (): number => {
  const [userAuth, SetUserAuth] = useRecoilState(UserAuth);

  useEffect(() => {
    // 
    const res = axios.get(`${process.env.REACT_APP_BACKEND_SERVER}/users/${userAuth.userID}/message/remain-count`)
                .then((response) => {
                  console.log(response);
                })
                .then((error) => {

                });
  }, []);

  return -1;
};