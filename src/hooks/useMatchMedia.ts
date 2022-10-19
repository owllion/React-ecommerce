import { useEffect, useState } from "react";

export const useMatchMedia = (width: string) => {
  const [isTargetWidth, setWidth] = useState(false);
  const isPadWidth = window.matchMedia(`(max-width: ${width})`);
  useEffect(() => {
    setWidth(isPadWidth?.matches);
  }, []);
  useEffect(() => {
    isPadWidth?.addEventListener("change", (event: MediaQueryListEvent) => {
      setWidth(event.matches);
    });
    return () =>
      isPadWidth?.removeEventListener(
        "change",
        (event: MediaQueryListEvent) => {
          setWidth(event.matches);
        }
      );
  });
  return isTargetWidth;
};
