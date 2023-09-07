import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { ToggleContainer } from "./WebHeaderSwitch.styles";
import { useAuthCheckApi } from "../../../../hooks/LoginAxios";

const WebHeaderSwitch = () => {
  const [checkAuth] = useAuthCheckApi();
  const [isOn, setisOn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.slice(0, 6) === "/photo") {
      setisOn(true);
    }
  });

  const toggleHandler = () => {
    setisOn(!isOn);
    if (isOn) {
      // redirect to userID
      navigate(`/${checkAuth}`);
    } else {
      navigate(`/photo/${checkAuth}`);
    }
    window.scrollTo(0, 0);
  };

  return (
    <>
      <ToggleContainer onClick={toggleHandler}>
        <div className={`toggle-container ${isOn && "photo"}`}>
          <div className="toggle-text">콩캠머신</div> <div className="toggle-text">콩캠네컷</div>
        </div>
        <div className={`toggle-circle ${isOn && "photo-circle"}`}>
          <div className="toggle-text">{isOn ? "콩캠네컷" : "콩캠머신"}</div>
        </div>
      </ToggleContainer>
    </>
  );
};

export default WebHeaderSwitch;
