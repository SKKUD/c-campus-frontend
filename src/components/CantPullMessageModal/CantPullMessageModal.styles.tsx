import styled from "@emotion/styled";

export const CantPullMessageModalContainer = styled.div`
  width: 100%;
  margin: 10px 0 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const CantPullMessageModalGreenText = styled.div`
  color: var(--main, #8DC63F);
  text-align: center;
  font-family: GmarketSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
`

export const CantPullMessageModalText = styled.div`
  color: var(--font-black, #303030);
  text-align: center;
  font-family: GmarketSans;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
`;
