import { ScalesReducer, ScalesReducerActionType } from "./Scales.reducer";

describe("ScalesReducer", () => {
  it("can be initialised", () => {
    const initialState = new Array(3).fill(new Array(3).fill(false));
    const initialisedState = ScalesReducer([], { type: ScalesReducerActionType.INIT, payload: initialState });
    expect(initialisedState).toEqual(initialState);
  });

  it("can set a whole scale", () => {
    const SCALE_LENGTH = 12;
    const NEW_SCALE_INDEX = 6;
    const initialState = new Array(8).fill(new Array(SCALE_LENGTH).fill(false));
    const newScale = new Array(SCALE_LENGTH).fill(null).map(() => Math.random() >= 0.5);
    const updated = ScalesReducer(initialState, {
      type: ScalesReducerActionType.SET_SCALE,
      scaleIndex: NEW_SCALE_INDEX,
      payload: newScale,
    });
    expect(updated[NEW_SCALE_INDEX]).toEqual(newScale);
    updated.forEach((_, i) => {
      if (i === NEW_SCALE_INDEX) {
        return;
      }
      expect(updated[i]).toEqual(initialState[i]);
    });
  });

  it("toggles a note on at the given scaleIndex and noteIndex", () => {
    const initialState = new Array(3).fill(new Array(3).fill(false));
    const updated = ScalesReducer(initialState, {
      type: ScalesReducerActionType.TOGGLE_NOTE_VALUE,
      scaleIndex: 1,
      noteIndex: 2,
    });
    expect(updated).toEqual([
      [false, false, false],
      [false, false, true],
      [false, false, false],
    ]);
  });
});
