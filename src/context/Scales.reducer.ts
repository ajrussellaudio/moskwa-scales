import { toggleAtIndex } from "../lib/toggleAtIndex";

export enum ScalesReducerActionType {
  TOGGLE_NOTE_VALUE,
  SET_SCALE,
  INIT,
}

type ScalesReducerState = BooleanScale[];

type ScalesReducerAction =
  | {
      type: ScalesReducerActionType.TOGGLE_NOTE_VALUE;
      scaleIndex: number;
      noteIndex: number;
    }
  | {
      type: ScalesReducerActionType.SET_SCALE;
      scaleIndex: number;
      payload: BooleanScale;
    }
  | {
      type: ScalesReducerActionType.INIT;
      payload: ScalesReducerState;
    };

export function ScalesReducer(state: ScalesReducerState, action: ScalesReducerAction): ScalesReducerState {
  if (action.type === ScalesReducerActionType.INIT) {
    return [...action.payload];
  }
  if (action.type === ScalesReducerActionType.SET_SCALE) {
    const { scaleIndex, payload } = action;
    return [...state.slice(0, action.scaleIndex), payload, ...state.slice(scaleIndex + 1)];
  }
  if (action.type === ScalesReducerActionType.TOGGLE_NOTE_VALUE) {
    const { scaleIndex, noteIndex } = action;
    return [
      ...state.slice(0, action.scaleIndex),
      toggleAtIndex(state[scaleIndex], noteIndex),
      ...state.slice(scaleIndex + 1),
    ];
  }
  return [...state];
}
