import { useEffect, useState } from "react";
import axios from "axios";


// 뽑지않은 메시지 확인하기
export const CheckRemainCount = (userAuth: string) => {
  const [messageNumber, SetMessageNumber] = useState<string>("0");

  useEffect(() => {
    // console.log("auth " + checkAuth);
    const fetchRemainCount = async () => {
      if (userAuth) {
        // check userAuth exist
        const res = await axios
          .get(
            `${process.env.REACT_APP_BACKEND_SERVER}/users/${userAuth}/message/remain-count`,
            { withCredentials: true }
          )
          .then((response) => {
            if (response.status === 200) {
              SetMessageNumber(response.data.data);
            } else {
              // error occured
              console.log("error");
              SetMessageNumber("0");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
    fetchRemainCount();
  }, [userAuth]);
  
  // return
  return [messageNumber];
};

// remain-count 확인하고 메시지 5개 뽑기 (근데 이거는 버튼 누를 때 call해야하는데..? 그래서 일단 그냥 버튼 눌렀을 때 axios 콜하는거로..)
export const PullMessage = (userAuth: string) => {
  
  useEffect(() => {
    const fetchPullMessage = async () => {
      if (userAuth) { // check userAuth exist
        // pull message
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_SERVER}/users/${userAuth}/messages/unpulled`, 
                            { withCredentials: true }
                          )
                          .then((response) => {
                            if (response.status === 400) {
                              console.log("5개 미만임")
                            } else if (response.status === 200) {
                              console.log("성공적으로 뽑음")
                            } else {
                              console.log("이외의 오류")
                            }
                            
                            console.log(response);
                          })
                          .catch((error) => {
                            console.log(error);
                          });
      }
    };
    fetchPullMessage();
  }, []);

  return [];
};