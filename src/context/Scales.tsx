import { ReactNode, createContext, useReducer } from "react";
import { ScalesReducer, ScalesReducerActionType } from "./Scales.reducer";

const initialState = new Array(8).fill(new Array(12).fill(false));

type ToggleNoteFn = (scaleNumber: number, noteIndex: number) => void;

type ScalesContextType = {
  scales: BooleanScale[];
  toggleNote: ToggleNoteFn;
};

export const ScalesContext = createContext<ScalesContextType | null>(null);

export const ScalesProvider = ({ children }: { children: ReactNode }) => {
  const [scales, dispatch] = useReducer(ScalesReducer, initialState);

  const toggleNote: ToggleNoteFn = (scaleIndex: number, noteIndex: number) => {
    dispatch({ type: ScalesReducerActionType.TOGGLE_NOTE_VALUE, scaleIndex, noteIndex });
  };

  return <ScalesContext.Provider value={{ scales, toggleNote }}>{children}</ScalesContext.Provider>;
};
