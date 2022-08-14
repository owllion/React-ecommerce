import { useState, useEffect } from "react";

export const useKeyDown = (targetKey: string): boolean => {
  const [keyDown, setKeyDown] = useState(false);
  const downHandler = ({ key }: { key: string }) => {
    if (key === targetKey) setKeyDown(true);
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, []);
  return keyDown;
};
