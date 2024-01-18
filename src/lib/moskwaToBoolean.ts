export function moskwaToBoolean(moskwaScale: MoskwaScale): BooleanScale {
  return moskwaScale.map((note) => note !== 0);
}
