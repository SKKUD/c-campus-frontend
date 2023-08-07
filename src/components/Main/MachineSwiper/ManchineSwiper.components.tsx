import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperContainer, SwiperSlideCard } from "./ManchineSwiper.styles";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PrevBtn, NextBtn } from "./SwiperNavigationBtn.components";
import CongMachine from "../CongMachine/CongMachine.components";
import { FC } from "react";
import CongPhotoMachine from "../CongMachine/CongPhotoMachine.components";

interface MachineSwiperProps {
  setSlide: React.Dispatch<React.SetStateAction<number>>;
}

const MachineSwiper: FC<MachineSwiperProps> = ({ setSlide }) => {
  return (
    <SwiperContainer>
      <PrevBtn />
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper.realIndex)}
        onSlideChange={(swiper) => setSlide(swiper.realIndex)}
      >
        <SwiperSlide>
          <SwiperSlideCard>
            <CongMachine />
          </SwiperSlideCard>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideCard>
            <CongPhotoMachine />
          </SwiperSlideCard>
        </SwiperSlide>
      </Swiper>
      <NextBtn />
    </SwiperContainer>
  );
};

export default MachineSwiper;
