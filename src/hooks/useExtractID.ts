import { useEffect, useState } from "react";

export const useExtractID = () => {
  const [currentID, SetCurrentID] = useState<string>("");
  useEffect(() => {
    // get current url
    const currentUrl: string = window.location.href;

    // extract id /
    const splitparams: string[] = currentUrl.split("/");

    let id = splitparams[splitparams.length - 1];

    if (id.includes("?")) {
      id = id.substring(0, id.indexOf("?"));
    }

    // set it to currentID
    SetCurrentID(id);
  });

  return currentID;
};
