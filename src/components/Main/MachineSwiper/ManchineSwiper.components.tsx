import { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  SwiperContainer,
  SwiperSlideCard,
  SwiperImage1,
  SwiperImage2,
} from "./ManchineSwiper.styles";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import congmachine1 from "../../../assets/images/congmachine1.png";
import congmachine2 from "../../../assets/images/congmachine2.png";
import { FC } from "react";

interface MachineSwiperProps {
  setSlide: React.Dispatch<React.SetStateAction<number>>;
}

const MachineSwiper: FC<MachineSwiperProps> = ({ setSlide }) => {
  return (
    <SwiperContainer>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper.realIndex)}
        onSlideChange={(swiper) => setSlide(swiper.realIndex)}
      >
        <SwiperSlide>
          <SwiperSlideCard>
            <SwiperImage1 src={congmachine1} />
          </SwiperSlideCard>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideCard>
            <SwiperImage2 src={congmachine2} />
          </SwiperSlideCard>
        </SwiperSlide>
      </Swiper>
    </SwiperContainer>
  );
};

export default MachineSwiper;
