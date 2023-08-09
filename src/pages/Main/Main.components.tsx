import { FC, useState } from "react";
import { MainContainer, MainBackground } from "./Main.styles";
import ManchineSwiper from "../../components/Main/MachineSwiper/ManchineSwiper.components";

const Main: FC = () => {
  const [slide, setSlide] = useState<number>(0);
  return (
    <MainContainer>
      <ManchineSwiper slide={slide} setSlide={setSlide} />
      <MainBackground />
    </MainContainer>
  );
};

export default Main;
