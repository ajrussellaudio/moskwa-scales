import { booleanToMoskwa } from "./booleanToMoskwa";

describe("moskwaToBoolean", () => {
  it("converts an array of false or true to 0 or 1", () => {
    expect(booleanToMoskwa([true, false, false, true])).toEqual([1, 0, 0, 1]);
  });
});
