import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperContainer, SwiperSlideCard } from "./ManchineSwiper.styles";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MachineSwiper = () => {
  return (
    <SwiperContainer>
      <Swiper
      // modules={[Navigation, Pagination, Scrollbar, A11y]} << 오류 나네.. 힝구
      // navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <SwiperSlideCard />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideCard />
        </SwiperSlide>
      </Swiper>
    </SwiperContainer>
  );
};

export default MachineSwiper;
