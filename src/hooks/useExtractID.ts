import { useEffect, useState } from "react";

export const useExtractID = () => {
  const [currentID, SetCurrentID] = useState<string>("");
  useEffect(() => {
    // get current url
    const currentUrl: string = window.location.href;

    // extract id /
    const splitparams: string[] = currentUrl.split("/");

    // set it to currentID
    SetCurrentID(splitparams[splitparams.length - 1]);
  });

  return currentID;
};
