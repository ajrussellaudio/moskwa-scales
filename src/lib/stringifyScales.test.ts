import { stringifyScales } from "./stringifyScales";

describe("stringifyScales", () => {
  it("turns an array of boolean scales into a string", () => {
    const input = new Array(4).fill(new Array(3).fill(false));
    expect(stringifyScales(input)).toEqual("0,0,0\n0,0,0\n0,0,0\n0,0,0");
  });
});
