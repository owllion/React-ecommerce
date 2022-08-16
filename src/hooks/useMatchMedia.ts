import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { productActions } from "../store/slice/Product.slice";

export const useMatchMedia = (width: string) => {
  const isPadWidth = window.matchMedia(`(max-width: ${width})`);
  const dispatch = useAppDispatch();
  useEffect(() => {
    isPadWidth.addEventListener("change", (event: MediaQueryListEvent) => {
      dispatch(productActions.setIsTargetWidth(event.matches));
    });
    return () =>
      isPadWidth.removeEventListener("change", (event: MediaQueryListEvent) => {
        dispatch(productActions.setIsTargetWidth(event.matches));
      });
  });
};
