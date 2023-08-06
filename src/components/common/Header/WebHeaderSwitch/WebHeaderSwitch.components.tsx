import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { ToggleContainer } from "./WebHeaderSwitch.styles";

const WebHeaderSwitch = () => {
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
      navigate(`/message`);
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
