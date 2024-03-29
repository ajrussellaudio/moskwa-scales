import { ReactNode, createContext, useReducer } from "react";
import { ScalesReducer, ScalesReducerActionType } from "./Scales.reducer";

const initialState = new Array(8).fill(new Array(12).fill(false));

type ToggleNoteFn = (scaleIndex: number, noteIndex: number) => void;

type SetScaleFn = (scaleIndex: number, newScale: BooleanScale) => void;

type ScalesContextType = {
  scales: BooleanScale[];
  toggleNote: ToggleNoteFn;
  setScale: SetScaleFn;
};

export const ScalesContext = createContext<ScalesContextType | null>(null);

export const ScalesProvider = ({ children }: { children: ReactNode }) => {
  const [scales, dispatch] = useReducer(ScalesReducer, initialState);

  const toggleNote: ToggleNoteFn = (scaleIndex, noteIndex) => {
    dispatch({ type: ScalesReducerActionType.TOGGLE_NOTE_VALUE, scaleIndex, noteIndex });
  };

  const setScale: SetScaleFn = (scaleIndex, newScale) => {
    dispatch({ type: ScalesReducerActionType.SET_SCALE, scaleIndex, payload: newScale });
  };

  return <ScalesContext.Provider value={{ scales, toggleNote, setScale }}>{children}</ScalesContext.Provider>;
};
