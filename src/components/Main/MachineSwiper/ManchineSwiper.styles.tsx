import styled from "@emotion/styled";

export const SwiperContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  .swiper {
    &-button-disabled {
      visibility: hidden;
    }
    --swiper-theme-color: #fff;
  }
`;

export const SwiperSlideCard = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SwiperImage1 = styled.img`
  width: 80%;
`;
export const SwiperImage2 = styled.img`
  width: 90%;
`;

export const NavBtn = styled.button`
  border: 0;
  background-color: transparent;
  position: absolute;
  top: 50%;
  z-index: 99999;
  &.prev {
    left: 10px;
  }
  &.next {
    right: 10px;
  }
`; 