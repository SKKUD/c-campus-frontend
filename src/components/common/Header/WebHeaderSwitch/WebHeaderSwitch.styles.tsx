import styled from "@emotion/styled";

export const ToggleContainer = styled.div`
  position: relative;
  cursor: pointer;

  > .toggle-container {
    width: 220px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 10000px;
    background-color: #fff;
    color: #e4e4e4;
    text-align: center;
    font-family: Cafe24Ssurround;
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    > div {
      width: 110px;
    }
  }
  //.photo 클래스가 활성화 되었을 경우의 CSS를 구현
  > .photo {
    /* color: rgba(80, 207, 177, 1); */
    transition: 0.7s;
  }

  > .toggle-circle {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 110px;
    height: 40px;
    border-radius: 10000px;
    transition: 0.5s;
    background: #f2ffe1;
    color: #164300;
    text-align: center;
    font-family: Cafe24Ssurround;
    font-size: 16px;
    font-weight: 600;
    box-shadow: 2px 0px 2px 0px rgba(0, 0, 0, 0.07);
  }
  //.photo 클래스가 활성화 되었을 경우의 CSS를 구현
  > .photo-circle {
    top: 0px;
    left: 110px;
    transition: 0.5s;
    box-shadow: -2px 0px 2px 0px rgba(0, 0, 0, 0.07);
  }
`;
