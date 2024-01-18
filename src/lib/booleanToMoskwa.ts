export function booleanToMoskwa(booleanScale: BooleanScale): MoskwaScale {
  return booleanScale.map((note) => (note ? 1 : 0));
}
