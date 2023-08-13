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

// import for recoil
import { IsLoginRecoil } from "../../../recoil/recoil";
import { useRecoilState } from "recoil";

interface MachineSwiperProps {
  slide: number;
  setSlide: React.Dispatch<React.SetStateAction<number>>;
}

const MachineSwiper: FC<MachineSwiperProps> = ({ slide, setSlide }) => {
  const [isLogin, SetIsLogin] = useRecoilState(IsLoginRecoil);

  return (
    <SwiperContainer>
      {
        isLogin ? (
          <PrevBtn />
        ) : (
          <>
          </>
        )
      }

      { // 로그인이 되어있으면 message와 콩캠네컷 스와이프 가능 | 로그인 안되어있으면 CongMachine화면에서 쪽지쓰고 피드보는 것만 가능
        isLogin ? (
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
                <CongMachine slide={slide} />
              </SwiperSlideCard>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSlideCard>
                <CongPhotoMachine slide={slide} />
              </SwiperSlideCard>
            </SwiperSlide>
          </Swiper>
        ) : (
          <CongMachine slide={slide} />
        ) 
      }
      {
        isLogin ? (
          <NextBtn />
        ) : (
          <>
          </>
        )
      }
    </SwiperContainer>
  );
};

export default MachineSwiper;
