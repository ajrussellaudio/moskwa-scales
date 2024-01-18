import { useContext } from "react";
import { ScalesContext } from "../context/Scales";

export const useScales = () => {
  const context = useContext(ScalesContext);

  if (!context) {
    throw new Error("useScales must be used in a ScaleProvider");
  }

  return context;
};
