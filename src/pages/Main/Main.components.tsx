import { FC, useState } from "react";
import { MainContainer, MainBackground } from "./Main.styles";
import ManchineSwiper from "../../components/Main/MachineSwiper/ManchineSwiper.components";
import ButtonsGroup from "../../components/Main/ButtonGroup/ButtonGroup.components";

const Main: FC = () => {
  const [slide, setSlide] = useState<number>(0);
  return (
    <MainContainer>
      <ButtonsGroup slide={slide} />
      <ManchineSwiper setSlide={setSlide} />
      <MainBackground />
    </MainContainer>
  );
};

export default Main;
