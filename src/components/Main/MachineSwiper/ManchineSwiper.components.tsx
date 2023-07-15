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

const MachineSwiper = () => {
  return (
    <SwiperContainer>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
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
