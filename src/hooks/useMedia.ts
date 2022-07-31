import { useState, useEffect } from "react";

export const useMedia = (width: string) => {
  const [w, setWidth] = useState(false);
  const isWidth = window.matchMedia(`(${width})`).matches;
  useEffect(() => {}, [isWidth]);
  const columnNum = () => {};
};
