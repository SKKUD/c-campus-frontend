import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { ToggleContainer } from "./WebHeaderSwitch.styles";

import { UserAuth } from "../../../../recoil/recoil";
import { useRecoilState } from "recoil";

const WebHeaderSwitch = () => {
  const [isOn, setisOn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [userAuth, SetUserAuth] = useRecoilState(UserAuth);

  useEffect(() => {
    if (location.pathname.slice(0, 6) === "/photo") {
      setisOn(true);
    }
  });

  const toggleHandler = () => {
    setisOn(!isOn);
    if (isOn) { // redirect to userID
      navigate(`/message/${userAuth.userID}`);
    } else {
      navigate(`/photo`);
    }
    window.scrollTo(0, 0);
  };

  return (
    <>
      <ToggleContainer onClick={toggleHandler}>
        <div className={`toggle-container ${isOn && "photo"}`}>
          <div>콩캠머신</div> <div>콩캠네컷</div>
        </div>
        <div className={`toggle-circle ${isOn && "photo-circle"}`}>
          {isOn ? "콩캠네컷" : "콩캠머신"}
        </div>
      </ToggleContainer>
    </>
  );
};

export default WebHeaderSwitch;
