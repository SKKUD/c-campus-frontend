import { SafariContainer } from "./SafariAlert.styles";

const SafariAlert = () => {
  const UA = navigator.userAgent.toLowerCase();
  const isChrome = UA.includes("chrome");

  return <SafariContainer>{UA}</SafariContainer>;
};

export default SafariAlert;
