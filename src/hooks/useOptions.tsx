import { useMemo } from "react";

import useResponsiveFontSize from "./useResponsiveFontSize";

export const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#de0000",
        },
      },
    }),
    [fontSize]
  );

  return options;
};
