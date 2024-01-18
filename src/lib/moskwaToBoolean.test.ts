import { moskwaToBoolean } from "./moskwaToBoolean";

describe("moskwaToBoolean", () => {
  it("converts an array of 0 or 1 to false or true", () => {
    expect(moskwaToBoolean([1, 0, 0, 1])).toEqual([true, false, false, true]);
  });
});
