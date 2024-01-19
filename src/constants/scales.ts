import { moskwaToBoolean } from "../lib/moskwaToBoolean";
import { rotateLeft, rotateRight } from "../lib/rotate";

const MAJOR_SCALE = [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1] satisfies MoskwaScale;
const MAJOR_PENTA_SCALE = [1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0] satisfies MoskwaScale;

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
  {
    name: "Major Pentatonic",
    scale: moskwaToBoolean(MAJOR_PENTA_SCALE),
  },
  {
    name: "Minor Pentatonic",
    scale: moskwaToBoolean(rotateRight(MAJOR_PENTA_SCALE, 3)),
  },
  {
    name: "Ionian",
    scale: moskwaToBoolean(MAJOR_SCALE),
  },
  {
    name: "Dorian",
    scale: moskwaToBoolean(rotateLeft(MAJOR_SCALE, 2)),
  },
  {
    name: "Phrygian",
    scale: moskwaToBoolean(rotateLeft(MAJOR_SCALE, 4)),
  },
  {
    name: "Lydian",
    scale: moskwaToBoolean(rotateLeft(MAJOR_SCALE, 5)),
  },
  {
    name: "Mixolydian",
    scale: moskwaToBoolean(rotateLeft(MAJOR_SCALE, 7)),
  },
  {
    name: "Aeolian",
    scale: moskwaToBoolean(rotateLeft(MAJOR_SCALE, 9)),
  },
  {
    name: "Locrian",
    scale: moskwaToBoolean(rotateLeft(MAJOR_SCALE, 11)),
  },
];
