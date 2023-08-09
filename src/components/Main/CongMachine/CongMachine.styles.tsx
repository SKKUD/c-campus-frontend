import styled from "@emotion/styled";

export const CongMachineContainer = styled.div`
  width: 100%;
  max-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const MachineImage = styled.img`
  width: 40vh;
  min-width: 280px;
  max-width: 100%;
  @media (max-width: 375px) {
    min-width: 250px;
  }
  @media (max-width: 290px) {
    min-width: 200px;
  }
`;

export const MachinePhotoImage = styled.img`
  padding: 50px 0 50px;
  width: 45vh;
  min-width: 320px;
  max-width: calc(100% + 30px);
  @media (max-width: 375px) {
    min-width: 290px;
    padding: 50px 0 35px;
  }
  @media (max-width: 290px) {
    min-width: 240px;
    padding: 50px 0 28px;
  }
`;
