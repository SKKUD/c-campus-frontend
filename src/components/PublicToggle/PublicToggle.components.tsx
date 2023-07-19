import { 
  PublicToggleContainer,
  ToggleContainer,
  ToggleDescriptionContainer,
  ToggleDescription,
} from "./PublicToggle.styles";

import { useState } from "react";

export const PublicToggle = () => {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn)
  };

  return (
    <PublicToggleContainer>
      <ToggleDescriptionContainer>
        {isOn === false ?
          <ToggleDescription>비공개</ToggleDescription> :
          <ToggleDescription>공개</ToggleDescription>
        }
      </ToggleDescriptionContainer>

      <ToggleContainer onClick={toggleHandler}>
        <div className={`toggle-container ${isOn ? "toggle--checked-container" : null}`}/>
        <div className={`toggle-circle ${isOn ? "toggle--checked-circle" : null}`}/>
      </ToggleContainer>
      
    </PublicToggleContainer>
  );
};

export default PublicToggle;