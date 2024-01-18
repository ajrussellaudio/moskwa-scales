import { booleanToMoskwa } from "./booleanToMoskwa";

export function stringifyScales(scales: BooleanScale[]) {
  return scales.map((scale) => booleanToMoskwa(scale).join(",")).join("\n");
}
