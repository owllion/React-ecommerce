import { useEffect, useRef } from "react";

export const useUpdateEffect = (
  callback: () => void,
  dependencies: React.DependencyList
) => {
  // console.log(callback, "callback");
  const firstRenderRef = useRef(true);
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback;
  }, dependencies);
};
