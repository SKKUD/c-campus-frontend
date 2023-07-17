import styled from "styled-components";

// 인생네컷 큰 틀
export const Fourcut = styled.div<{ height: string, width: string }>`
  height: ${props => props.height};
  width: ${props => props.width};
  display: flex;
  flex-direction: column;
  background-color: green;
`

// 각 사진을 담는 holder
export const PictureHolder = styled.div<{ height: string, width: string }>`
  height: ${props => props.height};
  width: ${props => props.width};
  background-color: white;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 0px;
  
`

// 인생네컷 사진
export const Picture = styled.img<{ src: string, height: string, width: string}>`
  height: ${props => props.height};
  width: ${props => props.width};
  src: ${props => props.src};
`