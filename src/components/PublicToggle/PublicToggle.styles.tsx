import styled from "@emotion/styled";

export const PublicToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-top: 70px;
  margin-right: 10px;
`;

export const ToggleContainer = styled.div`
  -webkit-tap-highlight-color : transparent;
  position: relative;
  margin-top: 20px;
  cursor: pointer;

  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: #FFFFFF
  }

  > .toggle--checked-container {
    transition : 0.5s;
  }

  > .toggle-circle {
    position: absolute;
    align-items: center;
    top: 3.5px;
    left: 29px;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background-color: #C8C8C8;
    transition : 0.5s;
  } 

  > .toggle--checked-circle {
    left: 4px;
    transition : 0.5s;
    background-color: #8DC63F;
  }
`;

export const ToggleDescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
`;

export const ToggleDescription = styled.div<{ color: string}>`
  //설명 부분의 CSS를 구현
  font-family: GmarketSansMedium;
  color: ${props => props.color};
  text-align: center;
  margin: 20px;
  margin-right: 5px;
  width: 85px;
  display: flex;
  justify-content: right;
`;