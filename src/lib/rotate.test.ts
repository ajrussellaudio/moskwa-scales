import { rotateLeft, rotateRight } from "./rotate";

describe("rotateLeft", () => {
  it("rotates an array left by the given amount", () => {
    expect(rotateLeft([1, 2, 3, 4], 1)).toEqual([2, 3, 4, 1]);
    expect(rotateLeft([1, 2, 3, 4], 3)).toEqual([4, 1, 2, 3]);
  });

  it("...even when the amount is bigger than the array", () => {
    expect(rotateLeft([1, 2, 3, 4], 5)).toEqual([2, 3, 4, 1]);
    expect(rotateLeft([1, 2, 3, 4], 102)).toEqual([3, 4, 1, 2]);
  });

  it("...even when the amount is negative", () => {
    expect(rotateLeft([1, 2, 3, 4], -1)).toEqual([4, 1, 2, 3]);
    expect(rotateLeft([1, 2, 3, 4], -3)).toEqual([2, 3, 4, 1]);
  });

  it("works with arrays of any type", () => {
    expect(rotateLeft([true, false, "banana", { coords: ["x", "y"] }], 3)).toEqual([
      { coords: ["x", "y"] },
      true,
      false,
      "banana",
    ]);
  });
});

describe("rotateRight", () => {
  it("rotates an array left by the given amount", () => {
    expect(rotateRight([1, 2, 3, 4], 1)).toEqual([4, 1, 2, 3]);
    expect(rotateRight([1, 2, 3, 4], 3)).toEqual([2, 3, 4, 1]);
  });

  it("...even when the amount is bigger than the array", () => {
    expect(rotateRight([1, 2, 3, 4], 5)).toEqual([4, 1, 2, 3]);
    expect(rotateRight([1, 2, 3, 4], 102)).toEqual([3, 4, 1, 2]);
  });

  it("...even when the amount is negative", () => {
    expect(rotateRight([1, 2, 3, 4], -1)).toEqual([2, 3, 4, 1]);
    expect(rotateRight([1, 2, 3, 4], -3)).toEqual([4, 1, 2, 3]);
  });

  it("works with arrays of any type", () => {
    expect(rotateRight([true, false, "banana", { coords: ["x", "y"] }], 3)).toEqual([
      false,
      "banana",
      { coords: ["x", "y"] },
      true,
    ]);
  });
});
