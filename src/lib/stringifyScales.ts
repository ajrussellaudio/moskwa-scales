export function stringifyScales(scales: BooleanScale[]) {
  return scales.map((scale) => scale.map((note) => (note ? 1 : 0)).join(",")).join("\n");
}
