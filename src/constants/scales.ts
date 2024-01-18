import { moskwaToBoolean } from "../lib/moskwaToBoolean";
import { rotateRight } from "../lib/rotate";

const MAJOR_SCALE = [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1] satisfies MoskwaScale;

export const SCALE_PRESETS = [
  {
    name: "Chromatic",
    scale: new Array(12).fill(true),
  },
  {
    name: "Major",
    scale: moskwaToBoolean(MAJOR_SCALE),
  },
  {
    name: "Minor (Natural)",
    scale: moskwaToBoolean(rotateRight(MAJOR_SCALE, 3)),
  },
];
