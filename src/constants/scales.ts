import { moskwaToBoolean } from "../lib/moskwaToBoolean";
import { rotateLeft, rotateRight } from "../lib/rotate";

const MAJOR_SCALE = [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1] satisfies MoskwaScale;
const MAJOR_PENTA_SCALE = [1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0] satisfies MoskwaScale;

export const SCALE_PRESETS = [
  {
    name: "Chromatic",
    notes: new Array(12).fill(true),
  },
  {
    name: "Major",
    notes: moskwaToBoolean(MAJOR_SCALE),
  },
  {
    name: "Minor (Natural)",
    notes: moskwaToBoolean(rotateRight(MAJOR_SCALE, 3)),
  },
  {
    name: "Major Pentatonic",
    notes: moskwaToBoolean(MAJOR_PENTA_SCALE),
  },
  {
    name: "Minor Pentatonic",
    notes: moskwaToBoolean(rotateRight(MAJOR_PENTA_SCALE, 3)),
  },
  {
    name: "Ionian",
    notes: moskwaToBoolean(MAJOR_SCALE),
  },
  {
    name: "Dorian",
    notes: moskwaToBoolean(rotateLeft(MAJOR_SCALE, 2)),
  },
  {
    name: "Phrygian",
    notes: moskwaToBoolean(rotateLeft(MAJOR_SCALE, 4)),
  },
  {
    name: "Lydian",
    notes: moskwaToBoolean(rotateLeft(MAJOR_SCALE, 5)),
  },
  {
    name: "Mixolydian",
    notes: moskwaToBoolean(rotateLeft(MAJOR_SCALE, 7)),
  },
  {
    name: "Aeolian",
    notes: moskwaToBoolean(rotateLeft(MAJOR_SCALE, 9)),
  },
  {
    name: "Locrian",
    notes: moskwaToBoolean(rotateLeft(MAJOR_SCALE, 11)),
  },
] satisfies ScalePreset[];
