import { ReactNode, createContext } from "react";

const initialState = new Array(8).fill(new Array(12).fill(false));

export const ScalesContext = createContext<BooleanScale[] | null>(null);

export const ScalesProvider = ({ children }: { children: ReactNode }) => {
  return <ScalesContext.Provider value={initialState}>{children}</ScalesContext.Provider>;
};
