import { toggleAtIndex } from "./toggleAtIndex";

describe("toggleAtIndex", () => {
  it("flips a boolean in an array by its index", () => {
    expect(toggleAtIndex([false, false, false], 0)).toEqual([true, false, false]);
    expect(toggleAtIndex([false, false, false], 1)).toEqual([false, true, false]);
    expect(toggleAtIndex([false, false, false], 2)).toEqual([false, false, true]);

    expect(toggleAtIndex([true, true, true], 0)).toEqual([false, true, true]);
    expect(toggleAtIndex([true, true, true], 1)).toEqual([true, false, true]);
    expect(toggleAtIndex([true, true, true], 2)).toEqual([true, true, false]);
  });

  it("returns the original array if index is out of bounds", () => {
    expect(toggleAtIndex([false, true, true], 3)).toEqual([false, true, true]);
  });
});
